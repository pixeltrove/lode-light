// HELPERS
// -----------------------------------------------------------------------------

import initializeComponent from "./helpers/initialize-component";

// COMPONENTS
// -----------------------------------------------------------------------------

import "./components/accordion";
import "./components/dialog";
import "./components/menu";
import { Tabset, SELECTOR_TABSET } from "./components/tabset";

// INITIALIZATION
// -----------------------------------------------------------------------------

initializeComponent(Tabset, SELECTOR_TABSET);
