import { useState } from "react";

import { IcCheckWithNoBg } from "../../../../asset/icon";
import { voteApi } from "../../../../core/api/vote";
import { BallotTopicData } from "../../../../types/ballots";
import { GTM_CLASS_NAME } from "../../../../util/const/gtm";
import St from "./style";

interface BeforeVoteListProps {
  ballotTopic: BallotTopicData;
  mutateBallotState: () => void;
}

export default function BeforeVoteList(props: BeforeVoteListProps) {
  const { ballotTopic, mutateBallotState } = props;

  const [currentIdx, setCurrentIdx] = useState("");

  const handleClickItem = (key: string) => {
    setCurrentIdx((prevIdx) => {
      if (prevIdx === key) return "";
      else return key;
    });
  };

  const handlePostVote = () => {
    if (currentIdx === "") return;
    voteApi.postVote({ ballotTopicId: ballotTopic.ballotTopic._id, ballotItemId: currentIdx });
    mutateBallotState();
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

      <St.VoteBtn role="dialog" className={GTM_CLASS_NAME.piickleMeVote} onClick={handlePostVote}>
        투표하기
      </St.VoteBtn>
    </>
  );
}
