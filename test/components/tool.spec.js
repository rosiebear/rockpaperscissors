import { Tool } from '../../src/js/components/tool';
import { Paper } from '../../src/icons/paper';

describe('Tool', () => {
	it('should render the Icon', () => {
		document.body.innerHTML = Tool({ Icon: Paper, handleClick: 'testFunction()'});
		const icon = document.querySelectorAll('svg');
		expect(icon.length).toEqual(1);
	});

});
