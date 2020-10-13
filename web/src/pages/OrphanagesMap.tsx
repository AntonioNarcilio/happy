import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet'; //🎯 instalado com: yarn add leaflet react-leaflet

// EStilização padrão do leaflet
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Happy"/>

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>São Luís</strong>
					<span>Maranhão</span>
				</footer>
			</aside>

			<Map
				// Passando latitude e longitude
				center={[-2.5660537,-44.3253071]}

				zoom={15}
				style={{ width: '100%', height: '100%'}}
			>
				{/* 🎯 TileLayer: Servidor de images do mapa 
						🎯 env: variável ambiente
						REACT_APP_MAPBOX_TOKEN definido dentro de .env
				*/}
				<TileLayer 
					url={
					`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
					}
				/>
			</Map>

			<Link to="" className="create-orphanage">
				<FiPlus size={32} color="#fff" />
			</Link>
		</div>
	);
}

export default OrphanagesMap;