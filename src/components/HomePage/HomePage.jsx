import { useSelector } from "react-redux";
import s from "./HomePage.module.css";
import UserInfo from "components/UserInfo";

export default function HomePage() {
  const id = useSelector((state) => state.currentUser.id);

  return (
    <div className={s.wrapper}>
      <UserInfo id={id} />
    </div>
  );
}
