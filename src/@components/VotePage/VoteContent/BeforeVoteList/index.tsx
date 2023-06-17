import { useState } from "react";

import { IcCheckWithNoBg } from "../../../../asset/icon";
import { voteApi } from "../../../../core/api/vote";
import useAuth from "../../../../core/hooks/useAuth";
import { BallotTopicData } from "../../../../types/ballots";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import useModal from "../../../@common/hooks/useModal";
import LoginModal from "../../../@common/LoginModal";
import St from "./style";

interface BeforeVoteListProps {
  ballotTopic: BallotTopicData;
  mutateBallotState: () => void;
}

export default function BeforeVoteList(props: BeforeVoteListProps) {
  const { isLogin } = useAuth();
  const { ballotTopic, mutateBallotState } = props;

  const { isModalOpen: isLoginModalOpen, toggleModal: toggleLoginModal } = useModal();

  const [currentIdx, setCurrentIdx] = useState("");

  const handleClickItem = (key: string) => {
    setCurrentIdx((prevIdx) => {
      if (prevIdx === key) return "";
      else return key;
    });
  };

  const handleClickVote = () => {
    if (!isLogin) {
      toggleLoginModal();
      return;
    }

    if (currentIdx !== "") {
      handlePost();
      mutateBallotState();
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

      <St.VoteBtn role="dialog" className={GTM_CLASS_NAME.piickleMeVote} onClick={handleClickVote}>
        투표하기
      </St.VoteBtn>

      {isLoginModalOpen && (
        <LoginModal
          closeHandler={toggleLoginModal}
          contents={"투표 기능인 피클미를"}
          voteLoginClassName={GTM_CLASS_NAME.piickleMeLogin}
          voteJoinClassName={GTM_CLASS_NAME.piickleMeJoin}
        />
      )}
    </>
  );
}
