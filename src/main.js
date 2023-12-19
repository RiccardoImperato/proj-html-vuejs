import { createApp } from 'vue'
import '../src/assets/scss/style.scss'
import App from './App.vue'
/* Font Open sans */
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css"; // Bold
import "@fontsource/open-sans/800.css"; // Bolder
/* import fontawesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faGauge } from '@fortawesome/free-solid-svg-icons'



library.add(faClock, faPhone, faEnvelope, faFacebook, faTwitter, faLinkedin, faUserGroup, faChartPie, faGauge)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
