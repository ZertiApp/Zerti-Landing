import React from "react";
import { ReactComponent as Office } from "../assets/office.svg";

export default function Enterprise() {
	return (
		<section className="section" id="enterprise">
			<div className="content">
				<span className="overtitle">Necesitás talento?</span>
				<h1 className="title">Zerti for enterprise</h1>
				<p className="subtitle">
					• Encontrá perfiles verificados y validados<br></br>
					• Procesos de filtrado y screening integrados <br></br>
					• Emisión de certificados
				</p>
				<div className="actions">
					<button className="btn">Conocé más</button>
				</div>
			</div>

			<div className="ilustration-container">
				<Office className="ilustration" />
			</div>
		</section>
	);
}
