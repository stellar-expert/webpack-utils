module.exports = {
    webpackExcludeNodeModulesExcept(dependentModules) {
        if (!(dependentModules instanceof Array)) {
            dependentModules = [dependentModules]
        }
        const excludedModules = dependentModules.map(name => name.replace(/\\/, '\\')).join('|')
        return [
            new RegExp(`node_modules\\/(?!(${excludedModules})\\/).*`),
            new RegExp(`node_modules\\/(${excludedModules})\\/node_modules\\/.*`)
        ]
    }
}