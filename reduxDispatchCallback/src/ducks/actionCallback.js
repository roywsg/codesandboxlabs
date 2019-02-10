const INCREMENT_COUNT = 'INCREMENT_COUNT'

export const incrementCountWithNoDispatch = () => ({type: INCREMENT_COUNT})

export const incrementCountWithoutAwait = () => dispatch => {
    dispatch(_incrementCountWithoutAwait())
}
const _incrementCountWithoutAwait = () => ({type: INCREMENT_COUNT})

export const incrementCountWithAwait = () => dispatch => {
    dispatch(_incrementCountWithAwait())
}
const _incrementCountWithAwait = () => ({type: INCREMENT_COUNT})

const initState = {count: 0}

const actionCallback = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {count: state.count + 1}
        default:
            return state
    }
}

export default actionCallback