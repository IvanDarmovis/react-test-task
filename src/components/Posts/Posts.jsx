import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/reducer";
import PostList from "components/PostList";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export default function Posts() {
  const [options, setOptions] = useState([]);
  const posts = useSelector((state) => state.posts);
  const firstCall = useRef(true);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (posts.length === 0 && firstCall.current) {
      dispatch(getPosts(0));
      firstCall.current = false;
    } else setOptions(posts);
  }, [dispatch, posts]);

  return (
    <div>
      <PostList posts={options} />
      <button type="button" onClick={() => dispatch(getPosts(options.length))}>
        {t("posts.loadMore")}
      </button>
    </div>
  );
}
