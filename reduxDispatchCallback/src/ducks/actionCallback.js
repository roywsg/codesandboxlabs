import axios from 'axios'

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

export const githubSearch = () => async dispatch => {
    const rs = await axios.get('https://api.github.com/search/repositories?q=react')
    if (rs.status === 200) dispatch(_githubSearchDone(rs.data))
}
const GITHUB_SEARCH_DONE = 'GITHUB_SEARCH_DONE'
const _githubSearchDone = d => ({type: GITHUB_SEARCH_DONE, d})

const initState = {count: 0, items: []}

const actionCallback = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {count: state.count + 1}
        case GITHUB_SEARCH_DONE:
            return {...state, items: action.d.items}
        default:
            return state
    }
}

export default actionCallback