import slugify from 'slugify';
import * as Model from '../../models/v1/beritaPostsModel.js';

export async function generateSlug(title) {
	const baseSlug = slugify(title, {
		lower: true,
		strict: true,
	});

	const existingSlugs = await Model.checkSlugAvailability(baseSlug);

	if (existingSlugs.length === 0) return baseSlug;

	const numbers = existingSlugs.map((slug) => {
		const match = slug.match(new RegExp(`^${baseSlug}-(\\d+)$`));
		return match ? parseInt(match[1], 10) : 0;
	});

	let next = 1;
	while (numbers.includes(next)) next++;

	return `${baseSlug}-${next}`;
}

export const getBeritaPosts = async (req, res) => {
	try {
		const articles = await Model.getBeritaPosts();
		if (!articles)
			return res
				.status(404)
				.json({ success: false, error: 'No Articles Found!' });

		res.json({ success: true, data: articles });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: 'Failed to fetch articles' });
	}
};

export const getRandomBeritaPosts = async (req, res) => {
	try {
		const { number, slug } = req.params;
		const articles = await Model.getRandomBeritaPosts(number, slug);
		if (!articles)
			return res
				.status(404)
				.json({ success: false, error: 'No Articles Found!' });

		res.json({ success: true, data: articles });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: 'Failed to fetch articles' });
	}
};

export const getBeritaPost = async (req, res) => {
	try {
		const { slug } = req.params;
		const article = await Model.getBeritaPost(slug);

		if (!article)
			return res
				.status(404)
				.json({ success: false, error: 'Article not found!' });

		res.json({ success: true, data: article });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: 'Failed to fetch article' });
	}
};
