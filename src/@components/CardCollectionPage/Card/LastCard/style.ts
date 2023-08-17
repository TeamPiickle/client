import styled from "styled-components";

export const Card = styled.section`
  height: 100%;
  margin: 0 0.8rem;
  text-align: center;

  position: relative;

  border-radius: 0.8rem;
  background: linear-gradient(180deg, #ddfbf0 0%, rgba(232, 252, 244, 0.5) 100%);
`;

export const ContentTitle = styled.h1`
  padding: 4.8rem 1.6rem 0.8rem;

  ${({ theme }) => theme.newFonts.body1};
  color: ${({ theme }) => theme.newColors.gray900};
`;

export const Content = styled.p`
  padding: 0 1.6rem 4.2rem;

  ${({ theme }) => theme.newFonts.h2};
  color: ${({ theme }) => theme.newColors.gray600};
`;

export const BtnContainer = styled.div`
  width: 100%;
  padding: 0 1.6rem;

  position: absolute;
  bottom: 1.6rem;
`;

export const CategoryBtn = styled.button`
  width: 100%;
  height: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.gray100};
  background: ${({ theme }) => theme.newColors.gray900};
`;

export const ReplayBtn = styled(CategoryBtn)`
  margin-bottom: 0.8rem;
`;
