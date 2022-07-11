import { BottomNavs } from "../interfaces/navs";

export const BOTTOM_NAVS: BottomNavs[] = [
    {
        path: '/user/dashboard',
        icon: 'ion-android-home',
        label: 'Dashboard',
        order: 1
    },
    // {
    //     path: '/user/task',
    //     icon: 'ion-android-hand',
    //     label: 'Task',
    //     order: 2
    // },
    {
        path: '/user/games',
        icon: 'ion-grid',
        label: 'Games',
        order: 3
    },
    {
        path: '/user/account',
        icon: 'ion-android-person',
        label: 'Account',
        order: 4
    }
]