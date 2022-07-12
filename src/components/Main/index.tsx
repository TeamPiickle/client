import { Link } from "react-router-dom";

import BestPiickle from "./BestPiickle";
import PiickleMe from "./PiickleMe";

export default function Main() {
  return (
    <main>
      <PiickleMe />
      <BestPiickle />
    </main>
  );
}
