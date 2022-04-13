import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import { ToastContainer, toast } from "react-toastify";
import ChanePassword from "./components/ChanePassword";
import "react-toastify/dist/ReactToastify.css";
import FoundForm from "./components/FoundForm";
import ShowFound from "./components/ShowFound";

toast.configure();

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/login" component={Login} />{" "}
        <Route exact path="/signup" component={Signup} />{" "}
        <Route exact path="/Chanepassword" component={ChanePassword} />{" "}
        <Route exact path="/showfound" component={ShowFound} />{" "}
        <Route exact path="/FoundForm" component={FoundForm} />{" "}
      </Switch>{" "}
      <ToastContainer theme="colored" autoClose="2000" />
    </>
  );
}

export default App;
