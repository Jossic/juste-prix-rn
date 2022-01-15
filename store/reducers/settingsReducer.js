import { UPDATE_SETTINGS } from '../actions/settingsAction';

const initialState = {
	settings: {
		minimum: '0',
		maximum: '1000',
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SETTINGS:
			// console.log(`action =>`, action);
			return {
				...state,
				settings: action.settings,
			};
		default:
			return state;
	}
};
