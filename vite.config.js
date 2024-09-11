import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Add the base URL if deploying to a subdirectory (optional)
  base: './', // Adjust this according to your deployment needs
  
  // Define build options
  build: {
    outDir: 'dist', // Output directory for build files
    sourcemap: true, // Optional: Generates sourcemaps for easier debugging
    rollupOptions: {
      // Customize Rollup configuration if needed
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Splits node_modules into a separate chunk
          }
        },
      },
    },
  },
  
  // Server configuration
  server: {
    port: 3000, // Change the port if needed
    open: true, // Automatically opens the app in the browser
  },

  // Define any resolve alias (optional)
  resolve: {
    alias: {
      '@': '/src', // Example: Aliases '@' to your 'src' directory
    },
  },
})
