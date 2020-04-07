import React from "react";
import { Header } from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Skills, Contact } from "./pages";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
