import styled from "styled-components";

const MedleyWrapper = styled.button`
  width: 14rem;
  height: 20rem;

  padding: 0 0.9rem;
  gap: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(79, 72, 236, 0.102) 100%),
    linear-gradient(0deg, rgba(79, 72, 236, 0.37), rgba(79, 72, 236, 0.37)),
    linear-gradient(180deg, #00ff9c 0%, rgba(255, 255, 255, 0) 100%);
`;

const ContentTag = styled.p`
  padding: 0rem 0.4rem;
  margin-top: 2.4rem;

  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray200};
  background-color: ${({ theme }) => theme.newColors.darkblue};
`;

const ContentTitle = styled.strong`
  width: 12.2rem;

  white-space: pre-wrap;

  ${({ theme }) => theme.newFonts.body3}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const St = {
  MedleyWrapper,
  ContentTag,
  ContentTitle,
};
export default St;
