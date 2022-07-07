import { Grid } from '@mui/material'
import type { FC } from 'react'
import { InfoBlock } from './components'

const HomePage: FC = () => (
  <Grid container direction='column' rowGap={2}>
    <InfoBlock />
  </Grid>
)
export default HomePage
