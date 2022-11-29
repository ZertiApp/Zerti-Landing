import React from "react";
/* import { ReactComponent as HandShake } from "../assets/handshake.svg"; */
import floatingBusiness from "../assets/floating-business.png";

export default function Intro() {
	return (
		<section className="section intro" id="about">
			<div className="content">
				<h1 className="title">La seguridad de tu carrera profesional</h1>
				<p className="subtitle">Unite a la nueva plataforma profesional descentralizada</p>
				<div className="actions">
					<a href="#objetivo" className="btn primary">
						Conocé más
					</a>
				</div>
			</div>

			<div className="ilustration-container business">
				<img src={floatingBusiness} alt="ilustration" className="business floating" />
			</div>
		</section>
	);
}
