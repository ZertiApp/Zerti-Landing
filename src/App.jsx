import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Academy from "./Pages/Academy";
import Enterprise from "./Pages/Enterprise";
import Intro from "./Pages/Intro";
import People from "./Pages/People";
import Extras from './Pages/Extras';
import Footer from "./Components/Footer";

function App() {
	useEffect(() => {
		document.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", e => onLinkClick(e, link));
		});
		return () => {
			document.querySelectorAll("a").forEach((link) => {
				link.removeEventListener("click", e => onLinkClick(e, link));
			});
		};
	}, []);

	const onLinkClick = (e, link) => {
		e.preventDefault();
		if (link.getAttribute("href").startsWith("#")) {
			document.getElementById(link.getAttribute("href").replace("#", "")).scrollIntoView({
				behavior: "smooth",
			});
		} else {
			window.open(link.getAttribute("href"), "_blank");
		}
	};

	return (
		<div>
			<Navbar />
			<Intro />
			<People />
			<Enterprise />
			<Academy />
			<Extras />
			<Footer />
		</div>
	);
}

export default App;
