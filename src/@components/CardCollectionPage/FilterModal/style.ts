import styled from "styled-components";

const ModalContentsWrapper = styled.div`
  padding: 1.6rem 1.6rem 0;
`;

const Title = styled.strong`
  ${({ theme }) => theme.newFonts.body4}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const Description = styled.p`
  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const FilterTagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  margin: 0.8rem 0 2.4rem;
`;

const FilterTag = styled.li<{ isactive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.6rem;
  padding: 0.4rem 2.4rem;

  ${({ theme }) => theme.newFonts.btn2}
  background: ${({ isactive, theme }) => (isactive ? theme.newColors.green : theme.newColors.gray300)};
  color: ${({ theme }) => theme.newColors.white};

  cursor: pointer;
`;

const FilterIntimacyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 9.7rem;
`;

const FilterIntimacyRange = styled.input`
  margin: 1.2rem 0 0.2rem;
`;

const FilterIntimacyTagsWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const FilterIntimacyTag = styled.li<{ isactive: boolean }>`
  ${({ theme }) => theme.newFonts.caption1}
  color: ${({ isactive, theme }) => (isactive ? theme.newColors.green : theme.newColors.gray700)};
`;

const SubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  ${({ theme }) => theme.newFonts.btn1};
  background-color: ${({ theme }) => theme.newColors.gray900};
  color: ${({ theme }) => theme.newColors.gray100};

  height: 5.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const St = {
  ModalContentsWrapper,
  Title,
  Description,
  FilterTagsWrapper,
  FilterTag,
  FilterIntimacyWrapper,
  FilterIntimacyRange,
  FilterIntimacyTagsWrapper,
  FilterIntimacyTag,
  SubmitBtnWrapper,
  SubmitBtn,
};
export default St;
