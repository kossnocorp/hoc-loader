const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const {
    path,
    useDefault,
    exportVar = 'module.exports'
  } = loaderUtils.parseQuery(this.query)

  return `
${source}
var hoc = require('${path}')${useDefault && '.default'}
${exportVar} = hoc(${exportVar})
`
}
