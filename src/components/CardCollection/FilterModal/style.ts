import styled from "styled-components";

export const St = {
  Root: styled.div``,
  CloseBtn: styled.button`
    background-image: IcCloseBtn;
  `,
  FilterTitle: styled.strong``,
  FilterTagsWrapper: styled.ul``,
  FilterTag: styled.li<{ isactive: boolean }>``,
  FilterIntimacyRange: styled.input``,
  FilterIntimacyTag: styled.span``,
  SubmitBtn: styled.button``,
};
