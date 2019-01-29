const viewports = require('./viewports.js');
const buildScenarios = require('./scenarios.js');
const { baselineDirectory, comparisonDirectory } = require('./utils');

module.exports = {
    'id': 'backstop_default',
    viewports,
    'onBeforeScript': '',
    'onReadyScript': '',
    'cookiePath': 'backstop_data/engine_scripts/cookies.json',
    'selectors': [
        'document'
    ],
    buildScenarios,
    'paths': {
        'bitmaps_reference': baselineDirectory,
        'bitmaps_test': comparisonDirectory,
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
