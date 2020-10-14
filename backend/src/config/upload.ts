import multer from 'multer'; // instalado com: yarn add multer
import path from 'path';

export default {
	storage: multer.diskStorage({
		destination: path.join(__dirname, '..', '..', 'uploads'),
		filename: (request, file, cb) => {
		// Gerando novo nome de arquivo
		// Data + nome original da imagem
			const filename = `${Date.now()}-${file.originalname}`

			cb(null, filename);
		}
	})
};