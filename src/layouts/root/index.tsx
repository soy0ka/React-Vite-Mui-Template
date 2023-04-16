import React from 'react'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import { ToastContainer } from 'react-toastify'
import { wrapError } from '~/components/ErrorBoundary'

export const RootLayout: React.FC = wrapError(() => {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <ToastContainer />
        <Toolbar />
        <Box sx={{ flexGrow: 1, height: 0, overflow: 'auto' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
})
