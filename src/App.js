import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from "./pages/main-page";
// import "./App.scss"

const App = () =>{
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
	);
	}
	export default App;