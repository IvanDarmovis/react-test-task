import { useParams } from "react-router-dom";
import UserInfo from "../UserInfo";

export default function FriendsDetailed() {
  const { id } = useParams();

  return (
    <div>
      <UserInfo id={id} />
    </div>
  );
}
