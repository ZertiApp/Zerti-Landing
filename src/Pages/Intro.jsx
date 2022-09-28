import React from "react";
import { ReactComponent as HandShake } from "../assets/handshake.svg";

export default function Intro() {

	const changeTheme = () => {
		document.documentElement.classList.toggle("dark");
	};

	return (
		<section className="section intro" id="about">
			<div className="content">
				<h1 className="title">La Seguridad de tu carrera profesional</h1>
				<p className="subtitle">Unite a la nueva plataforma profesional desentralizada</p>
				<div className="actions">
					<a href="#people" className="btn primary">Asegura tu perfil</a>
					<a href="#enterprise" className="btn">Encontra talento</a>
				</div>
			</div>

			<div className="ilustration-container handshake">
				<div className="handshake-container" onClick={changeTheme}>
					<HandShake className="ilustration" />
				</div>
			</div>
		</section>
	);
}
