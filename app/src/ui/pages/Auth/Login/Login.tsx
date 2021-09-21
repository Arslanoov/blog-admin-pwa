import React from "react"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

import AuthLayout from "../../../layouts/AuthLayout"

const Login: React.FC = () => {
  return (
    <AuthLayout>
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
    </AuthLayout>
  )
}

export default Login
