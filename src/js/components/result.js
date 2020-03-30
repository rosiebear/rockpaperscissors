export const Result = ({ winner, player1Label, player2Label }) => (
	`<div class="result">
		<span>
			${winner === 0 ? 'TIE' : `${(winner === 1 ? player1Label : player2Label)} WINS`}
		</span>
	</div>`
);
