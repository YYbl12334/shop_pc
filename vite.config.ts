import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    server: {
        host: '0.0.0.0', //解决控制台 ：Network: use --host to expose 提示
        port: 8080, //配置项目端口号
        hmr: true, //开启热更新，代码更新后保存即可更新于界面
        open: true //启动在浏览器打开，重新输入启动指令，浏览器自动打开项目首页
    },
    // vite别名
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src')

            }
        ]
    }
})
