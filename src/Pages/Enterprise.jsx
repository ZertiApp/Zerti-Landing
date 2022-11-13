import React from "react";
import { ReactComponent as Office } from "../assets/office.svg";

export default function Enterprise() {
	return (
		<section className="section" id="enterprise">
			<div className="content">
				<span className="overtitle">Necesitas talento?</span>
				<h1 className="title">Zerti for enterprise</h1>
				<p className="subtitle">
					• Encontra perfiles verificados y validados<br></br>
					• Procesos de filtrado y screening integrados <br></br>
					• Emision de certificados
				</p>
				<div className="actions">
					<button className="btn">Conoce mas</button>
				</div>
			</div>

			<div className="ilustration-container">
				<Office className="ilustration" />
			</div>
		</section>
	);
}
