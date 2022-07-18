import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  BestPiickleCard: styled.article`
    width: 20.2rem;
    height: 14.5rem;

    margin-right: 0.8rem;
    padding: 2rem 1.6rem 1.4rem;

    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25), 0rem 0rem 0.2rem rgba(0, 0, 0, 0.25);
    border-radius: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
  `,

  TagsWrapper: styled.ul`
    display: flex;
    gap: 0.8rem;
  `,

  Tag: styled.li`
    ${({ theme }) => theme.fonts.caption1};
    color: ${({ theme }) => theme.colors.gray600};
  `,

  Content: styled.p`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.black};

    width: 17rem;
    height: 4.4rem;
    margin: 0.6rem 0 2.3rem;
    // 말줄임표 설정
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,

  PickButtonWrapper: styled.div`
    width: 8.1rem;
    height: 2.5rem;

    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 4.2rem;

    float: right;
  `,

  PickButton: styled.button`
    ${({ theme }) => theme.fonts.btn2}
    color: ${({ theme }) => theme.colors.white};

    width: 8.1rem;
    height: 2.5rem;
  `,
};
