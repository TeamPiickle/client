import styled from "styled-components";

export const St = {
  Root: styled.main`
    height: 100vh;
  `,

  TitleContainer: styled.section`
    height: 13.2rem;
    padding: 2.4rem 1.6rem;
  `,

  Title: styled.strong`
    display: block;
    margin-bottom: 0.8rem;

    ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.bg};
  `,

  SubTitle: styled.p`
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,

  AgreeContainer: styled.section`
    padding: 2.4rem 1.6rem;
    height: 11rem;

    background-color: ${({ theme }) => theme.colors.sub_green3};
  `,

  AgreeTitle: styled.p`
    display: block;
    margin-bottom: 0.8rem;

    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.bg};
  `,

  AgreeCheck: styled.div`
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.bg};
  `,

  ReasonContainer: styled.section`
    height: 25.9rem;
    margin: 2.4rem 0 1.8rem 0;
    padding: 0px 1.6rem;
  `,

  ReasonTitle: styled.strong`
    ${({ theme }) => theme.fonts.body12};
    color: ${({ theme }) => theme.colors.bg};
  `,

  ReasonSubTitle: styled.p`
    display: block;
    margin: 0.4rem 0 1.6rem 0;

    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  ReasonList: styled.ul``,

  DeleteBtn: styled.button`
    width: calc(100% - 3.2rem);
    height: 5rem;

    margin: 0 auto 2rem auto;
    display: block;

    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.btn2};

    ${({ theme }) => theme.media.desktop`
    width: 32.8rem;
  `};
  `,
};
