import { createStyles, makeStyles } from '@mui/material/styles';

// Crie uma função chamada useGlobalStyles usando makeStyles
const useGlobalStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        margin: 0,
        padding: 0,
        maxHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  // Corrigido de 'alignItens'
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      },
      html: {
        margin: 0,
        padding: 0,
        width: '100%',
        overflowX: 'hidden',
      },
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }
    }
  })
);

export default useGlobalStyles;
