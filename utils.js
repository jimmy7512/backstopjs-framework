const fileSystem = require('fs');

const baselineDirectory = './target/baseline_images';
const comparisonDirectory = './target/comparison_images';

const createImageDirectories = async () => {
	const baselineDirectoryDoesNotExist = !fileSystem.existsSync(baselineDirectory);
	const comparisonDirectoryDoesNotExist = !fileSystem.existsSync(comparisonDirectory);
	if (baselineDirectoryDoesNotExist) {
		fileSystem.mkdirSync(baselineDirectory);
	}	
	if (comparisonDirectoryDoesNotExist) {
		fileSystem.mkdirSync(comparisonDirectory);
	}
};

module.exports = {
	baselineDirectory,
	comparisonDirectory,
	createImageDirectories,
};
