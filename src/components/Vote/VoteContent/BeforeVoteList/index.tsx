import { useState } from "react";

import { IcCheck2 } from "../../../../asset/icon";
import { BallotTopicData, voteApi } from "../../../../core/api/vote";
import LoginModal from "../../../common/LoginModal";
import { St } from "./style";

interface BeforeVoteListProps {
  ballotTopic: BallotTopicData;
  mutateBallotState: () => void;
  setCurrentIndex: React.Dispatch<React.SetStateAction<string>>;
  currentIndex: string;
}

export default function BeforeVoteList(props: BeforeVoteListProps) {
  const { ballotTopic, mutateBallotState, currentIndex, setCurrentIndex } = props;
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const [isVoted, setIsVoted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandle = (key: string) => {
    if (isVoted === true) {
      if (currentIndex === key) {
        setIsVoted(false);
      }
    } else {
      setIsVoted(true);
    }
    setCurrentIndex(key);
  };

  const handleClickVote = () => {
    if (LOGIN_STATE === false) {
      setIsModalOpen(true);
    } else {
      if (isVoted === true) {
        handlePost();
        mutateBallotState();
      }
    }
  };

  const handlePost = () => {
    console.log(ballotTopic.ballotTopic._id, currentIndex);
    voteApi.postVote(ballotTopic.ballotTopic._id, currentIndex);
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  return (
    <St.Root>
      <St.VoteOptionContainer>
        {ballotTopic.ballotItems.map((element) => (
          <St.VoteOptionList
            key={element._id}
            onClick={() => clickHandle(element._id)}
            isClicked={isVoted && element._id === currentIndex}>
            <St.VoteOptionText>{element.content}</St.VoteOptionText>
            <IcCheck2 />
          </St.VoteOptionList>
        ))}
      </St.VoteOptionContainer>

      <St.VoteBtnContainer>
        <St.VoteBtn onClick={handleClickVote} role="dialog">
          투표하기
        </St.VoteBtn>
      </St.VoteBtnContainer>

      {isModalOpen && <LoginModal closeHandler={closeLoginModal} contents={"투표기능인 피클미를"} />}
    </St.Root>
  );
}
