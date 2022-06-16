import { Routes, Route } from "react-router-dom";
import UserMenu from "./components/UserMenu/UserMenu";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Friends from "./components/Friends";
import FriendsDetailed from "./components/FriendDetailed";
import Photos from "./components/Photos";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Author from "./components/Author";
import Loader from "./components/Loader";
import { PrivatePath, OnlyPublicPath } from "./components/services/redirect";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isFetching = useSelector((state) => state.isFetching);

  return (
    <div className="App">
      <UserMenu />
      <Routes>
        <Route element={<OnlyPublicPath isLoggedIn={isLoggedIn} />}>
          <Route path="/signin" element={<LoginPage />} />
        </Route>
        <Route element={<PrivatePath isLoggedIn={isLoggedIn} />}>
          <Route path="/react-test-task/" element={<HomePage />} />
          <Route path="/react-test-task/friends" element={<Friends />} />
          <Route
            path="/react-test-task/friends/:id"
            element={<FriendsDetailed />}
          />
          <Route path="/react-test-task/photos" element={<Photos />} />
          <Route path="/react-test-task/posts" element={<Posts />} />
          <Route path="/react-test-task/posts/:id" element={<PostDetails />} />
          <Route path="/react-test-task/author" element={<Author />} />
        </Route>
      </Routes>
      {isFetching && <Loader />}
    </div>
  );
}

export default App;
