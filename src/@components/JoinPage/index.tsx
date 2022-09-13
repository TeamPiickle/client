import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import { useOutletContexts } from "../../types/users";

export default function JoinPage() {
  const [userEmail, setUserEmail] = useState<useOutletContexts>();
  const [userPassword, setUserPassword] = useState<useOutletContexts>();
  return (
    <div>
      <Outlet context={[userEmail, setUserEmail, userPassword, setUserPassword]} />
    </div>
  );
}
