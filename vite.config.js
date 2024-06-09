import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig(
    {
        build: {
            outDir: 'dist',
            target: ['es2015', 'chrome58'],
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    tailwind: resolve(__dirname, 'pages/tailwind.html')
                }
            }
        }
    }
);