import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const server = {
  open: true,
}
// https://vitejs.dev/config/
export default defineConfig({
  server,
  plugins: [reactRefresh()]
})
