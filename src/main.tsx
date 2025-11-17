import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { components } from "./components/index.ts";
import { pages } from "./pages/index.ts";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "*",
    element: <pages.NotFound />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <components.Form />,
    children: [
      {
        path: "login",
        element: <components.Login />,
      },
      {
        path: "signup",
        element: <components.SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
