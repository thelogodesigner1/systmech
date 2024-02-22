import React from 'react'
import { Button, Paper, Typography } from '@mui/material'

const Login = () => {
  return (
    <Paper sx={{
        backgroundColor:'#ff7701'
    }}>
    <Button >
    <Typography sx={{
      color:'#063A55',
      fontWeight:'bold',
     
  }} >Login</Typography>
  </Button>
  </Paper>
  )
}

export default Login
