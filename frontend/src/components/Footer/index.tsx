import { Container } from '@mui/system'
import { Grid, Box, Typography } from '@mui/material'

import React from 'react'
import { Padding } from '@mui/icons-material'

function Footer() {
  return (
    <Box
      bgcolor='text.secondary'
      color='white'
      sx={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      <Container>
        <Typography textAlign='center'>Курсовая работа: Ева Кравец 201-322</Typography>
      </Container>
    </Box>
  )
}

export default Footer
