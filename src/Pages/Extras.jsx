import React from "react";
import shield from "../assets/shield.png";
import check from "../assets/check.png";
import team from "../assets/team.png";
import Tilt from "react-parallax-tilt";

export default function Extras() {
	return (
		<section className="extras" id="team">
			<Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="item">
				<img src={check} alt="" />
				<h2 className="title">Nuestro standard</h2>
				<p className="description">
					Nuestro token creado para los certificados fue validado como EIP de Ethereum.
				</p>
				<a className="more" href="https://eips.ethereum.org/EIPS/eip-5516" target="_blank">
					Conoce mas
				</a>
			</Tilt>
			<Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="item">
				<img src={shield} alt="" />
				<h2 className="title">Tus datos</h2>
				<p className="description">
					Nosotros guardamos tus datos de una forma encriptada y segura.
				</p>
				<a className="more" href="#">
					Conoce mas
				</a>
			</Tilt>
			<Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="item expand">
				<img src={team} alt="" />
				<h2 className="title">Conoce al equipo</h2>
				<p className="description">Encontra informacion sobre los founders de Zerti.</p>
				<a className="more" href="#">
					Conoce mas
				</a>
			</Tilt>
		</section>
	);
}
