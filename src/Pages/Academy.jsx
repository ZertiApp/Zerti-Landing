import React from "react";
import School from "../assets/school.png";

export default function Academy() {
	return (
		<section className="section reverse" id="academy">
			<div className="ilustration-container">
				<img src={School} className="ilustration" alt="ilustration" />
			</div>

			<div className="content">
				<span className="overtitle">Generás talento?</span>
				<h1 className="title">Zerti for academy</h1>
				<p className="subtitle">
					Certificá a tus estudiantes •<br></br>
					Mostrá tu institución a traves de tu gente • <br></br>
					Organizá todos tus certificados •
				</p>
				<div className="actions">
					<button className="btn">Conocé más</button>
				</div>
			</div>
		</section>
	);
}
