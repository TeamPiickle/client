import styled from "styled-components";

export const St = {
  Container: styled.section`
    margin: 4.8rem 0;
  `,

  CategoryWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
    padding: 0 1.6rem;

    width: 36rem;
    margin: 0 auto;
  `,

  CategoryOneLine: styled.div`
    height: 16rem;
  `,

  Category: styled.article<{ imgUrl: string }>`
    position: relative;
    flex: 1;
    flex-direction: column;
    aspect-ratio: 1 / 1;
    width: 16rem;

    box-sizing: border-box;
    display: flex;

    border: 0.1rem solid #e0e0e0;
    border-radius: 1.6rem;
    align-items: center;
    justify-content: center;
    background: url(${({ imgUrl }) => imgUrl});
  `,

  CategoryTitle: styled.strong`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  CategoryContent: styled.p`
    ${({ theme }) => theme.fonts.caption2};
    color: ${({ theme }) => theme.colors.gray600};
  `,
};
