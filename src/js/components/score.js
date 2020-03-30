export const Score = ({ player1Score, player2Score, player1Label, player2Label }) => (
	`<div class="score">
		<div class="score-column">
			<h2>${player1Label}</h2>
			<p>${player1Score}</p>
		</div>
		<div class="score-column">
			<h2>${player2Label}</h2>
			<p>${player2Score}</p>
		</div>
	</div>`
);
