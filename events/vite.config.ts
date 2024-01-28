import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.endsWith('.test.ts') || id.endsWith('.test.tsx')) {
						return 'tests';
					}
				},
				entryFileNames(chunkInfo) {
					if (chunkInfo.name === 'tests') {
						return 'tests.js';
					}
					return '[name].js';
				},
			},
		},
	},
});
