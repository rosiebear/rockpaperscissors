export const Tool = ({ Icon , handleClick }) => (
	`<button class="tool-button" onclick=${handleClick}>
			<span>
				${Icon()}
			</span>
	</button>`
);
