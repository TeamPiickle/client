import styled from "styled-components";

export const LastCard = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 18rem;
  height: 10.6rem;

  border-radius: 0.4rem;

  padding: 0.8rem 1.2rem;
  padding-top: 2.1rem;
  background: ${({ theme }) => theme.newColors.white};
`;

export const LastCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.2rem;
  align-self: flex-end;

  width: 6.9rem;
  height: 2.5rem;

  border-radius: 2.9rem;
  background: ${({ theme }) => theme.newColors.green};

  color: ${({ theme }) => theme.newColors.white};
  ${({ theme }) => theme.newFonts.btn2}
`;

export const LastCardContent = styled.p`
  margin-top: 0.4rem;

  text-align: left;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => theme.newFonts.btn1}
  color: ${({ theme }) => theme.newColors.gray900};
`;
