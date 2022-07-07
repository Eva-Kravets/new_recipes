import { Button, Grid, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import { FC, useEffect } from 'react'
import { $ingridients, getIngridientsFx } from '../../store'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Container } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../routes'

const IngridientsPage: FC = () => {
  const ingridients = useStore($ingridients)

  const navigate = useNavigate()

  useEffect(() => {
    getIngridientsFx()
  }, [])

  return (
    <Grid container direction='column' rowGap={2}>
      <Container sx={{ margin: '10px' }}>
        <Button sx={{ marginRight: '15px' }} variant='outlined' onClick={() => navigate('/form')}>
          Добавить
        </Button>
      </Container>
      {ingridients.map((r: any) => (
        <Grid item key={r.id}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {r.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
export default IngridientsPage
