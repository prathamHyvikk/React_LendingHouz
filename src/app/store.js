import { configureStore } from "@reduxjs/toolkit";
import personRole from "../features/personRole";
import authenticate from "../features/authenticate";

export default configureStore({
  reducer: {
    person: personRole,
    auth: authenticate,
  },
});
