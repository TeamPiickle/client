import { useState } from "react";
import { useRecoilValue } from "recoil";

import { IcCheckWithNoBg } from "../../../../asset/icon";
import { voteApi } from "../../../../core/api/vote";
import { userTokenSelector } from "../../../../core/atom/auth";
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
  const userToken = useRecoilValue(userTokenSelector);
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
    switch (!!userToken) {
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
