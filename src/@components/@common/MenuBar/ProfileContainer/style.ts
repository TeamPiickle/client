import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileContainer = styled.article`
  border-bottom: solid 0.2rem #f1f1f1;

  padding-bottom: 3.6rem;
`;

const ProfileImage = styled.img`
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 50%;
`;

const WelcomeText = styled.h1`
  ${({ theme }) => theme.fonts.body10};
  color: ${({ theme }) => theme.colors.bg};

  margin-top: 1.6rem;
`;

const DescriptText = styled.h2`
  ${({ theme }) => theme.fonts.body12};
  color: ${({ theme }) => theme.colors.gray600};

  margin-top: 0.4rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray600};

  margin-top: 3.6rem;
`;

const MyProfileBtn = styled(Link)`
  ${({ theme }) => theme.fonts.btn2};
  color: ${({ theme }) => theme.colors.gray600};

  border-right: solid 0.15rem ${({ theme }) => theme.colors.gray600};

  padding-right: 1rem;
`;

const LogoutBtn = styled.button`
  ${({ theme }) => theme.fonts.btn2};
  color: ${({ theme }) => theme.colors.gray600};

  padding-left: 1rem;
`;

export const St = {
  ProfileContainer,
  ProfileImage,
  WelcomeText,
  DescriptText,
  BtnContainer,
  MyProfileBtn,
  LogoutBtn,
};
