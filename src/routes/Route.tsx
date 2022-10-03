import * as React from "react";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react";
import store from "../store";

const Route = observer((props: any) => {
  const { children, mode } = props;
  const {
    authStore: { isAuthed }
  } = store;
  switch (mode) {
    case "loggedIn":
      if (!isAuthed) {
        return <Navigate to="/login" />;
      }
      return children;
    case "loggedOut":
      if (isAuthed) {
        return <Navigate to="/" />;
      }
      return children;
    default:
      return children;
  }
});

export default Route;
