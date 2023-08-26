import styled, { css } from "styled-components";

export const CommentWrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(var(--vh, 1vh) * 80);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.6rem;
  border-radius: 1.6rem 1.6rem 0 0;
  background: ${({ theme }) => theme.newColors.white};
`;

export const KnobWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 2rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Knob = styled.div`
  width: 4.2rem;
  height: 0.4rem;
  border-radius: 2.7rem;
  background: ${({ theme }) => theme.newColors.gray600};
`;

export const Comments = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  margin: 3.8rem 0 5.6rem 0;
  padding-bottom: 2rem;
`;

export const Comment = styled.div<{ ismycomment: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;

  gap: 1.2rem;

  ${({ ismycomment }) =>
    ismycomment &&
    css`
      color: ${({ theme }) => theme.newColors.green};
      img {
        border: ${({ theme }) => theme.newColors.green} 0.2rem solid;
      }
    `}
`;

export const ProfileImgWrapper = styled.div`
  width: 4.2rem;
  height: 4.2rem;
`;

export const ProfileImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentContent = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 0.6rem;

  white-space: pre-wrap;
`;

export const Nickname = styled.p`
  ${({ theme }) => theme.newFonts.body5}
`;
export const Text = styled.p`
  ${({ theme }) => theme.newFonts.body6}
`;

export const Gradient = styled.div`
  position: absolute;
  bottom: 5rem;
  width: 100%;
  height: 8rem;

  background: linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
`;

export const InputWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  padding: 1.2rem 2rem;
  min-height: 5.6rem;
  background: ${({ theme }) => theme.newColors.gray100};
`;

export const Input = styled.textarea`
  width: 100%;

  overflow-y: hidden;

  border: none;
  overflow: auto;
  outline: none;

  resize: none;
  background: ${({ theme }) => theme.newColors.gray100};

  ${({ theme }) => theme.newFonts.h2};
`;

export const SubmitBtn = styled.button`
  width: 3.2rem;
  height: 3.2rem;
`;
