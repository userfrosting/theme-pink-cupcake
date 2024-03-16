import FontAwesome from './plugins/font-awesome'
// import Pinia from './plugins/pinia'

/* Import CSS */
import './less/uf-theme.less'

/* Install plugins */
export default {
    install: (app) => {
        app.use(FontAwesome)
        // app.use(Pinia)
    }
}

// Export components
import BaseLayout from './layouts/Base.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import NavbarDropdown from './components/Navbar/Dropdown.vue'
import NavbarItem from './components/Navbar/Item.vue'
import NavbarLink from './components/Navbar/Link.vue'
import TheNavbar from './components/Navbar/Navbar.vue'
import TheSidebar from './components/Sidebar.vue'

export {
    BaseLayout,
    DashboardLayout,
    NavbarDropdown,
    NavbarItem,
    NavbarLink,
    TheNavbar,
    TheSidebar
}
