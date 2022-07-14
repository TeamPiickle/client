import styled from "styled-components";

export const St = {
  Container: styled.section`
    margin-top: 4.8rem;
  `,

  CategoryWrapper: styled.div`
    padding: 0rem 1.6rem 4.8rem;
  `,

  CategoryOneLine: styled.div`
    display: flex;
    gap: 0.8rem;

    margin-bottom: 0.8rem;
  `,

  Category: styled.article`
    flex: 1;
    aspect-ratio: 1 / 1;

    box-sizing: border-box;
    display: flex;

    background: #dbfff1;

    border: 0.1rem solid #e0e0e0;
    border-radius: 1.6rem;
  `,
};
