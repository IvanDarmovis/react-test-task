import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/reducer";
import PostList from "components/PostList";
import { useTranslation } from "react-i18next";

export default function Posts() {
  const [position, setPosition] = useState(0);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetch() {
      const originalPromiseResult = await dispatch(getPosts(position)).unwrap();
      setOptions([...options, ...originalPromiseResult]);
    }
    fetch();
  }, [position]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <PostList posts={options} />
      <button type="button" onClick={() => setPosition(position + 10)}>
        {t("posts.loadMore")}
      </button>
    </div>
  );
}
