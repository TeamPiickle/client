import styled from "styled-components";

export const St = {
  Footer: styled.section`
    display: flex;
    position: relative;
    padding-bottom: 26rem;
    height: 22rem;

    background-color: ${({ theme }) => theme.newColors.gray100};
  `,

  BasicInfo: styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 2.1rem;

    left: 1.6rem;
    top: 3.2rem;
  `,

  BasicInfoTitle: styled.li`
    height: 1.7rem;
    ${({ theme }) => theme.newFonts.body4};
    color: ${({ theme }) => theme.colors.gray900};
  `,

  ServiceInfo: styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;

    width: 14rem;
    right: 3.6rem;
    top: 3.2rem;
  `,

  ServiceInfoTitle: styled.li`
    height: 1.7rem;
    margin-bottom: 0.3rem;

    ${({ theme }) => theme.newFonts.footer1};
    color: ${({ theme }) => theme.colors.gray900};
  `,

  ServiceInfoDetail: styled.li`
    height: 1.7rem;
    margin-bottom: 2rem;

    ${({ theme }) => theme.newFonts.footer2};
    color: ${({ theme }) => theme.newColors.gray700};
  `,
};
