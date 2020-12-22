import { useState, useEffect } from 'react';

import { easyImages, mediumImages, hardImages } from '../constants/images';

export function useRandomImage(level) {
	const [gameImages, setGameImages] = useState([]);

	function getRandomIndex(array) {
		return Math.floor(Math.random() * array.length);
	}

	function getGameImages(images) {
		let nextImage = null;
		let resultImages = [];
		while (resultImages.length < 5) {
			nextImage = images[getRandomIndex(images)];
			if (!resultImages.find(image => image.id === nextImage.id)) {
				resultImages.push(nextImage);
			}
		}
		return resultImages;
	}
	
	useEffect(() => {
		const imagesToPick = level === 'easy' ? easyImages : (level === 'medium' ? mediumImages : hardImages);
		const gameImages = getGameImages(imagesToPick);
		setGameImages(gameImages);
	}, [level]);

	return gameImages;
}
