const {override, fixBabelImports, addLessLoader} = require('customize-cra')


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                //base
                '@primary-color': '#6D9683',
                //header
                '@layout-header-background': '#6D9683',
                '@menu-dark-item-active-bg': '#fff',
                '@menu-dark-highlight-color': 'rgba(0,0,0,0.8)',
                //footer
                '@layout-footer-background': 'rgba(109,150,131,0.5)',
                '@layout-footer-padding': '70px 50px',
            },
        },
    })
)