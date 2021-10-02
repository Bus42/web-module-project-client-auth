import "./App.css";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute component={FriendsList} path="/friendslist" exact />
        <Route path="/">
          <Redirect from="/" to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
