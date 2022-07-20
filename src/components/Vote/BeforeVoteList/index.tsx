import { useEffect, useState } from "react";

import { IcCheck2 } from "../../../asset/icon";
import { BallotTopicData, real } from "../../../core/api/vote";
import LoginModal from "../../common/LoginModal";
import { St } from "./style";

interface BeforeVoteListProps {
  ballotTopic: { data: BallotTopicData };
  isVoted: boolean;
  setIsVoted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: string;
  isPosted: boolean;
  LOGIN_STATE: boolean;
}

export default function BeforeVoteList(props: BeforeVoteListProps) {
  const { ballotTopic, isVoted, setIsVoted, setIsSuccess, currentIndex, setCurrentIndex, isPosted, LOGIN_STATE } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!ballotTopic.data.userSelect.ballotItemId && isPosted === false) {
      setIsSuccess(true);
      if (ballotTopic.data.userSelect) setCurrentIndex(ballotTopic.data.userSelect.ballotItemId);
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
    <St.Root>
      <St.VoteOptionContainer>
        {ballotTopic &&
          ballotTopic.data.ballotItems.map((element) => {
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
        <St.VoteBtn onClick={successVote} role="dialog">
          투표하기
        </St.VoteBtn>
      </St.VoteBtnContainer>
      {isModalOpen && <LoginModal closeHandler={closeLoginModal} contents={"투표기능인 피클미를"} />}
    </St.Root>
  );
}
