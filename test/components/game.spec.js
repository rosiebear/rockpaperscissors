import { Game, getRandomTool, getWinner } from '../../src/js/components/game';

describe('Game', () => {

	it('should return random tool', () => {
		const tools = ['rock', 'paper', 'scissors'];
		let toolsFound = [];
		let valid = false;

		// Loop multiple times and expect all weapons to show up at least once.
		for (let i = 0, end = 20; i < end; i++) {
			const tool = getRandomTool();
			if (tools.indexOf(tool) > -1 && toolsFound.indexOf(tool) === -1) toolsFound.push(tool);
			if (toolsFound.length === tools.length) {
				valid = true;
				i = end;
			}
		}

		expect(valid).toBeTruthy();
	});

	it ('should determine winner', () => {
		let winner = getWinner('paper', 'rock');
		expect(winner).toEqual(1);
		winner = getWinner('rock', 'paper');
		expect(winner).toEqual(2);
		winner = getWinner('rock', 'scissors');
		expect(winner).toEqual(1);
		winner = getWinner('scissors', 'rock');
		expect(winner).toEqual(2);
		winner = getWinner('scissors', 'paper');
		expect(winner).toEqual(1);
		winner = getWinner('paper', 'scissors');
		expect(winner).toEqual(2);
	});

	describe('rendering components', () => {
		beforeEach(() => {
			Game().loadGame();
		});

		it('should render a tool button for each tool', () => {
			const toolEls = document.querySelectorAll('.tool-button');
			expect(toolEls.length).toEqual(3);
		});

		it('should render the score', () => {
			const scoreEl = document.querySelectorAll('.score');
			expect(scoreEl.length).toEqual(1);
		});

		it('should only render the result once the game has started', () => {
			const resultEl1 = document.querySelectorAll('.result');
			expect(resultEl1.length).toEqual(0);
			document.querySelectorAll('.tool-button')[0].click();
			const resultEl2 = document.querySelectorAll('.result');
			expect(resultEl2.length).toEqual(1);
		});

		it('should only render the reset button once the game has started', () => {
			const buttonEl1 = document.querySelectorAll('.reset-button');
			expect(buttonEl1.length).toEqual(0);
			document.querySelectorAll('.tool-button')[0].click();
			const buttonEl2 = document.querySelectorAll('.reset-button');
			expect(buttonEl2.length).toEqual(1);
		});

		describe('clicking the reset button', () => {
			beforeEach(() => {
				document.querySelectorAll('.tool-button')[0].click();
				document.querySelector('.reset-button').click();
			});
			it('should hide the result', () => {
				const resultEl = document.querySelectorAll('.result');
				expect(resultEl.length).toEqual(0);
			});
			it('should hide the reset button', () => {
				const buttonEl = document.querySelectorAll('.reset-button');
				expect(buttonEl.length).toEqual(0);
			});
		});
	});
});
