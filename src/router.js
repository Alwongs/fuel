import Home from './components/Home'
import KmsToLiters from './components/KmsToLiters'
import LitersToKms from './components/LitersToKms'
import VueRouter from 'vue-router'


export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/kms-to-liters',
            component: KmsToLiters
        },
        {
            path: 'liters-to-kms',
            component: LitersToKms
        },
    ]
})