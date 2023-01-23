type BallotTopic = {
  _id: string;
  ballotTopicContent: string;
};

type BallotItems = {
  _id: string;
  status: number;
  content: string;
};

type UserSelect = {
  _id: string;
  ballotItemId: string;
};

export interface BallotTopicData {
  ballotTopic: BallotTopic;
  ballotItems: BallotItems[];
  userSelect: UserSelect | null;
  beforeTopicId: string | null;
  nextTopicId: string | null;
}
