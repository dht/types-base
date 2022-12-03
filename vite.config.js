import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const ANALYZE_BUNDLE = false;

export default defineConfig({
    plugins: [dts({})],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'TypesBase',
            formats: ['es', 'umd'],
            fileName: (format) => `types-base.${format}.js`,
        },
        rollupOptions: {},
    },
});
