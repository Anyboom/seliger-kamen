import { defineEndpoint } from '@directus/extensions-sdk';
import { matchRoute } from "./utils/match-route";

async function extracted(service, req, res) {
	const routeService = new service('pages', {
		schema: req.schema,
		accountability: req.accountability
	});

	const path = Array.isArray(req.params.path) ? req.params.path : [req.params.path];

	try {
		const routes = await routeService.readByQuery({
			fields: ["title", "slug", "blocks.collection", "blocks.sort", "blocks.item.*.*.*.*", "description"],
		});

		const requestedPath = '/' + path.join('/');

		for (const route of routes) {
			const params = matchRoute(route.slug, requestedPath);

			if (params) {
				return res.json({
					matched: true,
					template: route.slug,
					params: params,
					...route
				});
			}
		}

		return res.json({matched: false});
	} catch (error) {
		throw error;
	}
}

export default defineEndpoint({
	id: 'resolve-route',
	handler: (router, { services }) => {
		const { ItemsService } = services;

		router.get('/:path(.*)*', async (req, res) => {
			return await extracted(ItemsService, req, res);
		});

		router.get('', async (req, res) => {
			return await extracted(ItemsService, req, res);
		});
	},
});
