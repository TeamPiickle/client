import { useEffect, useState } from "react";

import { IcCheck2 } from "../../../asset/icon";
import useBallotTopic, { real } from "../../../core/api/vote";
import LoginModal from "../../CardCollection/LoginModal";
import { St } from "./style";
interface BeforeVoteListProps {
  isVoted: boolean;
  setIsVoted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: string;
  isPosted: boolean;
  LOGIN_STATE: boolean;
}

export default function BeforeVoteList(props: BeforeVoteListProps) {
  const { isVoted, setIsVoted, setIsSuccess, currentIndex, setCurrentIndex, isPosted, LOGIN_STATE } = props;
  const { ballotTopic, isLoading, isError } = useBallotTopic("투표id");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (ballotTopic?.data.userSelect.ballotItemId !== "" && isPosted === false) {
      setIsSuccess(true);
      if (ballotTopic?.data.userSelect) setCurrentIndex(ballotTopic.data.userSelect.ballotItemId);
    }
  }, []);

  const clickHandle = (key: string) => {
    if (isVoted === true) {
      if (currentIndex === key) {
        setIsVoted(false);
      }
      setCurrentIndex(key);
    } else {
      setIsVoted(!isVoted);
      setCurrentIndex(key);
    }
  };

  const successVote = () => {
    if (LOGIN_STATE === false) {
      setIsModalOpen(true);
    } else {
      if (isVoted === true) {
        setIsSuccess(true);
        handlePost();
      }
    }
  };

  const handlePost = () => {
    if (ballotTopic?.data.ballotTopic && ballotTopic.data.userSelect)
      real.postVote(ballotTopic.data.ballotTopic._id, ballotTopic.data.userSelect.ballotItemId);
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <St.VoteOptionContainer>
        {ballotTopic &&
          ballotTopic.data.ballotItems.map((element: any) => {
            // 이부분에 element 타입을 어떻게 지정해줘야할지 몰라서 피알 올리고 고민해볼께요!
            return (
              <St.VoteOptionList
                key={element._id}
                onClick={() => clickHandle(element._id)}
                isClicked={isVoted && element._id === currentIndex}>
                <St.VoteOptionText>{element.content}</St.VoteOptionText>
                <IcCheck2 />
              </St.VoteOptionList>
            );
          })}
      </St.VoteOptionContainer>
      <St.VoteBtnContainer>
        <St.VoteBtn onClick={successVote}>투표하기</St.VoteBtn>
      </St.VoteBtnContainer>
      {isModalOpen && <LoginModal closeHandler={closeLoginModal} contents={"투표기능인 피클미를"} />}
    </>
  );
}
