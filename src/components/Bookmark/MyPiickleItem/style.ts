import styled from "styled-components";

export const St = {
  MyPiickle: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.75rem 1.6rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray300};
    border-radius: 1rem;
  `,

  MyPiickleContent: styled.strong`
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.bg};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: 21rem;
  `,

  HeartWrapper: styled.div`
    cursor: pointer;
  `,
};
