import React, { useEffect, useState } from "react";
import { ReactComponent as HandShake } from "../assets/mockup.svg";
import Spline from "@splinetool/react-spline";

export default function Objetivo() {
	const [spline, setSpline] = React.useState(null);
	useEffect(() => {
		let i = setInterval(() => {
			if (spline?._resizeObserver) {
				spline._resizeObserver.disconnect();
				clearInterval(i);
			}
		}, 100);

		return () => {
			clearInterval(i);
		};
	}, []);
	return (
		<section className="section objetivo" id="objetivo">
			<div className="content">
				<span className="overtitle">Que hacemos?</span>
				<h1 className="title">Nuestro objetivo</h1>
				<p className="subtitle">
					Nuestro objetivo es asegurar la validez y confianza de las certificaciones, aptitudes y
					títulos emitidos por las instituciones académicas, organizaciones y empresas; otorgandole
					a nuestros usuarios un perfil verificable, confiable y transparente.
				</p>
				<div className="actions">
					<a href="#people" className="btn primary">
						Asegurá tu perfil
					</a>
					<a href="#enterprise" className="btn">
						Encontrá talento
					</a>
				</div>
			</div>

			<div className="ilustration-container mockup">
				<div className="handshake-container">
					{/* <HandShake className="ilustration" /> */}
					<Spline
						onLoad={(spline) => {
							setSpline(spline);
						}}
						className="mockup"
						scene="https://prod.spline.design/zaMdwNe44ARj3t4P/scene.splinecode"
					/>
				</div>
			</div>
		</section>
	);
}
