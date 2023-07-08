import styled from "styled-components";

const Container = styled.button``;

const BestPiickleCard = styled.div`
  position: relative;

  width: 18rem;
  height: 10.6rem;

  padding: 0.8rem 1.2rem;

  border-radius: 0.4rem;
  background: ${({ theme }) => theme.newColors.lightgreen2};
`;

const TagsWrapper = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const Tag = styled.li`
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.green};
`;

const Content = styled.p`
  margin-top: 0.4rem;

  text-align: left;

  // 말줄임표 설정
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.gray900};
`;

const PickButtonWrapper = styled.div`
  margin-top: 1.2rem;

  ${({ theme }) => theme.newFonts.btn2};
  color: ${({ theme }) => theme.newColors.gray700};

  text-align: right;
`;

const St = {
  Container,
  BestPiickleCard,
  TagsWrapper,
  Tag,
  Content,
  PickButtonWrapper,
};
export default St;
