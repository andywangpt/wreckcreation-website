import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import NavBar from "./Components/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
			<header className="App-header">hello</header>
		</div>
	);
}

export default App;
