import styled from "styled-components";

const Container = styled.section``;

const Title = styled.h1`
  height: 5.2rem;
  padding: 1.6rem;

  ${({ theme }) => theme.newFonts.h2}
  color: ${({ theme }) => theme.newColors.gray900};
`;

const Medley = styled.article`
  display: flex;
  overflow-x: scroll;

  padding: 0 1.6rem;
  gap: 0.8rem;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const St = {
  Container,
  Title,
  Medley,
};
export default St;
