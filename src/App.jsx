import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ApiProvider from "./contexts/apiProvider";
import Qrscanner from "./pages/Qrscanner";
import Attendees from "./pages/Attendees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/qrscanner",
        element: <Qrscanner />,
      },
      // {
      //   path: "/attendees",
      //   element: <Attendees />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <ApiProvider>
        <RouterProvider router={router} />
      </ApiProvider>
    </>
  );
}

export default App;
