// import _ from 'lodash';

import vue from 'vue'
import App from '@/Index.vue'

import '../public/main.css'

new vue({
    el: '#app',
    render: h=> h(App)
})