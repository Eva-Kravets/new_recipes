import { Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { $calories, getCaloriesFx, postIngridientFx } from '../../store'
import { Routes } from '../../routes/index'

type Calory = {
  id: string
  name: string
} | null

type FormData = {
  name: string
  calory: Calory
}

const FormPage: FC = () => {
  const calories = useStore($calories)

  const navigate = useNavigate()

  useEffect(() => {
    getCaloriesFx()
  }, [])

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      calory: null,
    },
  })

  const submitHandler: SubmitHandler<FormData> = async (data) => {
    try {
      const { name, calory } = data
      await postIngridientFx({ name, calory })
      navigate('/ingridients')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Grid container direction='column' sx={{ paddingTop: 3 }}>
      <Typography variant='h4' textAlign='center' sx={{ marginBottom: 2 }}>
        Добавить ингредиент
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container direction='column' rowGap={3} alignItems='center'>
          <Grid item>
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField label='Название' error={!!errors.name} {...field} />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name='calory'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <InputLabel id='demo-select-small'>БЖУ</InputLabel>

                  <Select
                    error={!!errors.calory}
                    {...field}
                    labelId='demo-select-small'
                    color='secondary'
                    value={field.value?.name}
                    sx={{ width: '200px' }}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    {calories.map((c: Calory) => (
                      <MenuItem key={c?.id} value={c?.id}>
                        {c?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
          </Grid>
          <Grid item>
            <Button type='submit' variant='outlined' color='secondary' disabled={!isValid}>
              Добавить
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}
export default FormPage
