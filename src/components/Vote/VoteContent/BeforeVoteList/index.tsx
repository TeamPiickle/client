import { useState } from "react";

import { IcCheck2 } from "../../../../asset/icon";
import { BallotTopicData, voteApi } from "../../../../core/api/vote";
import useModal from "../../../../util/hooks/useModal";
import LoginModal from "../../../common/LoginModal";
import { St } from "./style";

interface BeforeVoteListProps {
  ballotTopic: BallotTopicData;
  mutateBallotState: () => void;
}

export default function BeforeVoteList(props: BeforeVoteListProps) {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;
  const { ballotTopic, mutateBallotState } = props;

  const { isModalOpen, toggleModal } = useModal();

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
        toggleModal();
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

      {isModalOpen && <LoginModal closeHandler={toggleModal} contents={"투표기능인 피클미를"} />}
    </St.Root>
  );
}
