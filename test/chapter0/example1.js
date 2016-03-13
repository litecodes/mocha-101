var assert = require( 'assert' );
describe( 'String', function () {
    describe( '#length', function () {
        it( 'should return the string length.', function () {
            assert.equal( 10, '0123456789'.length );
        } );
    } );
} );