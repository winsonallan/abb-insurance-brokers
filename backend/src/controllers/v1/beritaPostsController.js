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
