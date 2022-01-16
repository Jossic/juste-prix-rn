import {
	SAVE_DATA,
	START_GAME,
	UPDATE_SETTINGS,
} from '../actions/settingsAction';

const initialState = {
	settings: {
		minimum: '0',
		maximum: '1000',
	},
	gameStarted: false,
	score: [],
};

const random = (min, max) => {
	const rand = Math.floor(Math.random() * (max - min + 1) + min);
	return rand;
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SETTINGS:
			return {
				...state,
				settings: action.settings,
			};
		case START_GAME:
			return {
				...state,
				gameStarted: true,
				random: random(state.settings.minimum, state.settings.maximum),
			};
		case SAVE_DATA:
			console.log(`state 2 =>`, state);
			return {
				...state,
				gameStarted: false,
				score: [
					{
						count: action.count,
						randomNum: action.randomNum,
						player: 'Joueur inconnu',
					},
					...state.score,
				],
			};
		default:
			return state;
	}
};
