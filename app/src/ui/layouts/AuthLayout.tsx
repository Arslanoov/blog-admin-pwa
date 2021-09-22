import React from "react"

import Grid from "@mui/material/Grid"

const AuthLayout: React.FC = ({ children }) => {
  return (
    <Grid
      spacing={2}
      container
    >
      <Grid item xs={12} md={3}>
        Sidebar
      </Grid>
      <Grid item xs={12} md={9}>
        {children}
      </Grid>
    </Grid>
  )
}

export default AuthLayout
