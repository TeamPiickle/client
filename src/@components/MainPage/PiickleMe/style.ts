import { Link } from "react-router-dom";
import styled from "styled-components";

import { ImgVoteBanner } from "../../../asset/image";

export const St = {
  Container: styled.section``,

  RepresentVoteContentConTainer: styled.section`
    position: relative;
    width: 100%;
    height: 11.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${ImgVoteBanner});
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

  RepresentVoteContentText: styled.div`
    position: absolute;

    margin-top: 2.3rem;

    ${({ theme }) => theme.newFonts.body3};
    color: ${({ theme }) => theme.colors.gray900};
  `,

  RepresentVoteContentWrapper: styled.div`
    margin-bottom: 2.3rem;

    width: 13.9rem;
    text-align: center;

    background-color: ${({ theme }) => theme.newColors.lightgreen1};
  `,

  RepresentVoteContentSubText: styled.p`
    ${({ theme }) => theme.newFonts.caption1}
    color: ${({ theme }) => theme.colors.gray900};
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
    width: 100%;
    height: 4rem;

    background-color: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.newFonts.btn2}
  `,

  RepresentGoVoteBtn: styled(Link)``,

  GoVoteBtnWrapper: styled.button`
    margin-right: 1.6rem;
  `,

  GoVoteBtn: styled(Link)``,
};
