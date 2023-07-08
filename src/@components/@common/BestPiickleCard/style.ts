import styled from "styled-components";

export const Container = styled.button``;

export const BestPiickleCard = styled.div`
  position: relative;

  width: 18rem;
  height: 10.6rem;

  padding: 0.8rem 1.2rem;

  border-radius: 0.4rem;
  background: ${({ theme }) => theme.newColors.lightgreen2};
`;

export const TagsWrapper = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

export const Tag = styled.li`
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.green};
`;

export const Content = styled.p`
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

export const PickButtonWrapper = styled.div`
  margin-top: 1.2rem;

  ${({ theme }) => theme.newFonts.btn2};
  color: ${({ theme }) => theme.newColors.gray700};

  text-align: right;
`;

export const LastCard = styled(BestPiickleCard)`
  display: flex;
  flex-direction: column;

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
