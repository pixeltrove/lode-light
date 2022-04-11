// INITIALIZATION
// -----------------------------------------------------------------------------

import Accordion from "./components/accordion";
import Dialog from "./components/dialog";
import Menu from "./components/menu";
import Tabset from "./components/tabset";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_DIALOG = ".dialog";
const SELECTOR_MENU = ".menu";
const SELECTOR_TABSET = ".tabset";

Array.from(document.querySelectorAll(SELECTOR_ACCORDION)).forEach((accordion) => Accordion(accordion));
Array.from(document.querySelectorAll(SELECTOR_DIALOG)).forEach((dialog) => Dialog(dialog));
Array.from(document.querySelectorAll(SELECTOR_MENU)).forEach((menu) => Menu(menu));
Array.from(document.querySelectorAll(SELECTOR_TABSET)).forEach((tabset) => Tabset(tabset));
