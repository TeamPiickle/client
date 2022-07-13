import styled from "styled-components";

export const St = {
  Footer: styled.section`
    display: flex;
    position: relative;
    margin-top: 12rem;
    height: 22rem;

    background: #f1f1f1;
  `,

  BasicInfo: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    position: absolute;
    width: 8rem;
    height: 8.3rem;
    left: 1.6rem;
    top: 3.2rem;
  `,
  BasicInfoTitle: styled.li`
    height: 1.7rem;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 140%;

    letter-spacing: -0.04rem;

    color: #2a2a2a;
  `,

  ServiceInfo: styled.ul`
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    // padding: 0px;
    //gap: 2rem;

    position: absolute;
    width: 9.8rem;
    height: 14.8rem;
    left: 18.4rem;
    top: 3.2rem;
  `,
  ServiceInfoTitle: styled.li`
    //width: 9.8rem;
    height: 1.7rem;
    margin-bottom: 0.3rem;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 140%;

    letter-spacing: -0.04rem;

    color: #2a2a2a;
  `,
  ServiceInfoDetail: styled.li`
    //width: 9.8rem;
    height: 1.7rem;
    margin-bottom: 2rem;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 140%;

    letter-spacing: -0.04rem;

    color: #606060;
  `,
};
