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
            name: 'kmsToLiters',
            component: KmsToLiters
        },
        {
            path: '/liters-to-kms',
            name: 'litersToKms',
            component: LitersToKms
        },
    ]
})