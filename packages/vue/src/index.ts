import Vue from 'vue';
import { PrismEditor } from 'vue-prism-editor';
import Highlight from './Highlight.vue';
import 'vue-prism-editor/dist/prismeditor.min.css';

Vue.component('PrismEditor', PrismEditor);

export { Highlight };
