const assert = require('assert');
const chalk = require('chalk');
const re = require('./index');


describe(chalk.green('Checking for positive cases....'), () => {
    const tests = [
        'abbcdfa',
        'cdfabmdka',
        'aba',
        'abca',
        'abida',
        'eaaaabijkjfna',
    ];

    const exp = '.*ab.*a';
    const tester = new re.regex(exp);

    for(const testCase of tests) {
        it(`should match testcase ${testCase}`, () => {
            assert(tester.test(testCase), `testcase ${testCase} did not match ${exp}`);
        });
    }
});

describe(chalk.green('Checking for negative cases....'), () => {
    const tests = [
        'abbcdf',
        'cdfabmdk',
        'krtmaaia',
        'abzkrt',
    ];

    const exp = '.*ab.*a';
    const tester = new re.regex(exp);


    for(const testCase of tests) {
        it(`should not match testcase ${testCase}`, () => {
            assert(!tester.test(testCase), `testcase ${testCase} matched ${exp}`);
        });
    }
});
