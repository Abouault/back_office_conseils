import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/About";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import "./Routes.scss";

const Routes: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <div>
            <Navbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/" component={Users} />
              <Route exact path="/about" component={About} />
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
