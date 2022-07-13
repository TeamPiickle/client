import styled from "styled-components";

export const St = {
  Container: styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    padding: 0rem 1.6rem 4.8rem;
    gap: 0.8rem;
    height: 37.6rem;
  `,

  Category: styled.article`
    box-sizing: border-box;
    display: flex;

    width: 16rem;
    height: 16rem;

    background: #dbfff1;

    border: 0.1rem solid #e0e0e0;
    border-radius: 1.6rem;
  `,
};
