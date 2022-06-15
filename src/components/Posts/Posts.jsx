import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/reducer";
import { Virtuoso } from "react-virtuoso";
// import { debounce } from "debounce";
import debounce from "lodash.debounce";
import s from "./Posts.module.css";

export default function Posts() {
  const [position, setPosition] = useState(0);
  const [options, setOptions] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const userId = useSelector((state) => state.currentUser.id);

  console.log(options);

  useEffect(() => {
    dispatch(getPosts(position));
  }, [dispatch, position]);

  useEffect(() => {
    setOptions(posts.filter((el) => el.id !== userId));
  }, [posts, userId]);

  return (
    <div>
      <p>Posts</p>
      <Virtuoso
        className={s.scrollContainer}
        // onScroll={(e) => console.dir(e.target)}
        totalCount={position}
        atBottomStateChange={debounce(() => {
          setPosition(position + 10);
          console.log(position);
        }, 1000)}
        itemContent={() => (
          <ul>
            {options.map((el) => (
              <li key={[el.id, el.userId].join("-")}>
                <h3>{el.title}</h3>
                <p>{el.body}</p>
              </li>
            ))}
          </ul>
        )}
        style={{
          border: "5px dashed gray",
          borderRadius: "4px",
          height: "85vh"
        }}
      />
    </div>
  );
}
