import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  Container: styled.section``,

  RepresentVoteContentConTainer: styled.section`
    position: relative;
    width: 100%;
    height: 15.2rem;

    padding: 2.6rem 2.4rem 2rem;

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

  RepresentVoteContentText: styled.p`
    line-height: 1.4;

    margin-bottom: 0.4rem;
    padding-right: 5.8rem;

    letter-spacing: -0.03em;
    ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.gray800};
  `,

  RepresentVoteContentSubText: styled.p`
    ${({ theme }) => theme.fonts.caption3}

    color: ${({ theme }) => theme.colors.gray600};
  `,

  VoteContentText: styled.p`
    width: 17rem;

    line-height: 1.4;

    margin-bottom: 0.4rem;

    ${({ theme }) => theme.fonts.body4};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  RepresentGoVoteBtnWrapper: styled.button`
    width: 7.6rem;
    height: 2.8rem;

    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};

    float: right;

    padding: 0.4rem 1.4rem;

    border-radius: 4.2rem;

    ${({ theme }) => theme.fonts.h2}

    position: absolute;
    bottom: 1.8rem;
    right: 1.6rem;
  `,

  RepresentGoVoteBtn: styled(Link)``,

  GoVoteBtnWrapper: styled.button`
    margin-right: 1.6rem;
  `,

  GoVoteBtn: styled(Link)``,
};
