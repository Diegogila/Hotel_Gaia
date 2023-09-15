import Header from "../templates/Header.js";
import Footer from "../templates/Footer.js";
import Home from "../pages/Home.js";
import Login from "../pages/Login.js";
import Intranet from "../pages/Intranet.js";
import Rooms from "../pages/Rooms.js";
import Drinks from "../pages/Drinks.js";
import Error404 from "../pages/Error404.js";
import getHash from "../utils/getHash.js";
import resolveRoutes from "../utils/resolveRoutes.js";


const routes = {
    "/": Home,
    "login": Login,
    "intranet": Intranet,
    "habitaciones": Rooms,
    "bebidas": Drinks,
    contact: "Contact",
};

const router = async () => {
    document.body.classList.remove("background-green");


    const header = null || document.getElementById("Header");
    const content = null || document.getElementById("root");
    const footer = null || document.getElementById("Footer");

    header.innerHTML = "";
    footer.innerHTML = "";

    let hash = getHash();
    console.log(hash);
    // let route = await resolveRoutes(hash);
    let render = routes[hash] ? routes[hash] : Error404;

    switch (hash) {
        case "/":
            content.innerHTML = await render();
            footer.innerHTML = await Footer();
            break;
        case "login":
            document.body.classList.add("background-green");
            header.innerHTML = await Header(false);
            content.innerHTML = await render();
            break;
        case "intranet":
            header.innerHTML = await Header();
            content.innerHTML = await render();
            break;
        case "habitaciones":
            header.innerHTML = await Header();
            content.innerHTML = await render();
            break;
        default:
        case "bebidas":
            header.innerHTML = await Header();
            content.innerHTML = await render();
            break;
            break;
    }
};

export default router;
