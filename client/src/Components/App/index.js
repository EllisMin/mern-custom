import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header title={"Title"} />
      <Footer />
    </div>
  );
};

export default App;
