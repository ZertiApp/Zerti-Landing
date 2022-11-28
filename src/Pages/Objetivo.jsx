import React from "react";
import { ReactComponent as HandShake } from "../assets/handshake.svg";

export default function Objetivo() {
	return (
		<section className="section objetivo reverse" id="objetivo">
			<div className="ilustration-container handshake floating">
				<div className="handshake-container">
					<HandShake className="ilustration" />
				</div>
			</div>

			<div className="content">
				<span className="overtitle">Que hacemos?</span>
				<h1 className="title">Nuestro objetivo</h1>
				<p className="subtitle">
					Nuestro objetivo es asegurar la validez y confianza de las certificaciones, aptitudes y
					títulos emitidos por las instituciones académicas, organizaciones y empresas; otorgandole
					a nuestros usuarios un perfil verificable, confiable y transparente.
				</p>
				{/* <div className="actions">
					<button className="btn">Conocé más</button>
				</div> */}
			</div>
		</section>
	);
}
