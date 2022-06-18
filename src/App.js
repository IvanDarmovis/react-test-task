import { Routes, Route, Navigate } from "react-router-dom";
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
// import i18n from "i18n";
import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isFetching = useSelector((state) => state.isFetching);
  // const lang = i18n.language;

  return (
    <div className="App">
      <UserMenu />
      <Routes>
        <Route element={<OnlyPublicPath isLoggedIn={isLoggedIn} />}>
          <Route path="signin" element={<LoginPage />} />
          {/* <Route path="/" element={<LoginPage />} /> */}
        </Route>
        {/* <Route path={`/${lang}`}> */}
        {/* <Route element={<OnlyPublicPath isLoggedIn={isLoggedIn} />}> */}
        {/* <Route path="signin" element={<LoginPage />} /> */}
        {/* <Route index element={<LoginPage />} /> */}
        {/* </Route> */}
        <Route element={<PrivatePath isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="signin" element={<HomePage />} /> */}
          <Route path="friends" element={<Friends />} />
          <Route path="friends/:id" element={<FriendsDetailed />} />
          <Route path="photos" element={<Photos />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="author" element={<Author />} />
        </Route>
        {/* </Route> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {isFetching && <Loader />}
    </div>
  );
}

export default App;
