export const Tool = ({ Icon, tool }) => (
	`<button id="${tool}" class="tool-button">
			<span>
				${Icon()}
			</span>
	</button>`
);
