import styled from "styled-components";

const Card = styled.article`
  position: relative;
  display: flex;

  margin: 0 0.8rem 0.8rem;
  height: 100%;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 0.8rem;
  background: linear-gradient(180deg, #ddfbf0 0%, rgba(232, 252, 244, 0.5) 100%);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 2.4rem;

  position: absolute;
  width: 100%;
  top: 5.6rem;
`;

const ContentWrapper = styled.p`
  text-align: center;

  white-space: pre-wrap;

  ${({ theme }) => theme.newFonts.body1};
  color: ${({ theme }) => theme.newColors.gray900};
`;

const TagsWrapper = styled.div`
  margin-top: 1.6rem;
`;

const MenuWrapper = styled.aside`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 1.7rem;
  right: 1.2rem;

  gap: 2.4rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 4.1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
`;

const ButtonLabel = styled.p`
  margin-top: 0.6rem;

  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.gray600};
`;

const St = {
  Card,
  Container,
  ContentWrapper,
  TagsWrapper,
  MenuWrapper,
  ButtonWrapper,
  IconWrapper,
  ButtonLabel,
};
export default St;
