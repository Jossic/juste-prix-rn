import { START_GAME, UPDATE_SETTINGS } from '../actions/settingsAction';

const initialState = {
	settings: {
		minimum: '0',
		maximum: '1000',
	},
	gameStarted: false,
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
			console.log(`action =>`, action);

			return {
				...state,
				gameStarted: true,
				random: random(state.settings.minimum, state.settings.maximum),
			};
		default:
			return state;
	}
};
