import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./hoc/Layout/Layout";
// import BrewerCard from "./BrewerCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Navbar />
          Hello
        </Layout>
      </div>
    );
  }
}

export default App;
