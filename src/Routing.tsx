import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { wrapError } from './components/ErrorBoundary'
import { Main } from './routes/main'
import { wrapSuspense } from './utils/suspense'

const RootLayout = wrapSuspense(
  lazy(() => import('./layouts/root').then((x) => ({ default: x.RootLayout })))
)

export const Routing: React.FC = wrapError(() => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
})
