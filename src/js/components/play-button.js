export const PlayButton = ({ winner }) => (
		`<button id="play" class="play-button">PLAY ${winner !== null ? 'AGAIN' : ``}</button>`
);
