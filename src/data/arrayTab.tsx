import DeviceScreen from "../components/screens/DeviceScreen";
import Main from "../components/screens/Main";
import MainTemplate from "../components/template/MainTemplate";
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
        component: Main,
        icon:'user-secret',
        type:'font-awesome',
    },
]