
import "./styles/App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import {InvoicesTable} from "./pages/domin/linaTable";
import {BuyDomin} from "./pages/domin/buyDomin";
import { Route } from 'react-router-dom';



function App() {
  

  
  return (
  
       <BrowserRouter>
       <Routes>
          <Route exact path="/admin" element={<BuyDomin />} />
          <Route path="/domain-table" element={<InvoicesTable />}  />
       </Routes>
         
          {/* <Route path="/contact" component={Contact} /> */}
       </BrowserRouter>
        
       
        
  
  );
}

export default App;
