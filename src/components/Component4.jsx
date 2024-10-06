import { useContext } from "react";
import { UserContext} from "../App"; // Import the context from App

function Component4() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>component4</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component4;
