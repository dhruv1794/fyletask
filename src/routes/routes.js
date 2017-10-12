import login from '../components/login.vue'
import individual from '../components/individual.vue'
import mainpage from '../components/mainpage.vue'


export const routes =[
    {path:'', component:login, name:'login'},
    {path:'/individual', component:individual, name:'individual'},
    {path:'/mainpage', component:mainpage, name:'mainpage'}

];
