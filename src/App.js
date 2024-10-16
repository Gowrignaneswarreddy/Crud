import React from "react";
import GetUsers from "./GetUsers"
// import ReactDOM from 'react-dom/client';
import  AddUser from "./page/add"
import Update from "./page/updateuser";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App=()=>{
    return(
        <div>
            <BrowserRouter>
        <Routes>
            <Route path='/' element={<GetUsers/>}></Route>  
            <Route path='/add' element={< AddUser/>}></Route>
            <Route path='/edit/:id' element={<Update />}></Route>
        </Routes>
       </BrowserRouter>
        </div>
    )
}
export default App