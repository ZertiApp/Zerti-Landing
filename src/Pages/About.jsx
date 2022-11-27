import React from "react";
import { ReactComponent as RaisingHand } from "../assets/raising_hand.svg";

export default function About() {
	return (
		<section className="section reverse" id="about">
			<div className="ilustration-container people">
				<RaisingHand className="ilustration" />
			</div>

			<div className="content">
                <span className="overtitle"></span>
				<h1 className="title">¿Qué es Zerti?</h1>
				<p className="subtitle">
				Nuestro objetivo es asegurar la validez y confianza de las certificaciones, aptitudes y títulos emitidos por las instituciones académicas, organizaciones y empresas; otorgandole a nuestros usuarios un perfil verificable, confiable y transparente.<br></br>
		
				</p>
				{/* <div className="actions">
					<button className="btn">Conocé más</button>
				</div> */}
			</div>
		</section>
	);
}
