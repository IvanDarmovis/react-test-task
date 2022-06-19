import { useSelector } from "react-redux";
import UserInfo from "components/UserInfo";

export default function HomePage() {
  const id = useSelector((state) => state.currentUser.id);

  return (
    <div>
      <UserInfo id={id} />
    </div>
  );
}
