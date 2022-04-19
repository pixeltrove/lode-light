// HELPERS
// -----------------------------------------------------------------------------

import initializeComponent from "./helpers/initialize-component";

// COMPONENTS
// -----------------------------------------------------------------------------

import { Accordion, SELECTOR_ACCORDION } from "./components/accordion";
import { Dialog, SELECTOR_DIALOG } from "./components/dialog";
import { Menu, SELECTOR_MENU } from "./components/menu";
import { Tabset, SELECTOR_TABSET } from "./components/tabset";

// INITIALIZATION
// -----------------------------------------------------------------------------

initializeComponent(Accordion, SELECTOR_ACCORDION);
initializeComponent(Dialog, SELECTOR_DIALOG);
initializeComponent(Menu, SELECTOR_MENU);
initializeComponent(Tabset, SELECTOR_TABSET);
