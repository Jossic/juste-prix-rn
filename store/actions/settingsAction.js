export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const START_GAME = 'START_GAME';

export const updateSettings = (settings) => {
	return {
		type: UPDATE_SETTINGS,
		settings,
	};
};
export const startGame = () => {
	return {
		type: START_GAME,
		gameStarted: true,
	};
};
