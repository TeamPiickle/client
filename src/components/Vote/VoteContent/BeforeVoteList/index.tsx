import { useState } from "react";

import { IcCheck2 } from "../../../../asset/icon";
import { BallotTopicData, voteApi } from "../../../../core/api/vote";
import LoginModal from "../../../common/LoginModal";
import { St } from "./style";

interface BeforeVoteListProps {
  ballotTopic: BallotTopicData;
  mutateBallotState: () => void;
}

export default function BeforeVoteList(props: BeforeVoteListProps) {
  const { ballotTopic, mutateBallotState } = props;
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsModalOpen((prevLoginModalState) => !prevLoginModalState);
  };

  const [currentIdx, setCurrentIdx] = useState<string>("");

  const handleClickItem = (key: string) => {
    setCurrentIdx((prevIdx) => {
      if (prevIdx === key) return "";
      else return key;
    });
  };

  const handleClickVote = () => {
    switch (LOGIN_STATE) {
      case true:
        if (currentIdx !== "") {
          handlePost();
          mutateBallotState();
        }
        break;
      case false:
        toggleLoginModal();
        break;
    }
  };

  const handlePost = () => {
    voteApi.postVote(ballotTopic.ballotTopic._id, currentIdx);
  };

  return (
    <St.Root>
      <St.VoteOptionContainer>
        {ballotTopic.ballotItems.map((element) => (
          <St.VoteOptionList
            key={element._id}
            onClick={() => handleClickItem(element._id)}
            isClicked={element._id === currentIdx}>
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

      {isModalOpen && <LoginModal closeHandler={toggleLoginModal} contents={"투표기능인 피클미를"} />}
    </St.Root>
  );
}
