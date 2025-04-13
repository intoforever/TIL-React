import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // 개발 서버 포트 설정
    },
    resolve: {
        alias: {
        'styles': resolve(__dirname, 'src/styles'),
        'components': resolve(__dirname, 'src/components')
        }
    },
    css: {
        modules: {
        localsConvention: 'camelCase',
        }
    }
})