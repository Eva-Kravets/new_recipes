import { createStore, createEffect } from 'effector'

export const getRecipesFx = createEffect(async (offset: string) => {
  const url = `${process.env.REACT_APP_API_URL}recipe/?limit=5&offset=${offset}`
  const req = await fetch(url)
  return req.json()
})

export const getFilteredFx = createEffect(async (category: string) => {
  const url = `${process.env.REACT_APP_API_URL}recipes-filter/?title=&category=${category}`
  const req = await fetch(url)
  return req.json()
})

export const getCategoriesdFx = createEffect(async () => {
  const url = `${process.env.REACT_APP_API_URL}category/`
  const req = await fetch(url)
  return req.json()
})

export const $categoris = createStore<any[]>([]).on(
  getCategoriesdFx.doneData,
  (_, repos) => repos.results,
)

export const $repos = createStore<any[]>([]).on(getRecipesFx.doneData, (_, repos) => repos.results)

$repos.on(getFilteredFx.doneData, (_, repos) => repos.results)

export const getIngridientsFx = createEffect(async () => {
  const url = `${process.env.REACT_APP_API_URL}ingredient/?limit=10000&offset=0`
  const req = await fetch(url)
  return req.json()
})

export const $ingridients = createStore<any[]>([]).on(
  getIngridientsFx.doneData,
  (_, ingridients) => ingridients.results,
)

export const getCaloriesFx = createEffect(async () => {
  const url = `${process.env.REACT_APP_API_URL}calories/`
  const req = await fetch(url)
  return req.json()
})

export const $calories = createStore<any[]>([]).on(getCaloriesFx.doneData, (_, calories) =>
  calories.results.map((r: any) => ({
    id: r.id,
    name: `${r.squirrels},${r.fats},${r.carbohydrates}`,
  })),
)

type Calory = {
  id: string
  name: string
} | null

type FormData = {
  name: string
  calory: Calory
}

export const postIngridientFx = createEffect(async ({ name, calory }: FormData) => {
  const url = `${process.env.REACT_APP_API_URL}ingredient/`
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      calories: calory,
    }),
  })
  return req
})
