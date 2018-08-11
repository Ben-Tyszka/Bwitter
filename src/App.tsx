import * as React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import firebase from './bwitterFirebase'
import AppPage from './pages/AppPage'
import CreateAccountPage from './pages/CreateAccountPage'
import HomePage from './pages/HomePage'
import store from './store'

interface IState {
  authorized: boolean
  onAuthStateChangedUnsub: firebase.Unsubscribe | null
}

export default class App extends React.Component<{}, IState> {
  state: IState = {
    authorized: false,
    onAuthStateChangedUnsub: null,
  }
  componentDidMount() {
    const onAuthStateChange = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        authorized: user ? true : false
      })
    })

    this.setState({
      onAuthStateChangedUnsub: onAuthStateChange
    })
  }
  componentWillUnmount() {
    const { onAuthStateChangedUnsub } = this.state
    if (onAuthStateChangedUnsub !== null) {
      onAuthStateChangedUnsub()
    }
  }
  render() {
    const { authorized } = this.state
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <Router>
            <div>
              <Route exact={true} path='/' component={() => (authorized ? <AppPage /> : <HomePage />)} />
              <Route path='/register' component={() => (authorized ? <Redirect to='/' /> : <CreateAccountPage />)} />
            </div>
          </Router>
        </React.Fragment>
      </Provider>
    )
  }
}
