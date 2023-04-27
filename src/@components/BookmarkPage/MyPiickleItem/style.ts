import styled from "styled-components";

export const MyPiickle = styled.article`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.75rem 1.6rem;

  background-color: ${({ theme }) => theme.newColors.white};
`;

export const MyPiickleLink = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 80%;
`;

export const MyPiickleContent = styled.strong`
  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme }) => theme.newColors.gray900};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  width: 24.2rem;
`;

export const HeartWrapper = styled.div`
  cursor: pointer;
`;
