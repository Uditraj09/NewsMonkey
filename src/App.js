//import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 5;
  apikey = "998bf983a476403286dd62dfacbea490";
  // state = { progress: 10 };
  // setProgress = (progress) => {
  //   this.setState({ progress: progress });
  // };
  render() {
    return (
      <div>
        <>
          <Router>
            <NavBar />
            {/* <LoadingBar progress={this.state.progress} height={3} color="red" /> */}
            {/* <News pageSize={6} country="in" category="sports" /> */}

            <Routes>
              <Route
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    // apikey={this.apikey}
                    pageSize={9}
                    country="in"
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    // apikey={this.apikey}
                    key="business"
                    pageSize={9}
                    country="in"
                    category="business"
                  />
                }
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    // apikey={this.apikey}
                    key="entertainment"
                    pageSize={9}
                    country="in"
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    // apikey={this.apikey}
                    key="science"
                    pageSize={9}
                    country="in"
                    category="science"
                  />
                }
              ></Route>
              <Route
                exact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    // apikey={this.apikey}
                    key="sports"
                    pageSize={9}
                    country="in"
                    category="sports"
                  />
                }
              ></Route>
              <Route
                exact
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    // apikey={this.apikey}
                    key="technology"
                    pageSize={9}
                    country="in"
                    category="technology"
                  />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    // apikey={this.apikey}
                    key="health"
                    pageSize={9}
                    country="in"
                    category="health"
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </>
      </div>
    );
  }
}
