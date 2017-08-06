const initialState = {
	fetching: true
}

export default function profile(state = initialState, action){
	switch(action.type){
		case 'IS_FETCHING':
			return {...state, fetching: true};
		default:
			return state;
	}
}