import * as Model from '../../models/v1/miscImagesModel.js';

// READ
export const getAllCarouselImages = async (req, res) => {
	try {
		const carouselImages = await Model.getAllCarouselImages();
		res.json({ success: true, data: carouselImages });
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ success: false, error: 'Failed to fetch carousel images' });
	}
};
