const defaultState = {
    cash: 0
}


export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash + action.payload }

        case "GET_CASH":
            return { ...state, cash: state.cash - action.payload }

        case "GET_ALL_CASH":
            return { ...state, cash: 0 }

        default:
            return state
    }
}