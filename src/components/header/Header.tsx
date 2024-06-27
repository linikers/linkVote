import { Grid, Typography, keyframes } from "@mui/material";
import { DesktopMac, RocketLaunch } from '@mui/icons-material';

const blinkAndChangeColor = keyframes`
  0% { opacity: 1; color: #00ff00; }  /* Green */
  25% { opacity: 0.5; color: #ff00ff; } /* Magenta */
  50% { opacity: 1; color: #00ffff; } /* Cyan */
  75% { opacity: 0.5; color: #ffff00; } /* Yellow */
  100% { opacity: 1; color: #ff0000; } /* Red */
  75% { opacity: 0.5; color: #ffff00; } /* Yellow */
  50% { opacity: 1; color: #00ffff; } /* Cyan */
  25% { opacity: 0.5; color: #ff00ff; } /* Magenta */
  0% { opacity: 1; color: #00ff00; }  /* Green */
`;

export const Header = () => {
  return (
    <Grid sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      perspective: "800px",
    }}>
      <Typography sx={{
        transform: "rotateY(20deg)",
        transition: "transform 0.5s",
        marginBottom: "3rem",
        display: "flex",
        alignItems: "center",
        animation: `${blinkAndChangeColor} 2s infinite`,
      }}>
        Rocket Tattoo 
        <RocketLaunch sx={{
          fontSize: "3rem",
          transform: "translateZ(40px) rotateZ(10deg)",
          margin: "0 1rem",
          transition: "transform 0.5s, color 0.5s",
          animation: `${blinkAndChangeColor} 2s infinite`,
          "&:hover": {
            transform: "translateZ(40px) rotateZ(10deg)",
          }
        }} 
        />
        feat. linikerS.Dev 
        <DesktopMac sx={{
          fontSize: "3rem",
          transform: "translateZ(40px) rotateZ(10deg)",
          margin: "0 1rem",
          transition: "transform 0.5s, color 0.5s",
          animation: `${blinkAndChangeColor} 2s infinite`,
          "&:hover": {
            transform: "translateZ(40px) rotateZ(10deg)",
          }
        }} 
        />
      </Typography>
    </Grid>
  )
}
