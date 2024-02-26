import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { CheckUserExists } from "./helper/helper";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExists>
        <Quiz></Quiz>
      </CheckUserExists>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExists>
        <Result></Result>
      </CheckUserExists>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
