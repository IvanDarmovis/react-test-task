import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/reducer";
// import s from "./Posts.module.css";

export default function Posts() {
  const [position, setPosition] = useState(0);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.currentUser.id);

  useEffect(() => {
    async function fetch() {
      const originalPromiseResult = await dispatch(getPosts(position)).unwrap();
      console.log(originalPromiseResult);
      if (originalPromiseResult?.filter((el) => el.userId !== id).length === 0)
        setPosition(position + 10);
      else
        setOptions([
          ...options,
          ...originalPromiseResult.filter((el) => el.userId !== id)
        ]);
    }
    fetch();
  }, [dispatch, id, position]); // eslint-disable-line react-hooks/exhaustive-deps

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
      <button type="button" onClick={() => setPosition(position + 10)}>
        Load more
      </button>
    </div>
  );
}
