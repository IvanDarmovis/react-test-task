import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/reducer";
import { Virtuoso } from "react-virtuoso";
import debounce from "lodash.debounce";
import s from "./Posts.module.css";

export default function Posts() {
  const [position, setPosition] = useState(0);
  const [options, setOptions] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const userId = useSelector((state) => state.currentUser.id);
  const isFetching = useSelector((state) => state.isFetching);

  // console.log(options);
  // console.log(position);

  useEffect(() => {
    dispatch(getPosts(position));
  }, [position, dispatch]);

  useEffect(() => {
    const data = posts.filter((el) => el.userId !== userId);
    setOptions(data);
    if (!isFetching && posts && data.length === 0) {
      console.log(data.length);
      setPosition(position + 10);
    }
  }, [isFetching, position, posts, userId]);

  return (
    <div>
      <p>Posts</p>
      <ul>
        {options &&
          options.map((el) => (
            <li key={[el.userId, el.id].join("-")}>
              <h3>{el.title}</h3>
              <p>{el.body}</p>
            </li>
          ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          setPosition(position + 10);
          // dispatch(getPosts(position));
        }}
      >
        Load more
      </button>
    </div>
  );
}
