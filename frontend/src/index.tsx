import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import App from './App'

import { Routes as Paths } from './routes/index'
import { FormPage, IngridientsPage, RecipePage } from './pages'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path={Paths.RECIPES} element={<RecipePage />} />
        <Route path={Paths.INGRIDIENTS} element={<IngridientsPage />} />
        <Route path={Paths.FORM} element={<FormPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
