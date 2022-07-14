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
  `,

  FilterTagsWrapper: styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin: 0.8rem 0 2.2rem;
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

  FilterIntimacyWrapper: styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 4rem;
  `,

  FilterIntimacyRange: styled.input`
    margin: 1.2rem 0 0.2rem;
  `,

  FilterIntimacyTagsWrapper: styled.ul`
    display: flex;
    justify-content: space-between;
  `,

  FilterIntimacyTag: styled.li<{ isactive: boolean }>`
    ${({ theme }) => theme.fonts.caption4}
    color: ${({ isactive, theme }) => (isactive ? theme.colors.green : theme.colors.gray600)};
  `,

  SubmitBtnWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,

  SubmitBtn: styled.button`
    ${({ theme }) => theme.fonts.btn2};
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    width: 17.1rem;
    height: 3.3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6.6rem;
  `,
};
