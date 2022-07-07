import { Grid, Typography } from '@mui/material'
import React from 'react'

const InfoBlock = () => {
  return (
    <Grid item container justifyContent='space-around' sx={{ padding: 5 }}>
      <Grid>
        <Typography variant='h3' textAlign='center' sx={{ m: 1 }}>
          Любишь готовить? Тогда тебе к нам!
        </Typography>
        <Typography variant='h5' textAlign='center'>
          Сайт, где собраны рецепты блюд со всего мира в виде записок! Блюда, которые под силу
          приготовить не только профессионалам, но и каждой хозяйке на своей домашней кухне.
        </Typography>
      </Grid>

      <Grid>
        <img
          src='https://shribalajicaters.com/wp-content/uploads/2022/04/ori_3806080_8lnd9inkvshejoe3t9zqdwkyfryxrw96jvr4z4ll_kitchen-tools-continuous-one-line-drawing-kitchen-utensils-cooking-t.jpg'
          style={{ paddingTop: '2%' }}
        />
      </Grid>
    </Grid>
  )
}
export default InfoBlock
