import React from "react"

import { Grid } from "@mui/material"

import Header from "ui/layouts/modules/header/Header.module"
import Sidebar from "ui/layouts/modules/sidebar"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Grid
        spacing={2}
        container
      >
        <Grid item xs={12} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}

export default MainLayout
