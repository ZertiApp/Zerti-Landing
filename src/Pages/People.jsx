import React from "react";
import { ReactComponent as RaisingHand } from "../assets/raising_hand.svg";

export default function People() {
	return (
		<section className="section reverse" id="people">
			<div className="ilustration-container people">
				<RaisingHand className="ilustration" />
			</div>

			<div className="content">
                <span className="overtitle">Tenes talento?</span>
				<h1 className="title">Zerti for people</h1>
				<p className="subtitle">
					Asegura tu perfil con la tecnologia blockchain.<br></br>
					Mostra tu perfil profesional seguro al mundo. <br></br>
					Descentraliza tu carrera.
				</p>
				<div className="actions">
					<button className="btn">Conoce mas</button>
				</div>
			</div>
		</section>
	);
}
