import React, { Suspense } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import { StylesProvider } from "@mui/styles"
import CssBaseline from "@mui/material/CssBaseline"

import MainLayout from "./layouts/main-layout/Main.layout"

const Login = React.lazy(() => import("./pages/Auth/Login/Login.page"))

const routesPaths = {
  login: "/auth/login"
}

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <StylesProvider injectFirst>
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
      </StylesProvider>
    </div>
  )
}

export default App
