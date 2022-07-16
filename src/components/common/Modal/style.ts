import styled from "styled-components";

export const St = {
  Root: styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;

    background-color: rgb(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
  `,

  Modal: styled.section`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: ${({ theme }) => theme.colors.sub_green5};
    border-radius: 2rem;

    padding: 2rem 1.6rem;
    width: 32.8rem;
  `,

  CloseBtn: styled.button`
    position: absolute;
    right: 1.6rem;
    top: 2rem;

    cursor: pointer;

    width: 2.2rem;
    height: 2.2rem;

    z-index: 10;
  `,

  ModalContents: styled.article`
    position: relative;
  `,
};
