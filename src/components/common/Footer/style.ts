import styled from "styled-components";

export const St = {
  Footer: styled.section`
    display: flex;
    position: relative;
    padding-bottom: 30rem;
    height: 22rem;

    background-color: ${({ theme }) => theme.colors.gray100};
  `,

  BasicInfo: styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    width: 8rem;
    height: 8.3rem;
    left: 1.6rem;
    top: 3.2rem;
  `,

  BasicInfoTitle: styled.li`
    height: 1.7rem;

    ${({ theme }) => theme.fonts.footer1};

    font-family: "Pretendard";

    color: ${({ theme }) => theme.colors.bg};
  `,

  ServiceInfo: styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;

    width: 9.8rem;
    height: 14.8rem;
    right: 7.7rem;
    top: 3.2rem;
  `,

  ServiceInfoTitle: styled.li`
    height: 1.7rem;
    margin-bottom: 0.3rem;

    ${({ theme }) => theme.fonts.footer1};

    color: ${({ theme }) => theme.colors.bg};
  `,

  ServiceInfoDetail: styled.li`
    height: 1.7rem;
    margin-bottom: 2rem;

    ${({ theme }) => theme.fonts.footer2};
    color: ${({ theme }) => theme.colors.gray600};
  `,
};
