import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Delete from './components/Delete';
import Add from './components/Add';
import Update from './components/Update';
import Insert from './components/Insert';
import {Switch,Route} from "react-router-dom"




function App() {
  return (
   <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Delete} />
      <Route exact path="/add" component={Add} />
      <Route exact path="/update/:id" component={Update} />
      <Route exact path="/insert/:id" component={Insert} />
    </Switch>
   
   </>
  );
}

export default App;






