import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Fontawesome
import "@fortawesome/fontawesome-free/css/all.min.css";

//flowbite
import "../node_modules/flowbite/dist/flowbite.js";

import "./index.css";
import MainRouter from "./MainRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
