import { Container, CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth='xl' style={{ padding: 0 }}>
        <Outlet />
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default App
