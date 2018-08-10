import * as React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateAccountPage from './pages/CreateAccountPage'
import HomePage from './pages/HomePage'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <Router>
            <div>
              <Route exact={true} path='/' component={HomePage} />
              <Route exact={true} path='/register' component={CreateAccountPage} />
            </div>
          </Router>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App
