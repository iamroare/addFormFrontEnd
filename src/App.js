import AddForm from "./component/AddForm";
import Navbar from "./component/Navbar";
import ViewForm from "./component/ViewForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
     <Navbar/>

      <Routes>
        <Route path="/addForm" element={<AddForm />} />
        <Route path="/viewForm" element={<ViewForm />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
