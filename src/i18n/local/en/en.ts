import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default {
    components: {
        navbar: NavBar,
    },
    pages: {
        home: Home,
        about: About,
        skills: Skills,
        projects: Projects,
        contact: Contact
    }
} as const;