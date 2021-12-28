import React from 'react';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Empty from './pages/Empty';

import "./css/App.css";
import "./css/Utilities.css";
import "./css/About.css";
import "./css/Header.css";
import "./css/Footer.css";

function App() {
	return (
		<Router>
			<Header/>
			<Routes>
				<Route path="/about" element={<About/>}/>
				<Route path="*" element={<Empty/>}/>
			</Routes>
			<Footer/>
		</Router>
	);
}

export default App;
