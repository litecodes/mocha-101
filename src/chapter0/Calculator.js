/**
 * 定义 Calculator 工具类, 用于数字计算
 * @constructor
 */
function Calculator() {
}

/**
 * 计算 a + b 结果
 * @param a 被加数
 * @param b 加数
 * @returns {number}
 */
Calculator.add = function ( a, b ) {
    return parseInt( a ) + parseInt( b );
};

/**
 * 计算 a - b 结果
 * @param a 被减数
 * @param b 减数
 * @returns {number}
 */
Calculator.minus = function ( a, b ) {
    return parseInt( a ) - parseInt( b );
};

// Export the calculator class.
module.exports = Calculator;
