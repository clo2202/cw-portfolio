import React from "react";
import { Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, SkillsList, Contact } from "./pages";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={SkillsList} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
