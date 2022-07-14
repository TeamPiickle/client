import styled from "styled-components";

export const St = {
  Container: styled.section`
    height: 41.1rem;
  `,

  RepresentVoteContentConTainer: styled.section`
    width: 100%;
    height: 15.2rem;

    padding: 2.8rem 2.4rem 2rem;

    background-color: #c9f2de; //확정 아니어서 일단 노가다로 박음
  `,

  VoteContent: styled.article`
    height: 8.9rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  VoteImgTextWrapper: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-left: 1.6rem;
  `,

  VoteTextContainer: styled.div`
    margin-left: 1.8rem;

    display: flex;
    flex-direction: column;
  `,

  VoteContentText: styled.p<{ isFirst: boolean }>`
    line-height: 1.4;

    margin-bottom: 0.4rem;

    ${({ isFirst }) => (isFirst ? ({ theme }) => theme.fonts.caption1 : ({ theme }) => theme.fonts.body2)};
  `,

  VoteContentSubText: styled.p<{ isFirst: boolean }>`
    ${({ theme }) => theme.fonts.body2}

    color: ${({ theme }) => theme.colors.gray600};
  `,

  RepresentGoVoteBtn: styled.button`
    width: 7.6rem;
    height: 2.8rem;

    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};

    float: right;

    padding: 0.4rem 1.4rem;

    border-radius: 4.2rem;

    ${({ theme }) => theme.fonts.h2}
  `,

  GoVoteBtn: styled.button`
    margin-right: 1.6rem;
  `,
};
