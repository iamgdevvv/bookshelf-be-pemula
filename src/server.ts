import Hapi from '@hapi/hapi';
import routes from './routes';

const init = async () => {
	const server = Hapi.server({
		port: process.env.NODE_ENV !== 'production' ? 5000 : 9000,
		host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	});

	server.route(routes);

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();