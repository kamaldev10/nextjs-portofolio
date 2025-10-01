import React from "react";
import styled from "styled-components";

interface HeroButtonProps {
  label: string;
  svgPath: string;
  onClick?: () => void;
  bgColor?: string;
  hoverColor?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  label,
  svgPath,
  onClick,
  bgColor = "rgb(161, 255, 20)",
  hoverColor = "rgb(192, 255, 20)",
}) => {
  return (
    <StyledWrapper $bgColor={bgColor} $hoverColor={hoverColor}>
      <button className="button" onClick={onClick}>
        <svg
          className="svgIcon"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgPath} />
        </svg>
        {label}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $bgColor: string; $hoverColor: string }>`
  .button {
    width: 140px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: ${(props) => props.$bgColor};
    border-radius: 30px;
    color: rgb(19, 19, 19);
    font-weight: 600;
    border: none;
    position: relative;
    cursor: pointer;
    transition: background-color 0.5s, transform 0.2s;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
    padding-left: 12px;
  }

  .svgIcon {
    height: 22px;
    transition: transform 1.5s;
  }

  .button:hover {
    background-color: ${(props) => props.$hoverColor};
  }

  .button:active {
    transform: scale(0.97);
  }

  .button:hover .svgIcon {
    transform: rotate(250deg);
  }
`;

export default HeroButton;
