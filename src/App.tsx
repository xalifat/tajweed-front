import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import NotFound from "./pages/Lessons/NotFound/index.tsx";
import Temp from "./pages/Temp";
import SignIn from "./pages/SignIn/index.tsx";
import Azkary from "./pages/Azkary/index.tsx";
import Morning from "./pages/Azkary/morning.tsx";
import Evening from "./pages/Azkary/evening.tsx";
import Bookmark from "./pages/Bookmark/index.tsx";
import Groups from "./pages/Groups/index.tsx";
import Group from "./pages/Groups/Group.tsx";
import SignUp from "./pages/SignUp";
import Lessons from "./pages/Lessons/index.tsx";
import Profile from "./components/Profile/index.tsx";
import Home from "./pages/Home/Index.tsx";
import Voting from "./pages/Temp/voting.tsx";
import Forms from "./pages/Temp/forms.tsx";
import Madda from "./pages/Temp/madda.tsx";
import Sukun from "./pages/Temp/sukun.tsx";
import Tanvin from "./pages/Temp/tanvin.tsx";
import Tashdid from "./pages/Temp/tashdid.tsx";
import AllUsers from "./pages/AllUsers/index.tsx";
import Quran from "./pages/Quran/index.tsx";
import Sura from "./pages/Quran/Sura.tsx";

import { RootState } from "./redux/store/store.ts";
import "./App.scss";

function App() {
  const token = useSelector((state: RootState) => state.application.token);
  
  return !token ? (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/profile" element={<Navigate to="/login" />} />
      <Route path="/azkary" element={<Navigate to="/login" />} />
      <Route path="/lessons" element={<Navigate to="/login" />} />
      <Route path="/quran" element={<Navigate to="/login" />} />
      <Route path="/quran/:number" element={<Navigate to="/login" />} />
      <Route path="/lessons/alphabet" element={<Navigate to="/login" />} />
      <Route path="/lessons/voting"element={<Navigate to="/login" />} />
      <Route path="/lessons/forms" element={<Navigate to="/login" />} />
      <Route path="/lessons/madda" element={<Navigate to="/login" />} />
      <Route path="/lessons/sukun" element={<Navigate to="/login" />} />
      <Route path="/lessons/tanvin" element={<Navigate to="/login" />} />
      <Route path="/lessons/tashdid" element={<Navigate to="/login" />} />
      <Route path="/azkary"element={<Navigate to="/login" />} />
      <Route path="/azkary/morning" element={<Navigate to="/login" />} />
      <Route path="/azkary/evening" element={<Navigate to="/login" />} />
      <Route path="/bookmarks" element={<Navigate to="/login" />} />
      <Route path="/students" element={<Navigate to="/login" />} />
      <Route path="/groups" element={<Navigate to="/login" />} />
      <Route path="/groups/group/:id"element={<Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Navigate to="/profile" />} />
      <Route path="/quran" element={<Quran />} />
      <Route path="/quran/:number" element={<Sura />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/lessons/alphabet" element={<Temp />} />
      <Route path="/lessons/voting" element={<Voting />} />
      <Route path="/lessons/forms" element={<Forms />} />
      <Route path="/lessons/madda" element={<Madda />} />
      <Route path="/lessons/sukun" element={<Sukun />} />
      <Route path="/lessons/tanvin" element={<Tanvin />} />
      <Route path="/lessons/tashdid" element={<Tashdid />} />
      <Route path="/azkary" element={<Azkary />} />
      <Route path="/azkary/morning" element={<Morning />} />
      <Route path="/azkary/evening" element={<Evening />} />
      <Route path="/bookmarks" element={<Bookmark />} />
      <Route path="/students" element={<AllUsers />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/groups/group/:id" element={<Group />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
