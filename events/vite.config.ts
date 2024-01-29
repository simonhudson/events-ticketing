import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const filesNeedToExclude = ['*/**/.test.ts', '*/**/.test.tsx'];

const filesPathToExclude = filesNeedToExclude.map((src) => {
	return fileURLToPath(new URL(src, import.meta.url));
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		manifest: true,
		rollupOptions: {
			external: [...filesPathToExclude],
		},
	},
});
