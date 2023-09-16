import DeviceScreen from "../components/screens/DeviceScreen";
import Account from "../components/screens/Account";
import HomeStack from "../navigations/Stack/HomeStack";

export const arrayTab = [
    {
        route:'HomeStack',
        component: HomeStack,
        icon:'home',
        type:'entypo',
    },
    {
        route:'Dashboard',
        component: DeviceScreen,
        icon:'space-dashboard',
        type:'material',
    },
    {
        route:'Profile',
        component: Account,
        icon:'user-secret',
        type:'font-awesome',
    },
]