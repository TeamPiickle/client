import { useState } from "react";

import { IcCheckWithNoBg } from "../../../../asset/icon";
import { voteApi } from "../../../../core/api/vote";
import { BallotTopicData } from "../../../../types/ballots";
import useModal from "../../../@common/hooks/useModal";
import LoginModal from "../../../@common/LoginModal";
import St from "./style";

interface BeforeVoteListProps {
  ballotTopic: BallotTopicData;
  mutateBallotState: () => void;
}

export default function BeforeVoteList(props: BeforeVoteListProps) {
  const LOGIN_STATE = localStorage.getItem("piickle-token") ? true : false;
  const { ballotTopic, mutateBallotState } = props;

  const { isModalOpen: isLoginModalOpen, toggleModal: toggleLoginModal } = useModal();

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
    voteApi.postVote({ ballotTopicId: ballotTopic.ballotTopic._id, ballotItemId: currentIdx });
  };

  return (
    <>
      <St.VoteOptionContainer>
        {ballotTopic.ballotItems.map((element) => (
          <St.VoteOptionList
            key={element._id}
            onClick={() => handleClickItem(element._id)}
            isClicked={element._id === currentIdx}>
            <St.VoteOptionText>{element.content}</St.VoteOptionText>
            <IcCheckWithNoBg />
          </St.VoteOptionList>
        ))}
      </St.VoteOptionContainer>

      <St.VoteBtn onClick={handleClickVote} role="dialog">
        투표하기
      </St.VoteBtn>

      {isLoginModalOpen && <LoginModal closeHandler={toggleLoginModal} contents={"투표기능인 피클미를"} />}
    </>
  );
}
