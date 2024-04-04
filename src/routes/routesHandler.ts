import Navigo from "navigo";
import { renderLoginForm, isLoggedIn } from "../components/credentialsComponents/renderLogin";
import { renderRegisterForm } from "../components/credentialsComponents/renderRegister";
import { renderNav } from "../components/topNavComponents/renderNav";
import { renderSideNav } from "../components/sideNavComponents/renderSideNav";
import { renderEditUser } from "../components/profileComponents/renderEditUser";
import { renderMainUser } from "../components/profileComponents/renderMainUser";
import { renderFooter } from "../components/renderFooter";
import { renderFaq } from "../components/topNavComponents/renderFaq";
import { renderContact } from "../components/topNavComponents/renderContact";

import { RouteParams } from "./routes";
import { renderThreads } from "../components/renderThread";


//Kevin's code
export function handleHomeRoute(router: Navigo) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else {
    renderNav(router);
    renderSideNav(router);
  }
}

//Kevin's code
export function handleLoginRoute(router: Navigo) {
  if (isLoggedIn()) {
    router.navigate("/");
  } else {
    renderLoginForm(router);
    renderSideNav(router);
    renderNav(router);

  }
}
//Kevin's code
export function handleRegisterRoute(router: Navigo) {
  if (isLoggedIn()) {
    router.navigate("/");
  } else {
    renderRegisterForm(router);
  }
}
//Kevin's code
export function handleUserProfileRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else {
    console.log(params.data.id);
    renderMainUser(params.data.id, router);
    renderNav(router);
    renderFooter();
    renderSideNav(router);
  } 
}
//Kevin's code
export function handleEditUserProfileRoute(router: Navigo, params: RouteParams) {
  if (!isLoggedIn()) {
    router.navigate("/login");
  } else { 
    renderEditUser(router, params.data.id);
  }
}
//Kevin's code  //Edited by Petra TESTING
export function handleTopicRoute(router: Navigo, params: RouteParams) { 
  if (!isLoggedIn()) {//Petra's add
    router.navigate("/login");
  } 
   else { 

    renderThreads(params.data.id, router);
  }
  
} 
//Kevin's code
export function handleThreadRoute(router: Navigo, params: RouteParams) {
}
//Kevin's code
export function handleFaqRoute() {
  renderFaq();
}
//Kevin's code
export function handleContactRoute() {
  renderContact();
}