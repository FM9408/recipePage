import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
      MuiButton: {
          styleOverrides: {
              root: {
                  transition: 'all .5s ease-in-out',
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                      boxShadow: 'none',
                       color:theme.palette.secondary.dark,
                      backgroundColor: theme.palette.primary.darker
                  
                  },
                  '&:disabled': {
                      color: theme.palette.secondary.dark
                  }
              },
              sizeLarge: {
                  height: 48
              },
              containedInherit: {
                  color: theme.palette.grey[800],
                  boxShadow: theme.customShadows.z8,
                  '&:hover': {
                      backgroundColor: theme.palette.grey[400]
                  }
              },
              containedPrimary: {
                  boxShadow: theme.customShadows.primary
              },
              disabled: {
                  color: theme.palette.primary.contrastText
              },
              containedSecondary: {
                  boxShadow: theme.customShadows.secondary
              },
              outlinedInherit: {
                  border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
                  '&:hover': {
                      backgroundColor: theme.palette.action.hover
                  }
              },
              textPrimary: {
                  transition: 'all .5s ease-in-out',
                  '&:hover': {
                    boxShadow: 'none',
                    color:theme.palette.secondary.dark,
                      backgroundColor: theme.palette.primary.darker
                  }
              },
              textInherit: {
                  '&:hover': {
                      backgroundColor: theme.palette.action.hover
                  }
              }
          }
      }
  }
}
