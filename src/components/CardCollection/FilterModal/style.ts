import styled from "styled-components";

export const St = {
  ModalContentsWrapper: styled.div`
    padding-top: 3.6rem;
  `,

  CloseBtn: styled.button`
    background-image: IcCloseBtn;
  `,

  FilterTitle: styled.strong`
    /* 폰트사이즈 수정 */
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 140%;

    color: ${({ theme }) => theme.colors.black};

    margin-bottom: 0.8rem;
  `,

  FilterTagsWrapper: styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 2.2rem;
  `,

  FilterTag: styled.li<{ isactive: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 6.2rem;
    height: 2.6rem;

    background-color: ${({ isactive, theme }) => (isactive ? theme.colors.green : theme.colors.white)};
    color: ${({ isactive, theme }) => (isactive ? theme.colors.white : theme.colors.black)};

    border-radius: 6.3rem;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
  `,
  FilterIntimacyWrapper: styled.div``,

  FilterIntimacyRange: styled.input``,
  FilterIntimacyTag: styled.span``,
  SubmitBtn: styled.button``,
};
