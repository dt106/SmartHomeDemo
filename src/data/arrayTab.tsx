import DeviceScreen from "../components/screens/Device";
import HomeStack from "../navigations/Stack/HomeStack";
import AccountStack from "../navigations/Stack/Account/Stack";

export const arrayTab = [
    {
        route:'HomeStack',
        component: HomeStack,
        icon:'home',
        type:'entypo',
    },
    // {
    //     route:'Dashboard',
    //     component: DeviceScreen,
    //     icon:'space-dashboard',
    //     type:'material',
    // },
    {
        route:'Profile',
        component: AccountStack,
        icon:'user-secret',
        type:'font-awesome',
    },
]