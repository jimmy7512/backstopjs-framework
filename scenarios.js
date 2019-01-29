const urls = require('./urls');

module.exports = () => {
	let scenarios = [];
    scenarios = urls.map(path => {
		const referenceUrl = `${process.env.REF || 'https://www.google.com'}/${path}`;
		const testUrl = `${process.env.TEST || 'https://www.yahoo.com'}/${path}`;
        return {
            'label': path,
            'referenceUrl': referenceUrl,
            'url': testUrl,
            'readyEvent': '',
            'readySelector': '',
            'delay': 0,
            'hideSelectors': [],
            'removeSelectors': [],
            'hoverSelector': '',
            'clickSelector': '',
            'postInteractionWait': 0,
            'selectors': [],
            'selectorExpansion': true,
            'misMatchThreshold': 0.2,
            'requireSameDimensions': true,
        };
    });
	return scenarios;
};
