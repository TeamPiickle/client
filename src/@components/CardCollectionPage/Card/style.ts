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

const BlockCardWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 0.8rem;

  border-radius: 0.8rem;
  background: var(--blackblur, rgba(0, 0, 0, 0.6));
  backdrop-filter: blur(1.2rem);
`;

const BlockCardText = styled.p`
  color: ${({ theme }) => theme.newColors.white};
  ${({ theme }) => theme.newFonts.body4};
`;

const BlockCardButton = styled.button`
  color: ${({ theme }) => theme.newColors.white};
  ${({ theme }) => theme.newFonts.caption1};
  text-decoration: underline;
`;

const St = {
  Card,
  Container,
  ContentWrapper,
  TagsWrapper,
  BlockCardWrapper,
  BlockCardText,
  BlockCardButton,
};

export default St;
