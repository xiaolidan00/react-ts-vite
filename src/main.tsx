import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router";
import {router} from "./routers/index";
import "./index.css";
import "normalize.css";

createRoot(document.getElementById("root")!).render(<RouterProvider router={router}></RouterProvider>);
