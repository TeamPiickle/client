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
  RepresentGoVoteBtnWrapper: styled(Link)`
    width: 100%;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.newFonts.btn2}
  `,

  ContentWrapper: styled.article`
    height: 8rem;

    padding: 0 1.6rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:first-child) {
      border-top: 0.1rem solid ${({ theme }) => theme.newColors.gray300};
    }
  `,

  ContentText: styled.p`
    width: 28rem; // MEMO :: 말줄임표를 위한 값

    ${({ theme }) => theme.newFonts.body4};
    color: ${({ theme }) => theme.newColors.gray900};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  GoVoteBtn: styled(Link)`
    width: 4.9rem;
    height: 1.7rem;

    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.newFonts.btn2};
    color: ${({ theme }) => theme.newColors.gray100};
    background-color: ${({ theme }) => theme.newColors.gray900};
  `,
};
