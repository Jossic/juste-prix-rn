export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const START_GAME = 'START_GAME';
export const SAVE_DATA = 'SAVE_DATA';

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
export const saveData = (count, randomNum) => {
	return {
		type: SAVE_DATA,
		gameStarted: false,
		count,
		randomNum,
	};
};
