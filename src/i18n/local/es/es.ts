import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

export default {
    components: {
        navbar: NavBar,
    },
    pages: {
      home: Home,
      about: About,
      skills: Skills

    }

} as const;