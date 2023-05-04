import styled from "styled-components";

export const CTAButtonWrapper = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 50%;
  transform: translate(-50%, 0);

  width: 100%;
  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};
  height: 9.6rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0 0.8rem 0.8rem;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 40.63%);

  z-index: 10;
`;

export const CTAButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.newColors.gray900};
  border-radius: 0.8rem;

  backdrop-filter: blur(0.6rem);
  color: ${({ theme }) => theme.newColors.white};
  ${({ theme }) => theme.newFonts.btn1};
`;
