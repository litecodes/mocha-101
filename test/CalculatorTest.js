var assert     = require('assert');
var Calculator = require('../src/Calculator');

describe('Calculator', function() {

    describe('#add', function() {

        it('1 add 2 should return 3', function() {
            assert.equal(3, Calculator.add(1, 2));
        });
    });
});
