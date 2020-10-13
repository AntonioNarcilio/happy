import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes () {
	return (
		<BrowserRouter>
			<Switch> {/* 🎯 Switch: Faz com que apenas uma rotas seja chamada por vez */}
				<Route path="/" exact component={Landing} /> {/* 🎯 Exact: So chama o "arquivo" quando a rota for exata */}
				<Route path="/app" component={OrphanagesMap} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;