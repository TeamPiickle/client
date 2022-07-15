import styled from "styled-components";

export const St = {
  MySettingContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 3.6rem 0;
    height: 19.5rem;
  `,

  MySettingList: styled.article`
    padding-left: 1.6rem;
    width: 36rem;
    height: 3.9rem;

    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,

  MySettingListDetail: styled.p``,
};
