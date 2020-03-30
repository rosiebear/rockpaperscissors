import { ToolList } from '../../../src/js/components/tool-list';

const tools = {
	rock: {
		icon: 'Rock'
	},
	paper: {
		icon: 'Paper'
	},
	scissors: {
		icon: 'Scissors'
	},
};

describe('ToolList()', () => {
	it('should render a Tool component for each tool passed', () => {
		document.body.innerHTML = ToolList({ tools, handleClick: () => {}});
		const els = document.querySelectorAll('li');
		expect(els.length).toEqual(3);
	});
});
