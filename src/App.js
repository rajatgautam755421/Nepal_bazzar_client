import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation";
import Header from "./Components/BottomNavigation/Header/Header";
import Registration from "./Components/Registration/Registration";
import AddAPost from "./Components/AddAPost/AddAPost";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Chat from "./Components/Chat/Chat";
import Settings from "./Components/Settings/Settings";
import Tabs from "./Components/Profile/Tabs";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ViewItem from "./Components/Profile/ViewItem/ViewItem";
import ScroolToTop from "./Components/ScroolToTop/ScroolToTop";
import DetailView from "./Components/PostCard/DetailView/DetailView";
import UserDetails from "./Components/UserDetails/UserDetails";
import LoadMore from "./Components/LoadMore/LoadMore";

function App() {

  return (
    <div className="App">
      <Header />
      <BottomNavigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <Home />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />

              <Registration />
            </>
          }
        />
        <Route
          path="/post"
          element={
            <>
              <Navbar />

              <AddAPost />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <Navbar />

              <Settings />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />

              <Login />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Navbar />

              <Tabs />
            </>
          }
        />
        <Route
          path="/forgot/password"
          element={
            <>
              <ForgotPassword />
            </>
          }
        />
        <Route
          path="/reset/password/:token/:email"
          element={
            <>
              <ResetPassword />
            </>
          }
        />
        <Route
          path="/item/:id"
          element={
            <>
              <Navbar />

              <ViewItem />
            </>
          }
        ></Route>
        <Route
          path="/detail/view/:id"
          element={
            <>
              <Navbar />

              <DetailView />
            </>
          }
        ></Route>
        <Route
          path="/all/products"
          element={
            <>
              <Navbar />

              <LoadMore />
            </>
          }
        ></Route>
        <Route
          path="/user/detail/:id"
          element={
            <>
              <Navbar />

              <UserDetails />
            </>
          }
        ></Route>
        <Route
          path="/chat"
          element={
            <>
              <Navbar />

              <Chat />
            </>
          }
        ></Route>
      </Routes>
      <ScroolToTop />
    </div>
  );
}

export default App;
