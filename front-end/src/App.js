import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/Author/Login";
import Register from "./components/Author/Register";
import NotFound from "./components/NotFound/NotFound";
import Logout from "./components/Author/Logout";

import AppReducer from "./AppReducer/AppReducer";
import AppContext from "./components/AppContext/AppContext";
import { useCallback, useEffect, useReducer } from "react";
import config from "./config/config";
import axios from "axios";

function App() {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState); // userReducer(AppReducer,{user:null,posts:[]})
  const checkCurrentUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if(!token) return;
      const option = {
        ...config,
        url: "/api/v1/author",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // console.log("options", option);
      const res = await axios(option);
      // console.log("App.js có res: ", res.data.data);
      if (res.data.data.user) {
        // console.log("--------");
        const { userName } = res.data.data.user;
        dispatch({ type: "CURRENT_USER", payload: { userName } });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);
  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/logout">
              <Logout />
              <Redirect to="/" />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
