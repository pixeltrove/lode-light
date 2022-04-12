// INITIALIZATION
// -----------------------------------------------------------------------------

import Accordion from "./components/accordion";
import Dialog from "./components/dialog";
import Menu from "./components/menu";
import Tabset from "./components/tabset";

import initializeComponent from "./helpers/initialize-component";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_DIALOG = ".dialog";
const SELECTOR_MENU = ".menu";
const SELECTOR_TABSET = ".tabset";

initializeComponent(Accordion, SELECTOR_ACCORDION);
initializeComponent(Dialog, SELECTOR_DIALOG);
initializeComponent(Menu, SELECTOR_MENU);
initializeComponent(Tabset, SELECTOR_TABSET);
