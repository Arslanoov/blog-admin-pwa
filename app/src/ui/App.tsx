import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Login from "./pages/Auth/Login"

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/auth/login"
            component={Login}
          />

          <Redirect
            to="/auth/login"
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
