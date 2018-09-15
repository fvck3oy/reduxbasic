const initalState = {
	number: 0
}

export default (state = initalState, action) => {
	switch (action.type) {
    case 'ADD':

    
			return {
        
        ...state,
        now:'Add',
				number: state.number + 1
			}
		case 'SUB':
			return {
        ...state,
        now:'Sub',
				number: state.number - 1
			}
		default:
			return state
	}
}
