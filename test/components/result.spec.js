import { Result } from '../../src/js/components/result';

describe('Result', () => {
	it('should display "TIE" when winner is 0', () => {
		document.body.innerHTML = Result({
			winner: 0,
			player1Label: 'Player',
			player2Label: 'Computer'
		});
		const result = document.querySelector('.result');

		expect(result.textContent.trim()).toEqual('TIE');
	});

	it('should display `PLAYER WINS` when winner is 1', () => {
		document.body.innerHTML = Result({
			winner: 1,
			player1Label: 'PLAYER',
			player2Label: 'COMPUTER'
		});
		const result = document.querySelector('.result');

		expect(result.textContent.trim()).toEqual('PLAYER WINS');
	});

	it('should display `COMPUTER WINS` when winner isn\'t 1 or 0', () => {
		document.body.innerHTML = Result({
			winner: 2,
			player1Label: 'PLAYER',
			player2Label: 'COMPUTER'
		});
		const result = document.querySelector('.result');

		expect(result.textContent.trim()).toEqual('COMPUTER WINS');
	});
});
