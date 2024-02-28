// rollup.config.js
import vue from '@vitejs/plugin-vue';

export default {
    plugins: [vue()],
    build: {
        rollupOptions: {
            external: ['vue', 'vue-router'],
        },
    },
};