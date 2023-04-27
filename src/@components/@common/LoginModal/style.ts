import styled from "styled-components";

import { IcEmptyHeart as IconEmptyHeart } from "../../../asset/icon";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  margin-top: 5rem;
  height: 13.6rem;
  background: #eef5f3;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ModalContents = styled.p`
  width: 16.5rem;

  ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.bg};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;

  width: 29.6rem;
  height: 3.6rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 4.8rem;

  width: 14.4rem;
  height: 3.6rem;

  box-shadow: 0rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
  border-radius: 4.7rem;

  ${({ theme }) => theme.fonts.btn1};
  color: ${({ theme }) => theme.colors.bg};
  background: ${({ theme }) => theme.colors.white};

  &:active {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.green};
  }
`;

export const HeartWrapper = styled.div`
  position: relative;

  width: 3.8rem;
  height: 3.2rem;
`;

export const IcEmptyHeart = styled(IconEmptyHeart)`
  position: absolute;
`;
