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
      },
      {
        path: "04",
        lazy: {
          Component: async () => (await import("../examples/04useCallback/index")).default
        }
      },
      {
        path: "05",
        lazy: {
          Component: async () => (await import("../examples/05useReducer/index")).default
        }
      },
      {
        path: "06",
        lazy: {
          Component: async () => (await import("../examples/06useEffect/index")).default
        }
      },
      {
        path: "07",
        lazy: {
          Component: async () => (await import("../examples/07useRef/index")).default
        }
      },
      {
        path: "08",
        lazy: {
          Component: async () => (await import("../examples/08useImperativeHandle/index")).default
        }
      },
      {
        path: "09",
        lazy: {
          Component: async () => (await import("../examples/09useLoading/index")).default
        }
      }
    ]
  }
]);
