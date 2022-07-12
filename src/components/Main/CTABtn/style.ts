import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  Button: styled(Link)`
    display: flex;

    position: sticky;
    bottom: 4.8rem;

    align-items: center;
    justify-content: center;

    margin: 0 auto;

    border-radius: 6.6rem;
    background-color: ${({ theme }) => theme.colors.black};

    width: 100%;
    height: 5rem;

    backdrop-filter: blur(1.2rem);
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn1};
  `,
};
