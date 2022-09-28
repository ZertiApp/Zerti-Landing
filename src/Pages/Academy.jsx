import React from "react";
import School from "../assets/school.png";

export default function Academy() {
	return (
		<section className="section reverse" id="academy">
			<div className="ilustration-container">
				<img src={School} className="ilustration" />
			</div>

			<div className="content">
				<span className="overtitle">Generas talento?</span>
				<h1 className="title">Zerti for academy</h1>
				<p className="subtitle">
					Certifica a tus estudiantes.<br></br>
					Mostra tu institucion a traves de tu gente. <br></br>
					Organiza todos tus certificados.
				</p>
				<div className="actions">
					<button className="btn">Conoce mas</button>
				</div>
			</div>
		</section>
	);
}
