import * as React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import firebase from './bwitterFirebase'

import ProfileListener from './containers/ProfileListener'
import AppPage from './pages/AppPage'
import CreateAccountPage from './pages/CreateAccountPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'

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
          {authorized ? <ProfileListener /> : <div />}
          <Router>
            <div>
              <Route exact={true} path='/' component={() => (authorized ? <AppPage /> : <HomePage />)} />
              <Route path='/register' component={() => (authorized ? <Redirect to='/' /> : <CreateAccountPage />)} />
              <Route path='/profile' component={() => (authorized ? <ProfilePage /> : <Redirect to='/' />)} />
              <Route path='/settings' component={() => (authorized ? <SettingsPage /> : <Redirect to='/' />)} />
            </div>
          </Router>
        </React.Fragment>
      </Provider>
    )
  }
}
