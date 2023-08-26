import styled from "styled-components";

export const Root = styled.main`
  width: 100vw;
  ${({ theme }) => theme.media.desktop`
  width: 36rem;
`};
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.newColors.black50};
`;

export const Box = styled.section`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.newColors.white};

  text-align: center;
`;

export const Title = styled.h1`
  margin-top: 3.2rem;

  ${({ theme }) => theme.newFonts.h1};
  color: ${({ theme }) => theme.newColors.green};
`;

export const SubTitle = styled.h2`
  margin-top: 1.6rem;

  ${({ theme }) => theme.newFonts.body7};
  color: ${({ theme }) => theme.newColors.black};
`;

export const EmailText = styled.p`
  margin-top: 3.2rem;

  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.gray600};
`;

export const AgreeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  margin-top: 1.2rem;
`;

export const AgreeText = styled.p`
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.black};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 1.7rem 2rem;
  margin-top: 3.2rem;

  background-color: ${({ theme }) => theme.newColors.gray100};
`;

export const Input = styled.input`
  width: 90%;
  ${({ theme }) => theme.newFonts.body4};
`;

export const Button = styled.button`
  width: 2.4rem;
  height: 2rem;
  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.green};
`;

export const Link = styled.a`
  margin-top: 4rem;
  margin-bottom: 4.5rem;

  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.black};
  text-decoration: underline;
`;
