import { useState } from "react";

import useBallotTopic from "../../../core/api/vote";
import AfterVoteList from "../AfterVoteList";
import BeforeVoteList from "../BeforeVoteList";
import { St } from "./style";

interface IseledtedOptions {
  selectedOption: number;
}

export default function VoteContent() {
  // src/mocks/handlers/ballots.ts 에 mock api data 정의해뒀는데,
  // isLogin 을 그냥 false로 해놔서, 투표된 데이터를 받으려면 그거 true로 바꿔줘야 해!
  // 투표가 되면 바로 투표 현황을 받는 거는 서버 api 가 배포되면 확인하면서 해야할 거 같아서
  // 거기까지는 안 해도 될듯!!! 데이터 연결까지만 잘 해주세요 !!~
  const { ballotTopic, isLoading, isError } = useBallotTopic("투표id");

  const [isVoted, setIsVoted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IseledtedOptions | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <St.ContainerWrapper>
      <St.VoteContentContainer>
        <St.VoteContentTitle>
          민초 vs 반민초 <br />
          여러분의 의견은?
        </St.VoteContentTitle>
        {isSuccess ? (
          <AfterVoteList
            setIsVoted={setIsVoted}
            setIsSuccess={setIsSuccess}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ) : (
          <BeforeVoteList
            isVoted={isVoted}
            setIsVoted={setIsVoted}
            setIsSuccess={setIsSuccess}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </St.VoteContentContainer>
    </St.ContainerWrapper>
  );
}
