import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  MyPiickleContainer: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem 1.6rem;
    gap: 10rem;

    //width: 36rem;
    height: 8.1rem;

    background-color: ${({ theme }) => theme.colors.sub_green2};
  `,

  MyPiickleWrapper: styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem;
    gap: 1.6rem;

    width: auto;
    height: 4.1rem;
  `,

  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0rem;
    gap: 0.2rem;

    width: auto;
    height: 4.1rem;
  `,

  Title: styled.strong`
    width: 7.5rem;
    height: 2.2rem;

    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray800};
  `,

  SubTitle: styled.p`
    width: auto;
    height: 1.7rem;

    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  MoveButton: styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem;
    gap: 0.8rem;

    width: auto;
    height: 2.9rem;
  `,

  MoveButtonTitle: styled.p`
    width: auto;
    height: 1.7rem;

    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.bg};
  `,
};
