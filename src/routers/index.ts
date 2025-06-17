import {createBrowserRouter} from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: {
      Component: async () => (await import("../App")).default
    },

    children: [
      {
        path: "",
        lazy: {
          Component: async () => (await import("../examples/01HelloWorld/index")).default
        }
      },
      {
        path: "02",
        lazy: {
          Component: async () => (await import("../examples/02useState/index")).default
        }
      },
      {
        path: "03",
        lazy: {
          Component: async () => (await import("../examples/03Prop/index")).default
        }
      }
    ]
  }
]);
