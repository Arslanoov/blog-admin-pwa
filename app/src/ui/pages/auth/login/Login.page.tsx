import React from "react"

import { Box, TextField } from "@mui/material"

const LoginPage: React.FC = () => {
  return (
    <Box component="form">
      <TextField
        label="E-mail"
        type="email"
      />

      <TextField
        label="Password"
        type="password"
      />
    </Box>
  )
}

export default LoginPage
