import { Link } from "react-router-dom";

export default function UserMenu() {
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
      <button type="button">Log Out</button>
    </div>
  );
}
