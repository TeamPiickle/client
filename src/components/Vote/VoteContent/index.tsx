import { useState } from "react";

import { voteContent, voteTitle } from "../../../core/vote/voteContent";
import AfterVoteList from "../AfterVoteList";
import BeforeVoteList from "../BeforeVoteList";
import { St } from "./style";

export default function VoteContent() {
  const [isVoted, setIsVoted] = useState(false);

  return (
    <St.VoteContentContainer>
      <St.VoteContentTitle>
        민초 vs 반민초 <br />
        여러분의 의견은?
      </St.VoteContentTitle>
      {isVoted && <BeforeVoteList isVoted={isVoted} setIsVoted={setIsVoted} />}
      {!isVoted && <AfterVoteList />}
    </St.VoteContentContainer>
  );
}
