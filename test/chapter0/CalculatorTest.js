var assert     = require( 'assert' );
var Calculator = require( '../../src/chapter0/Calculator' );

// 描述 Calculator 的行为
describe( 'Calculator', function () {

    // 描述 Calculator.add 方法的行为
    describe( '#add', function () {

        // 1 + 2 = 3 的行为
        it( '1 + 2 = 3', function () {
            assert.equal( 3, Calculator.add( 1, 2 ) );
        } );

        // 2 - 1 = 1 的行为
        it( '2 - 1 = 1', function () {
            assert.equal( 1, Calculator.minus( 2, 1 ) );
        } );

        // "1" + "2" = 3 的行为
        it( '"1" + "2" = 3', function () {
            assert.equal( 3, Calculator.add( '1', '2' ) );
        } );

        // "2" - "1" = 1 的行为
        it( '"2" - "1" = 1', function () {
            assert.equal( 1, Calculator.minus( '2', '1' ) );
        } );
    } );
} );