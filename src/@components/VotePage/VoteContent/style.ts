import { Link } from "react-router-dom";
import styled from "styled-components";

const VoteContentContainer = styled.article`
  padding: 2.4rem 1.6rem 3.4rem;

  display: flex;
  flex-direction: column;
`;

const VoteContentTitle = styled.h2`
  ${({ theme }) => theme.newFonts.body1}
  color: ${({ theme }) => theme.colors.gray900};
`;

const BtnContainer = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  gap: 0.1rem;

  ${({ theme }) => theme.media.desktop`
    width: 36rem;
  `};
`;

const MoveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.8rem;

  ${({ theme }) => theme.newFonts.btn1}

  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
`;

const LinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.8rem;

  ${({ theme }) => theme.newFonts.btn1}

  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
`;

const NoLinkBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5.8rem;

  ${({ theme }) => theme.newFonts.btn1}

  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.gray600};
`;

const St = {
  VoteContentContainer,
  VoteContentTitle,
  BtnContainer,
  MoveBtn,
  LinkBtn,
  NoLinkBtn,
};

export default St;
