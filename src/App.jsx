import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="pages">
				<Routes>
					<Route path="/" element={<HomePage companies={companies} />} />
					<Route
						path="/company/:companySlug"
						element={<CompanyPage companies={companies} />}
					/>
					<Route
						path="/tech/:slug"
						element={<TechnologyPage technologies={technologies} />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
