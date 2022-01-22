import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Landing from "./Components/Landing/Landing";
import UserDetails from "./Components/UserDetails/UserDetails";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Landing} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/userdetails/:id" component={UserDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
