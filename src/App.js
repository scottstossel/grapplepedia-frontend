import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AddPositionView from "./views/AddPositionView";
import AddTechniqueView from "./views/AddTechniqueView";
import EditPositionView from "./views/EditPositionView";
import EditTechniqueView from "./views/EditTechniqueView";
import HomeView from "./views/HomeView";

// import of view components
import PositionsView from "./views/PositionsView";
import SinglePositionView from "./views/SinglePositionView";
import SingleTechniqueView from "./views/SingleTechniqueView";
import TechniquesView from "./views/TechniquesView";
import LoginView from "./views/LoginView";
import AdminRoute from "./components/AdminRoute";
import EditTechniquesView from "./views/EditTechniquesView";
import EditPositionsView from "./views/EditPositionsView";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route exact path="/positions" component={PositionsView}/>
        <Route exact path="/techniques" component={TechniquesView}/>
        <Route exact path="/techniques/:id" component={SingleTechniqueView}/>
        <Route exact path="/positions/:id" component={SinglePositionView}/>
        <Route exact path="/addposition" component={AddPositionView} />
        <Route exact path="/addtechnique" component={AddTechniqueView} />
        <AdminRoute exact path="/editpositions/:id" component={EditPositionView}/>
        <AdminRoute exact path="/editpositions" component={EditPositionsView}/>
        <AdminRoute exact path="/edittechniques/:id" component={EditTechniqueView}/>
        <AdminRoute exact path="/edittechniques" component={EditTechniquesView}/>
        <Route exact path="/login" component={LoginView}/>
      </Switch>
    </BrowserRouter>

  ) 
}

export default App;
