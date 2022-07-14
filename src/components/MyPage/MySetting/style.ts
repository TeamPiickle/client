import styled from "styled-components";

export const St = {
  MySettingContainer: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0rem 29.7rem 0rem 1.6rem;
    margin: 3.6rem 0;
    gap: 2.4rem;

    //width: 36rem;
    height: 19.6rem;
  `,

  MySettingList: styled.li`
    letter-spacing: -0.03rem;
    ${({ theme }) => theme.fonts.body6};
    color: ${({ theme }) => theme.colors.bg};
  `,
};
