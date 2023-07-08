import styled from "styled-components";

export const RankItemContainer = styled.article`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem 1.6rem;

  background-color: ${({ theme }) => theme.newColors.white};

  height: 4.8rem;
`;

/* todo: 질문 */
export const RankItemLink = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 80%;
`;

export const RankItemContent = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RankItemNumber = styled.h2<{ idx: number }>`
  ${({ theme }) => theme.newFonts.body3};
  color: ${({ idx, theme }) => (idx <= 3 ? theme.newColors.green : theme.newColors.gray600)};

  margin-right: 1.2rem;
`;

export const RankItemText = styled.p`
  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme }) => theme.newColors.gray900};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  /* todo: 디자인 컨펌필요 */
  width: 25.2rem;
`;

export const BookmarkWrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
