const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const {
    path,
    useDefault,
    exportVar = 'module.exports'
  } = loaderUtils.getOptions(this) || {}

  return `
${source}
var hoc = require('${path}')${useDefault && '.default'}
${exportVar} = hoc(${exportVar})
`
}
