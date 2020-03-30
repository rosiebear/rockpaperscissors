import { ResetButton } from '../../src/js/components/reset-button';

describe('ResetButton', () => {
	it('should render the button', () => {
		document.body.innerHTML = ResetButton();
		const button = document.querySelectorAll('button');
		expect(button.length).toEqual(1);
	});

});
