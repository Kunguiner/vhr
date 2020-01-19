module.exports = {
    devServer: {
        host: 'localhost',
        port: 9999,
        proxy: {
            '/vhr': {
                // 转发到的地址
                target: 'http://localhost',
                ws: true,
                changeOrigin: true,
                // 以什么开头的路径会被转发到 target
                pathRewrite: {
                    '^/vhr': ''
                }
            }
        }
    },

}