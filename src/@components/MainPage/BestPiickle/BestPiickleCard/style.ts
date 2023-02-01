import styled from "styled-components";

const BestPiickleCard = styled.article`
  position: relative;

  width: 20rem;
  height: 13.6rem;

  margin-right: 0.8rem;
  padding: 1.2rem;

  border: 0.1rem solid ${({ theme }) => theme.newColors.gray300};
`;

const TagsWrapper = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const Tag = styled.li`
  ${({ theme }) => theme.newFonts.caption1};
  color: ${({ theme }) => theme.newColors.gray800};
`;

const Content = styled.p`
  width: 17rem;
  height: 4.4rem;

  margin-top: 0.4rem;

  // 말줄임표 설정
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => theme.newFonts.body3};
  color: ${({ theme }) => theme.newColors.gray900};
`;

const PickButtonWrapper = styled.button`
  position: absolute;
  left: -0.1rem;
  right: 0;
  bottom: 0;

  width: 20rem;
  height: 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.newFonts.btn2};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.newColors.gray900};
  backdrop-filter: blur(0.6rem);
`;

const St = {
  BestPiickleCard,
  TagsWrapper,
  Tag,
  Content,
  PickButtonWrapper,
};
export default St;
