import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Author from "./components/Author/Author";
import Login from "./components/Author/Login";
import Register from "./components/Author/Register";
import NotFound from "./components/NotFound/NotFound";
import Logout from "./components/Author/Logout";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
