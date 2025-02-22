// ----------------------------------------------------------------------

export default function Paper() {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  };
}
