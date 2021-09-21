import React from "react"
import ReactDOM from "react-dom"

import reportWebVitals from "./bootstrap/reportWebVitals"
import * as serviceWorkerRegistration from "./bootstrap/registerServiceWorker"

import App from "./ui"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorkerRegistration.unregister()
reportWebVitals()
