const buildScenarios = () => {
    const paths = [
        'search',
        'maps',
        'news',
        'images',
        'videos',
    ];
	let scenarios = [];
    scenarios = paths.map((path) => {
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

module.exports = {
    'id': 'backstop_default',
    'viewports': [
        {
            'label': 'iPhone X',
            'width': 1125,
            'height': 2436,
        },
        {
            'label': 'iPhone 6 Plus/iPhone 6S Plus/iPhone 7 Plus/iPhone 8 Plus',
            'width': 1080,
            'height': 1920,
        },
        {
            'label': 'iPhone 6/iPhone 6S/iPhone 7/iPhone 8',
            'width': 750,
            'height': 1334,
        },
        {
            'label': 'iPhone 5',
            'width': 640,
            'height': 1136,
        },
        {
            'label': 'iPad Pro',
            'width': 2048,
            'height': 2732,
        },
        {
            'label': 'iPad Air 1 & 2/iPad Third & Fourth Generation/iPad Mini 2 & 3',
            'width': 1536,
            'height': 2048,
        },
        {
            'label': 'iPad Mini',
            'width': 768,
            'height': 1024,
        },
        {
            'label': '320x8000',
            'width': 320,
            'height': 8000,
        },
        {
            'label': '600x8000',
            'width': 600,
            'height': 8000,
        },
        {
            'label': '720x8000',
            'width': 720,
            'height': 8000,
        },
        {
            'label': '768x8000',
            'width': 768,
            'height': 8000,
        },
        {
            'label': '1024x8000',
            'width': 1024,
            'height': 8000,
        },
        {
            'label': '1080x8000',
            'width': 1080,
            'height': 8000,
        },
        {
            'label': '1136x640',
            'width': 640,
            'height': 1136,
        },
        {
            'label': '1280x800',
            'width': 800,
            'height': 1280,
        },
        {
            'label': '1366x768',
            'width': 768,
            'height': 1366,
        },
        {
            'label': '1440x900',
            'width': 900,
            'height': 1440,
        },
        {
            'label': '1440x2560',
            'width': 1440,
            'height': 2560,
        },
        {
            'label': '1920x1080',
            'width': 1080,
            'height': 1920,
        },
        {
            'label': '2304x1440',
            'width': 1440,
            'height': 2304,
        },
        {
            'label': '2880x5120',
            'width': 2880,
            'height': 5120,
        },
    ],
    'onBeforeScript': '',
    'onReadyScript': '',
    'cookiePath': 'backstop_data/engine_scripts/cookies.json',
    'selectors': [
        'document'
    ],
    'scenarios': buildScenarios(),
    'paths': {
        'bitmaps_reference': 'backstop_data/bitmaps_reference',
        'bitmaps_test': 'backstop_data/bitmaps_test',
        'engine_scripts': 'backstop_data/engine_scripts',
        'html_report': 'backstop_data/html_report',
        'ci_report': 'backstop_data/ci_report',
    },
    'report': ['browser', 'CI'],
    'engine': 'puppeteer',
    'engineFlags': [],
    'asyncCaptureLimit': 5,
    'asyncCompareLimit': 50,
    'debug': false,
    'debugWindow': false,
};