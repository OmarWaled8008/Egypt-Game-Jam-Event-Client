import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ApiProvider from "./contexts/apiProvider";
import Qrscanner from "./pages/Qrscanner";
import Attendees from "./pages/Attendees";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-center"
          toastOptions={{
            className:
              "bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg border border-white/20",
            duration: 3000,
            style: {
              fontFamily: "Space Grotesk, sans-serif",
            },
            success: {
              iconTheme: {
                primary: "#ffffff",
                secondary: "#22c55e",
              },
            },
            error: {
              iconTheme: {
                primary: "#ffffff",
                secondary: "#ef4444",
              },
            },
          }}
        />
        <RouterProvider router={router} />
      </ApiProvider>
    </>
  );
}

export default App;
