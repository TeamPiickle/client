import styled from "styled-components";

import { IcImageSearch as IconImageSearch } from "../../../asset/icon";

export const Root = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6.9rem 0 12.9rem;
`;

export const IcImageSearch = styled(IconImageSearch)`
  margin-bottom: 0.8rem;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.newFonts.body4};
  color: ${({ theme }) => theme.newColors.gray700};
`;

export const LinkBestPiickle = styled.button`
  margin-top: 2.5rem;

  ${({ theme }) => theme.newFonts.btn1};
  color: ${({ theme }) => theme.newColors.green};

  cursor: hover;
`;
