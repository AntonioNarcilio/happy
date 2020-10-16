import { Request, Response } from 'express'
// getRepository: Detém a regra de quem pode armazenar dados, de como eles serão armazenados ...   
import { getRepository } from 'typeorm';
import orphanageView from '../view/orphanages_view';

// 🎯 modulo de validação
import * as Yup from 'yup' // yar add yup


// Classe no models relacionada a migrations criada
import Orphanage from '../models/Orphanage';

export default {
	// 🎯 Listando orfanatos
	async index(req: Request, resp: Response) {
		const orphanagesRepository = getRepository(Orphanage);

		const orphanages = await orphanagesRepository.find({
			relations: ['images']
		});

		return resp.json(orphanageView.renderMany(orphanages));
	},


	// 🎯 Mostrar detalhes do orfanato
	async show(req: Request, resp: Response) {
		const { id } = req.params;

		const orphanagesRepository = getRepository(Orphanage);

		const orphanage = await orphanagesRepository.findOneOrFail(id, {
			relations: ['images']
		}); //findOneOrFail - Tentara encontrar, caso nao encontre retorna um erro

		return resp.json(orphanageView.render(orphanage));
	},


	// 🎯 Criando orfanatos
	async create(req: Request, resp: Response) {
		// Desestruturando request.body
		const {
			name,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends
		} = req.body


		const orphanagesRepository = getRepository(Orphanage);

		const requestImages = req.files as Express.Multer.File[];

		const images = requestImages.map(image => {
			return { path: image.filename }
		})

		const data = {
			name,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends: open_on_weekends === 'true',
			images
		};

		const schema = Yup.object().shape({
			name: Yup.string().required(),
			latitude: Yup.number().required(),
			longitude: Yup.number().required(),
			about: Yup.string().required().max(300),
			instructions: Yup.string().required(),
			opening_hours: Yup.string().required(),
			open_on_weekends: Yup.boolean().required(),
			images: Yup.array(
				Yup.object().shape({
					path: Yup.string().required()
				})
			).required()
		});



		// Fazendo a validação dos dados
		await schema.validate(data, {
			// Se um campo não for valido retorne o erro
			// abortEarly: false -> retorna todos os campos que não forem validos
			abortEarly: false
		})

		// Criando novo orfanato
		const orphanage = orphanagesRepository.create(data);
		// Armazenando dados criado no banco
		await orphanagesRepository.save(orphanage);

		return resp.status(201).json({orphanage});
	}
}