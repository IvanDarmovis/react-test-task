import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducer";

export default function UserMenu() {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/photos">Photos</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/author">Author</Link>

      <div>
        <button type="button">UA</button>
        <button type="button">RU</button>
        <button type="button">EN</button>
      </div>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Log Out
      </button>
    </div>
  );
}
