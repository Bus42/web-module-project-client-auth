import "./App.css";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/friendslist">
          <FriendsList />
        </Route>
        <Route path="/">
          <Redirect from="/" to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
