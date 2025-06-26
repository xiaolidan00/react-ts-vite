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
      },
      {
        path: "10",
        lazy: {
          Component: async () => (await import("../examples/10Event/index")).default
        }
      },
      {
        path: "11",
        lazy: {
          Component: async () => (await import("../examples/11Context/index")).default
        }
      },
      {
        path: "12",
        lazy: {
          Component: async () => (await import("../examples/12createRef/index")).default
        }
      },
      {
        path: "13",
        lazy: {
          Component: async () => (await import("../examples/13createPortal/index")).default
        }
      },
      {
        path: "14",
        lazy: {
          Component: async () => (await import("../examples/14ErrorBoundary/index")).default
        }
      },
      {
        path: "15",
        lazy: {
          Component: async () => (await import("../examples/15HOC/index")).default
        }
      },
      {
        path: "16",
        lazy: {
          Component: async () => (await import("../examples/16Use/index")).default
        }
      },
      {
        path: "17",
        lazy: {
          Component: async () => (await import("../examples/17useMemo/index")).default
        }
      },
      {
        path: "18",
        lazy: {
          Component: async () => (await import("../examples/18memo/index")).default
        }
      },
      {
        path: "19",
        lazy: {
          Component: async () => (await import("../examples/19useActionState/index")).default
        }
      },
      {
        path: "20",
        lazy: {
          Component: async () => (await import("../examples/20useOptimistic/index")).default
        }
      },
      {
        path: "21",
        lazy: {
          Component: async () => (await import("../examples/21useTransition/index")).default
        }
      },
      {
        path: "22",
        lazy: {
          Component: async () => (await import("../examples/22useSyncExternalStore/index")).default
        }
      },
      {
        path: "23",
        lazy: {
          Component: async () => (await import("../examples/23useDeferredValue/index")).default
        }
      },
      {
        path: "24",
        lazy: {
          Component: async () => (await import("../examples/24lazy/index")).default
        }
      }
    ]
  }
]);
