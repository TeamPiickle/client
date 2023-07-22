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

const St = {
  Card,
  Container,
  ContentWrapper,
  TagsWrapper,
};
export default St;
