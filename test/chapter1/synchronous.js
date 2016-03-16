var should     = require( 'should' );
var Calculator = require( '../../src/chapter0/Calculator' );


// 描述 Calculator 的行为
describe( 'Calculator', function () {

    // 描述 Calculator.add 方法的行为
    describe( '#add', function () {

        // 1 + 2 = 3 的行为
        it( '1 + 2 = 3', function () {
            Calculator.add( 1, 2 ).should.equal( 3 );
        } );

        // 2 - 1 = 1 的行为
        it( '2 - 1 = 1', function () {
            Calculator.minus( 2, 1 ).should.equal( 1 );
        } );
    } );
} );