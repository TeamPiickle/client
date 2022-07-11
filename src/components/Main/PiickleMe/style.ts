import styled from "styled-components";
export const St = {
  Container: styled.section``,

  RepresentVoteContentConTainer: styled.section`
    width: 100%;
    height: 15.2rem;
    background-color: #c9f2de;
    padding-top: 2.8rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    padding-bottom: 2rem;
  `,

  VoteContentContainer: styled.section`
    width: 100%;
    height: 27rem;
    background-color: black;
  `,

  VoteContent: styled.article`
    height: 8.9rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  VoteProfileImage: styled.img``,

  VoteTextContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.4rem;
  `,

  VoteContentText: styled.p<{ isFirst: boolean }>`
    font-weight: 600;
    font-size: ${({ isFirst }) => (isFirst ? "16px" : "12px")};
    line-height: 1.5;
    margin-bottom: 0.4rem;
  `,

  VoteContentSubText: styled.p<{ isFirst: boolean }>`
    font-size: 12px;
    color: #606060;
  `,

  FirstGoVoteBtn: styled.button`
    background-color: #19be7e;
    color: white;
    margin-top: 2rem;
    margin-left: 25rem;
    padding: 0.4rem 1.4rem;
    border-radius: 42px;
  `,

  GoVoteBtn: styled.button`
    color: black;
    margin-right: 1.6rem;
  `,
};
