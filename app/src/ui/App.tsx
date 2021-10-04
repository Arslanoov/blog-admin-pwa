import React, { Suspense } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import { CssBaseline } from "@mui/material"

import { routesPaths } from "app/routes/paths"

import MainLayout from "ui/layouts/main-layout"

const Login = React.lazy(() => import("ui/pages/auth/login"))

const App: React.FC = () => {
  return (
    <div className="app">
      <CssBaseline />
      <MainLayout>
        <Router>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route
                path={routesPaths.login}
                component={Login}
              />

              <Redirect
                to={routesPaths.login}
              />
            </Switch>
          </Suspense>
        </Router>
      </MainLayout>
    </div>
  )
}

export default App
