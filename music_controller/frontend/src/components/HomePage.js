import React, { Component } from "react";
import RoomJoin from "./RoomJoin";
import CreateRoom from "./CreateRoom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<h1>This is the home page</h1>} />
            <Route exact path="/join" element={<RoomJoin />}></Route>
            <Route exact path="/create" element={<CreateRoom />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
