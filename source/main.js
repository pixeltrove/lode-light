// HELPERS
// -----------------------------------------------------------------------------

import initializeComponent from "./helpers/initialize-component";

// COMPONENTS
// -----------------------------------------------------------------------------

import "./components/accordion";
import { Dialog, SELECTOR_DIALOG } from "./components/dialog";
import { Menu, SELECTOR_MENU } from "./components/menu";
import { Tabset, SELECTOR_TABSET } from "./components/tabset";

// INITIALIZATION
// -----------------------------------------------------------------------------

initializeComponent(Dialog, SELECTOR_DIALOG);
initializeComponent(Menu, SELECTOR_MENU);
initializeComponent(Tabset, SELECTOR_TABSET);
