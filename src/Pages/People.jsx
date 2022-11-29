import React from "react";
import { ReactComponent as RaisingHand } from "../assets/raising_hand.svg";

export default function People() {
	return (
		<section className="section reverse" id="people">
			<div className="ilustration-container people">
				<RaisingHand className="ilustration" />
			</div>

			<div className="content">
                <span className="overtitle">Tenés talento?</span>
				<h1 className="title">Zerti for people</h1>
				<p className="subtitle">
					Asegurá tu perfil en la blockchain •<br></br>
					Mostrá tu perfil profesional seguro al mundo • <br></br>
					Descentralizá tu carrera •
				</p>
				{/* <div className="actions">
					<button className="btn">Conocé más</button>
				</div> */}
			</div>
		</section>
	);
}
