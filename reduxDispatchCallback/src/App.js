import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    incrementCountWithNoDispatch,
    incrementCountWithoutAwait,
    incrementCountWithAwait,
    githubSearch
} from './ducks/actionCallback'

class App extends Component {

    onIncrementCountWithNoDispatch = async () => {
        await this.props.incrementCountWithNoDispatch()
        const {actionCallback: {count}} = this.props
        console.log(count)
    }

    onIncrementCountWithoutAwait = () => {
        this.props.incrementCountWithoutAwait()
        const {actionCallback: {count}} = this.props
        console.log(count)
    }

    onIncrementCountWithAwait = async () => {
        await this.props.incrementCountWithAwait()
        const {actionCallback: {count}} = this.props
        console.log(count)
    }

    onGithubSearch = async () => {
        await this.props.githubSearch()
        const {actionCallback: {items}} = this.props
        console.log(items)
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrementCountWithNoDispatch}>incrementCountWithNoDispatch</button>
                <button onClick={this.onIncrementCountWithoutAwait}>incrementCountWithoutAwait</button>
                <button onClick={this.onIncrementCountWithAwait}>incrementCountWithAwait</button>
                <button onClick={this.onGithubSearch}>onGithubSearch</button>
            </div>
        )
    }
}

const mapStateToProps = ({actionCallback}) => ({
    actionCallback
})

const mapDispatchToProps = dispatch => ({
    incrementCountWithNoDispatch: () => dispatch(incrementCountWithNoDispatch()),
    incrementCountWithoutAwait: () => dispatch(incrementCountWithoutAwait()),
    incrementCountWithAwait: () => dispatch(incrementCountWithAwait()),
    githubSearch: () => dispatch(githubSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)