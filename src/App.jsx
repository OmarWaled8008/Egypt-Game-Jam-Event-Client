import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ApiProvider from "./contexts/apiProvider";
import Qrscanner from "./pages/Qrscanner";
import Attendees from "./pages/Attendees";
import { Toaster } from "react-hot-toast";
import Protectedroute from "./components/Protectedroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protectedroute>
        <Layout />
      </Protectedroute>
    ),
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
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#2a1328",
              color: "#fff",
              border: "1px solid #ffbf00",
              padding: "16px",
              borderRadius: "15px",
            },
          }}
        />
        <RouterProvider router={router} />
      </ApiProvider>
    </>
  );
}

export default App;
