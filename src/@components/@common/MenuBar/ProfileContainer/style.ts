import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileContainer = styled.article`
  border-bottom: solid 0.1rem ${({ theme }) => theme.newColors.gray300};

  padding-bottom: 2.4rem;
`;

const ProfileImage = styled.img`
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 50%;
`;

const WelcomeText = styled.h1`
  ${({ theme }) => theme.newFonts.body1};
  color: ${({ theme }) => theme.newColors.gray900};

  margin-top: 1.6rem;
`;

const DescriptText = styled.h2`
  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme }) => theme.newColors.gray700};

  margin-top: 0.2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1.6rem;
`;

const MyProfileBtn = styled(Link)`
  ${({ theme }) => theme.newFonts.btn2};
  color: ${({ theme }) => theme.newColors.gray700};

  border-right: solid 0.15rem ${({ theme }) => theme.newColors.gray700};

  padding-right: 1rem;
`;

const LogoutBtn = styled.button`
  ${({ theme }) => theme.newFonts.btn2};
  color: ${({ theme }) => theme.colors.gray700};

  padding-left: 1rem;
`;

const St = {
  ProfileContainer,
  ProfileImage,
  WelcomeText,
  DescriptText,
  BtnContainer,
  MyProfileBtn,
  LogoutBtn,
};
export default St;
