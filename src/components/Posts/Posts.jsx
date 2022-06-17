import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/reducer";
import { Link } from "react-router-dom";
// import s from "./Posts.module.css";

export default function Posts() {
  const [position, setPosition] = useState(0);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.currentUser.id);
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    async function fetch() {
      const originalPromiseResult = await dispatch(getPosts(position)).unwrap();
      setOptions([...options, ...originalPromiseResult]);
    }
    fetch();
  }, [position]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <p>Posts</p>
      <ul>
        {options &&
          options.map((el) => (
            <li key={[el.userId, el.id].join("-")}>
              <h3>{el.title}</h3>
              {id !== el.userId && (
                <Link to={`/friends/${el.userId}`}>Детальніше про автора</Link>
              )}
              <Link to={`/posts/${el.id}`}>Прочитати статтю</Link>
            </li>
          ))}
      </ul>
      <button type="button" onClick={() => setPosition(position + 10)}>
        Load more
      </button>
    </div>
  );
}
