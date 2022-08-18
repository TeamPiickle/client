import Header from "../common/Header";
import VoteSlider from "./VoteContent/VoteSlider";
import VoteTitle from "./VoteTitle";

export default function VotePage() {
  return (
    <main>
      <Header />
      <VoteTitle />
      <VoteSlider />
    </main>
  );
}
