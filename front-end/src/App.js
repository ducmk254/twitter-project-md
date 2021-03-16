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
import { useReducer } from "react";
function App() {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState); // userReducer(AppReducer,{user:null,posts:[]})

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
