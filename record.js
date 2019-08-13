/**
 * 
 * 将字符串转化为函数
 * @param {string} code 函数体
 * @param {object[]} errors 错误对象集合
 * @return {function}
 */
function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err, code })
      return noop
    }
}
