import styled from "styled-components";

export const St = {
  MyPiickle: styled.article`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.75rem 1.6rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray300};
    border-radius: 1rem;
  `,

  MyPiickleLink: styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    width: 80%;
  `,

  MyPiickleContent: styled.strong`
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.bg};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: 24.2rem;
  `,

  HeartWrapper: styled.div`
    cursor: pointer;
  `,
};
