import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  Button: styled(Link)`
    position: sticky;
    bottom: 4.8rem;

    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    background-color: #000000;
    backdrop-filter: blur(1.2rem);
    border-radius: 6.6rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn1};
  `,
};
