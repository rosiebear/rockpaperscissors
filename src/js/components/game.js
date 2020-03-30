import {ToolList} from "./tool-list";
import {Result} from "./result";
import {Score} from "./score";
import {ResetButton} from "./reset-button";

const tools = {
	rock: {
		icon: 'Rock',
		wins: ['scissors'],
	},
	paper: {
		icon: 'Paper',
		wins: ['rock'],
	},
	scissors: {
		icon: 'Scissors',
		wins: ['paper'],
	},
};

const modes = {
	vs: {
		label: 'PLAYER VS COMPUTER',
		player1Label: 'COMPUTER',
		player2Label: 'PLAYER',
	},
	simulate: {
		label: 'COMPUTER VS COMPUTER',
		player1Label: 'COMPUTER 1',
		player2Label: 'COMPUTER 2',
	}
};

const modeKeys = Object.keys(modes);
const toolKeys = Object.keys(tools);

export const getRandomTool = () => toolKeys[Math.floor(Math.random() * toolKeys.length)];

export const getWinner = (tool1, tool2) => {
	if (tool1 === tool2) return 0;
	return tools[tool1].wins.some(wins => wins === tool2) ? 1 : 2;
};

const initialState = {
	mode: modeKeys[0],
	player1: {
		weapon: null,
		score: 0,
	},
	player2: {
		weapon: null,
		score: 0,
	},
	winner: null,
};

export const Game = () => {

	let state = initialState;

	const setState = (handler) => {
		state = handler(state);
	};

	const setResult = () => {
		const winner = getWinner(state.player1.weapon, state.player2.weapon);
		setState(state => ({
			...state,
			player1: {
				...state.player1,
				...((winner === 1) ? { score: state.player1.score + 1 } : {}),
				loading: false,
			},
			player2: {
				...state.player2,
				...((winner === 2) ? { score: state.player2.score + 1 } : {}),
				loading: false,
			},
			winner,
		}));
		updateGame();
	};

	const play = (toolId) => {
		const tool1 = getRandomTool();
		const tool2 = toolId || getRandomTool();
		//const simulateMode = this.state.mode === modeKeys[1];

		setState(state => ({
			...state,
			player1: {
				...state.player1,
				weapon: tool1,
				loading: true,
			},
			player2: {
				...state.player2,
				weapon: tool2,
				//...((simulateMode) ? { loading: true } : {}),
			},
		}));

		setResult();
	};

	const reset = () => {
		setState(() => ({
			...initialState
		}));
		loadGame();
	};

	const renderComponents = () => (`
		${ToolList({ tools })}
	  ${state.winner !== null ? Result({
		winner: state.winner,
		player1Label: modes[state.mode].player1Label,
		player2Label: modes[state.mode].player2Label,
	}) : ``}
		${Score({
		player1Label: modes[state.mode].player1Label,
		player2Label: modes[state.mode].player2Label,
		player1Score: state.player1.score,
		player2Score: state.player2.score,
	})}
		${state.winner !== null ? ResetButton() : ``}
	`);

	const addToolButtonEvents = () => {
		document.querySelectorAll('.tool-button').forEach(el =>
			el.addEventListener('click', () => play(el.getAttribute('id')))
		);
	};
	const addResetButtonEvent = () => {
		const el = document.querySelector('#reset');
		el.addEventListener('click', reset)
	};

	const loadGame = () => {
		document.querySelector('body').innerHTML = renderComponents();
		addToolButtonEvents();
	};

	const updateGame = () => {
		loadGame();
		addResetButtonEvent();
	};


	return {
		loadGame
	}
};
