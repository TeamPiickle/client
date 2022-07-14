import styled from "styled-components";

export const St = {
  MyPiickleContainer: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 16px;
    gap: 114px;

    width: 360px;
    height: 81px;

    background-color: ${({ theme }) => theme.colors.sub_green2};
  `,
  MyPiickleWrapper: styled.article`
    display: flex;
  `,
  Image: styled.div``,
  TitleWrapper: styled.div``,
  Title: styled.strong``,
  SubTitle: styled.p``,
  MoveButton: styled.button``,
};
