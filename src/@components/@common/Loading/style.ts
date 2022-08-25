/* eslint-disable indent */
import styled from "styled-components";

export const St = {
  Root: styled.section<{ backgroundcolor: string }>`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ backgroundcolor }) => backgroundcolor};

    z-index: 10;

    overflow: hidden;
  `,

  ImageWrapper: styled.div``,
};
