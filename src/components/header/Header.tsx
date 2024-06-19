import { Typography } from "@mui/material";

.container3D {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    perspective: 1000px;
  }
  
  .content3D {
    transform: rotateY(20deg);
    transition: transform 0.5s;
  }
  
  .icon3D {
    font-size: 3rem; /* Aumenta o tamanho dos ícones */
    margin: 0 1rem;
    transform: translateZ(20px);
    transition: transform 0.5s, color 0.5s;
  }
  
  .icon3D:hover {
    transform: translateZ(40px) rotateZ(10deg);
    color: #f50057; /* Altera a cor dos ícones ao passar o mouse */
  }
  
export const Header = () => {

    return (
        <div className="container3D">
        <Typography className="content3D" style={{ marginBottom: "3rem", display: "flex", alignItems: "center" }}>
          Rocket Tattoo 
          <RocketLaunchIcon className="icon3D" />
          feat. linikerS.Dev 
          <DesktopMacIcon className="icon3D" />
        </Typography>
      </div>
    )
}