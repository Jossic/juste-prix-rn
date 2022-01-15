import { UPDATE_SETTINGS } from '../actions/settingsAction';

const initialState = {
	settings: {
		minimum: 0,
		maximum: 1000,
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SETTINGS:
			return {
				...state,
				products: [{ name: action.product }, ...state.products],
			};
		default:
			return state;
	}
};
