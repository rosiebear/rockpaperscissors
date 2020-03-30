import "core-js/stable";
import "regenerator-runtime/runtime";
import 'normalize.css/normalize.css';

import { ToolList } from "./components/tool-list";
import '../css/index.scss';

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

export const Game = (() => {
	let state = {
		count: 0
	};

	const handleClick = () => {
		play();
	};

	const renderComponents = () => (`
		${ToolList({ tools, handleClick })}
	`);

	const setState = (handler) => {
		state = handler(state);
	};

	const play = () =>
		setState(state => ({
			...state,
			count: state.count + 1
		}));

	return {
		loadGame: () => {
			document.querySelector('#root').innerHTML = renderComponents();
		}
	}
})();


Game.loadGame();
