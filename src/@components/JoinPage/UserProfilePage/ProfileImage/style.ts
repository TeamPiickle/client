import styled from "styled-components";

export const St = {
  ProfileImage: styled.section``,

  ImageContainer: styled.article`
    position: relative;
    width: 8rem;
    height: 8rem;
    margin: 3.2rem auto;
    display: block;
  `,

  ImageWrapper: styled.div`
    width: 8rem;
    height: 8rem;

    border-radius: 70%;
    overflow: hidden;
  `,

  AddImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  AddBtnWrapper: styled.label`
    position: absolute;
    top: 5.8rem;
    left: 5.8rem;
  `,

  AddButton: styled.input`
    display: none;
  `,
};
