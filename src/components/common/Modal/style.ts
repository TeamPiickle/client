import styled from "styled-components";

export const St = {
  Root: styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    background-color: (0, 0, 0, 0.5);
  `,

  Modal: styled.section`
    width: 32.8rem;

    position: absolute;
    left: 1.6rem;
    top: 9rem;

    background-color: #eef5f3;
    border-radius: 2rem;

    padding: 2rem 1.6rem;
  `,

  CloseBtn: styled.button`
    position: absolute;
    right: 1.6rem;
    top: 2rem;
  `,

  ModalContents: styled.article``,
};
