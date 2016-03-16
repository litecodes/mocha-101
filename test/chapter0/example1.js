// 引入 assert 断言库
var assert = require( 'assert' );

// 定义对 String 类的测试
describe( 'String', function () {

    // 定义对 String.length 方法的测试
    describe( '#length', function () {

        // 定义测试行为
        it( 'should return the string length.', function () {
            assert.equal( 10, '0123456789'.length );
        } );
    } );
} );