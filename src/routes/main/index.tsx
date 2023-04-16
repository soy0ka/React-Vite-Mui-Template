import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'
import { wrapError } from '~/components/ErrorBoundary'

export const Main: React.FC = wrapError(() => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the React + Vite + Mui boilerplate by Seoyeon Park
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        you are now using {isMobile ? 'mobile' : 'desktop'} version
      </Typography>
    </Box>
  )
})
