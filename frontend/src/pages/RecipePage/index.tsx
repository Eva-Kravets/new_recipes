import { Button, Grid, Pagination, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import { FC, useEffect, useState } from 'react'
import { $categoris, $repos, getCategoriesdFx, getRecipesFx, getFilteredFx } from '../../store'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { borderRadius, Container } from '@mui/system'

const RecipePage: FC = () => {
  const recipes = useStore($repos)
  const categories = useStore($categoris)

  const [page, setPage] = useState(1)
  const [categorie, setCategorie] = useState('')

  const handleChange = (value: number) => {
    setPage(value)
  }

  useEffect(() => {
    getRecipesFx((page * 5 - 5).toString())
  }, [page])

  useEffect(() => {
    getCategoriesdFx()
  }, [])

  useEffect(() => {
    if (categorie) {
      getFilteredFx(categorie)
    } else {
      setPage(1)
      getRecipesFx((page * 5 - 5).toString())
    }
  }, [categorie])
  return (
    <Grid container direction='column' rowGap={2}>
      <Container sx={{ margin: '10px' }}>
        <Typography variant='h6' sx={{ marginBottom: '10px' }}>
          {' '}
          Выберите категорию:
        </Typography>
        <Button
          sx={{ marginRight: '15px' }}
          variant='outlined'
          onClick={() => {
            setCategorie('')
          }}
        >
          Все
        </Button>
        {categories.map((c: any) => (
          <Button
            sx={{ marginRight: '15px' }}
            variant='outlined'
            key={c.id}
            onClick={() => {
              setCategorie(String(c.id))
            }}
          >
            {c.name}
          </Button>
        ))}
      </Container>
      {!categorie && (
        <Pagination count={2} page={page} onChange={(e, value) => handleChange(value)} />
      )}
      {recipes.map((r: any) => (
        <Grid item key={r.id}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {r.title}
              </Typography>
              {r.categories.map((c: any) => (
                <Typography variant='subtitle2' color='text.secondary' key={c.id}>
                  {c.name}
                </Typography>
              ))}
              <Typography gutterBottom>{r.text}</Typography>

              <Typography variant='body1' color='text.outlinedInfo'>
                {!!r.ingredients_data.length && <Typography variant='h6'>Ингредиенты:</Typography>}
                {r.ingredients_data.map((i: any) => (
                  <Grid container direction='column' key={i.id}>
                    <Grid item>{i.name}:</Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: '13px' }}>{i.calories} ккал</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
export default RecipePage
