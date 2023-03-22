import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Provider
import AuthProvider from "./context/AuthContext";
//Provider

//PrivateRoutes
import PrivateRoutes from "./privateRoutes";
//PrivateRoutes

//Layout
import NavBar from "./components/NavBarH";
import FlashMessage from "../src/components/FlashMessage";
//Layout

//Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NewTask from "./pages/NewTask";
import AllTasks from "./pages/AllTasks";
import TasksClosed from "./pages/TasksClosed";
import TasksPending from "./pages/TasksPending";
import EditTask from "./pages/EditTask";
//Pages

//Theme Styled
import { ThemeProvider } from "styled-components";
//Theme Styled

const theme = {
  bg_navbar: "#1E73BE",
  bg_back: "#4E5A72",
  bg_back_d: "#232C3D",
  t_main: "#FFFFFF",
  t_alt: "#9A9696",
  bg_inputs: "#F5F5F5",
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <NavBar></NavBar>
          <FlashMessage></FlashMessage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />
            <Route
              path="/tasks/new"
              element={
                <PrivateRoutes>
                  <NewTask />
                </PrivateRoutes>
              }
            />
            <Route
              path="/tasks"
              element={
                <PrivateRoutes>
                  <AllTasks />
                </PrivateRoutes>
              }
            />
            <Route
              path="/tasks/closed"
              element={
                <PrivateRoutes>
                  <TasksClosed />
                </PrivateRoutes>
              }
            />
            <Route
              path="/tasks/pending"
              element={
                <PrivateRoutes>
                  <TasksPending />
                </PrivateRoutes>
              }
            />
            <Route
              path="/tasks/edit/:id"
              element={
                <PrivateRoutes>
                  <EditTask />
                </PrivateRoutes>
              }
            />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
