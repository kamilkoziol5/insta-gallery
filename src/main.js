import savedRelations from './JAVASCRIPT/createSavedRelations';
import openLighbox from './JAVASCRIPT/mainOpenLighbox';
import toggleTheme from './JAVASCRIPT/toggleTheme';
import renderApp from './JAVASCRIPT/renderApp';
import './SCSS/style.scss';
import { startAnimation } from './JAVASCRIPT/animations';

renderApp();
openLighbox();
toggleTheme();
savedRelations();
startAnimation();
