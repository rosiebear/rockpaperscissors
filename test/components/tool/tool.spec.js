import { Tool } from '../../../src/js/components/tool';
import { Paper } from '../../../src/icons/paper';

describe('Tool()', () => {
	it('should pass the handleClick function to the button', () => {
		document.body.innerHTML = Tool({ Icon: Paper, handleClick: 'testFunction()'});
		const toolButton = document.querySelector('button');
		expect(toolButton.getAttribute('onclick'))
		.toEqual('testFunction()');
	});

	it('should render the Icon', () => {
		document.body.innerHTML = Tool({ Icon: Paper, handleClick: 'testFunction()'});
		const icon = document.querySelectorAll('svg');
		expect(icon.length).toEqual(1);
	});

});
