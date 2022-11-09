import React from "react";
import shield from "../assets/shield.png";
import check from "../assets/check.png";
import team from "../assets/team.png";
import paper from "../assets/paper.png";
import recycle from "../assets/recycle.png";
import Tilt from "react-parallax-tilt";

export default function Extras() {
	return (
		<section className="extras" id="team">
			<Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="item">
				<img src={check} alt="" />
				<h2 className="title">Nuestro standard</h2>
				<p className="description">
					Nuestro token creado para los certificados, el ERC5516, fue validado como EIP de Ethereum.
				</p>
				<a className="more" href="https://eips.ethereum.org/EIPS/eip-5516" target="_blank">
					Conoce más
				</a>
			</Tilt>
			{/* <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="item">
				<img src={shield} alt="" />
				<h2 className="title">Tus datos</h2>
				<p className="description">
					Nosotros guardamos tus datos de una forma encriptada y segura.
				</p>
				<a className="more" href="#">
					Conoce más
				</a>
			</Tilt> */}
			{/* <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="item ">
				<img src={recycle} alt="" />
				<h2 className="title">Reducimos la huella de carbono</h2>
				<p className="description">Emitir un Zert a 100 personas emite 80,88 veces menos CO2 que emitir 100 certificados en papel</p>
				<a className="more" href="https://github.com/ZertiApp/CO2eq-Emittions">
					Fuente
				</a>
			</Tilt> */}
			<Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} className="item">
				<img src={paper} alt="" />
				<h2 className="title">Lee nuestro whitepaper</h2>
				<p className="description">Encontra mas información sobre el proyecto.</p>
				<a className="more" href="/Zerti-Whitepaper.pdf">
					Descargalo acá
				</a>
			</Tilt>
			
		</section>
	);
}
