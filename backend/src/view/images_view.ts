import Image from '../models/Image';


// Usando da aplicação web
const urlBase = 'localhost'
// Usado na aplicação mobile
// const urlBase = '192.168.100.5'

export default {

	render (image: Image) {
		return {
			id: image.id,
			url: `http://${urlBase}:3333/uploads/${image.path}`
		};
	},

	renderMany(image: Image[]) {
		return image.map(image => this.render(image));
	}
};
