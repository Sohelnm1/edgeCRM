import React, { useEffect } from "react";
import ButtonComponent from "./ButtonComponent";
import styled from "@emotion/styled";
import PopUp from "../../css/PopUp.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PopUpStyled = styled.div`
  position: ${(props) => props.position || "fixed"};
  bottom: 15px;
  z-index: 1001;
  padding: ${(props) => props.paddingcontainer || "12px 20px"};
  background: rgba(255, 255, 255, 0.7);
  box-shadow: ${(props) =>
    props.boxshadow || "0px 0px 22px rgba(0, 0, 0, 0.08)"};
  border-radius: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  text-align: ${(props) => props.textalign || "center"};
  width: ${(props) => props.width || "50%"};
  height :10%;
  left: 50%;
  transform: ${(props) => props.transformt || "translateX(-50%)"};
}
&.animantionClass{
  animation : move 0.7s linear;
  @keyframes move {
    0% {
        transform: translate(-50%, 150%);
      }
      50%{
        transform: translate(-50%, 75%);
      }
      100% {
        transform: translate(-50%, 0%);

      }
  }
}
`;

function PopUpPanel(props) {
  const {
    children,
    count,
    position,
    boxshadow,
    textalign,
    width,
    transformt,
    padding = "",
    onClick = "",
    onClick1 = "",
    paddingcontainer = "",
    paddinghover = "",
    hoverbcolor = "",
    className = "",
    animation = "",
    ...other
  } = props;

  const [index, setIndex] = React.useState(1);

  return (
    <div hidden={count !== index}>
      {count === index && (
        <>
          <PopUpStyled
            position={position}
            boxshadow={boxshadow}
            textalign={textalign}
            width={width}
            transformt={transformt}
            padding={padding}
            paddingcontainer={paddingcontainer}
            className={className}
            animation={animation}
          >
            <ButtonComponent
              className="btn btn-outline-secondary save"
              margin="0 10px"
              onClick={onClick1}
              type="submit"
              padding={padding}
              bcolor="#ff7a00"
              transition="transform 250ms"
              color="#fff"
              border="0"
              fontsize="16px"
              borderradius="4px"
              hoverbcolor="#fc8711"
              paddinghover={paddinghover}
            >
              Save
            </ButtonComponent>
            <ButtonComponent
              className="btn btn-outline-secondary"
              margin="0 10px"
              onClick={onClick}
              type="submit"
              padding={padding}
              color="#e5384f"
              border="0"
              bcolor="#fff"
              hoverbcolor={hoverbcolor}
            >
              Cancel
            </ButtonComponent>
          </PopUpStyled>
        </>
      )}
    </div>
  );
}

export default PopUpPanel;
