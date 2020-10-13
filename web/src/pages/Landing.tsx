import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // 🎯 instalado com: yarn add react-icons

import { Link } from 'react-router-dom'; //🎯 instalado com: yarn add react-router-dom 

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing () {
	return (
		<div id="page-landing">
			<div className="content-wrapper">
				<img src={logoImg} alt="Happy"/>

				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças</p>
				</main>

				<div className="location">
					<strong>São Luís</strong>
					<span>Maranhão</span>
				</div>

				{/* Link: SPA (Single Page Application, so carrega aquilo que for necessário) */}
				<Link to="/app" className="enter-app">
					<FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
				</Link>
			</div>
		</div>
	);
}

export default Landing;