import { defineEndpoint } from '@directus/extensions-sdk';
import { matchRoute } from "./utils/match-route";

async function extracted(service: any, req: any, res: any) {
	const routeService = new service('pages', {
		schema: req.schema,
		accountability: req.accountability
	});

	const path = Array.isArray(req.params.path) ? req.params.path : [req.params.path];

	try {
		const routes = await routeService.readByQuery({
			fields: ["id", "slug"],
		});

		const requestedPath = '/' + path.join('/');

		for (const route of routes) {
			const params = matchRoute(route.slug, requestedPath);

			if (params) {
				const page = await routeService.readOne(route.id, {
					fields: ["title", "slug", "blocks.collection", "blocks.sort", "blocks.item.*.*.*.*", "description"],
				})

				return res.json({
					matched: true,
					template: page.slug,
					params: params,
					...page
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
