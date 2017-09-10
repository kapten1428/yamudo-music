module.exports = {
    plugins : {
        'postcss-import':{},
        'postcss-apply':{},
        'postcss-nested':{},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%']
        }
    }
}