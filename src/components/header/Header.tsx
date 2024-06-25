import { Grid, Typography } from "@mui/material";
import { DesktopMac, RocketLaunch } from '@mui/icons-material'

// .container3D {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 2rem;
//     perspective: 1000px;
//   }
  
//   .content3D {
//     transform: rotateY(20deg);
//     transition: transform 0.5s;
//   }
  
//   .icon3D {
//     font-size: 3rem; /* Aumenta o tamanho dos ícones */
//     margin: 0 1rem;
//     transform: translateZ(20px);
//     transition: transform 0.5s, color 0.5s;
//   }
  
//   .icon3D:hover {
//     transform: translateZ(40px) rotateZ(10deg);
//     color: #f50057; /* Altera a cor dos ícones ao passar o mouse */
//   }
  
export const Header = () => {

    return (
        <Grid sx={{
            display:"flex",
            alignItems:"center",
            justifyContent: "center",
            padding: "2rem",
            perspective: "1000px",
        }}>
        <Typography sx={{
            transform: "rotateY(20deg)",
            transition: "transform 0.5s",
            marginBottom: "3rem",
            display: "flex",
            alignItems: "center",
        }}>
          Rocket Tattoo 
          <RocketLaunch sx={{
          fontSize: "3rem",
          transform: "translateZ(40px) rotateZ(10deg)",
          margin: "0 1rem",
          transformBox: "translateZ(20px)",
          transition: "transform 0.5s, color 0.5s",
          "&:hover": {
              transform:"translateZ(40px) rotateZ(10deg)",
              color: "#f50057",
            }
          }} 
          />
          feat. linikerS.Dev 
          <DesktopMac sx={{
            fontSize: "3rem",
            transform: "translateZ(40px) rotateZ(10deg)",
            margin: "0 1rem",
            transformBox: "translateZ(20px)",
            transition: "transform 0.5s, color 0.5s",
            "&:hover": {
                transform:"translateZ(40px) rotateZ(10deg)",
                color: "#f50057",
            }
          }} 
          />
        </Typography>
      </Grid>
    )

      }