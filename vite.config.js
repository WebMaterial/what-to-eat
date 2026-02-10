import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages のプロジェクトページ公開:
// 公開URLが https://<USER>.github.io/what-to-eat/ の場合、
// base は '/what-to-eat/' に設定する
export default defineConfig({
	plugins: [react()],
	base: '/what-to-eat/',
})

