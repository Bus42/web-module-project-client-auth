import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute component={FriendsList} path="/friendslist" exact />
        <PrivateRoute component={AddFriend} path="/addfriend" exact />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
