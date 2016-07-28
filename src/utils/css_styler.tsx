// Utility functions to concatenate view components CSS
import {IDictionary} from '../models';

// Concatenate each component CSS into this variable
let componentsCSS = '';

// Media queries width in px configuration
const MEDIA_QUERIES_WIDTH_CONFIG: IDictionary<string> = {
  xsMin : '320px', // Custom, iPhone Retina
  smMin : '480px', // Extra Small Devices, Phones
  mdMin : '768px', // Small Devices, Tablets
  lgMin : '992px', // Medium Devices, Desktops
  xlgMin: '1200px' // Large Devices, Wide Screens
};

// Supported media queries options
interface IMediaQueries {
  xsMin  : string
  smMin? : string
  mdMin? : string
  lgMin? : string
  xlgMin?: string
}

// Add component CSS to 'componentsCSS' variable. CSS can be a string
// (in which case it will be applied at any screen size), or an object
// literal with specific rules for each supported mobile first media query
export function addComponentCSS(options: IMediaQueries): void {
  for(let key in options) {
    if(options.hasOwnProperty(key) && MEDIA_QUERIES_WIDTH_CONFIG[key]) {
      componentsCSS += `@media only screen and (min-width : ${MEDIA_QUERIES_WIDTH_CONFIG[key]}) { ${options[key]} }`;
    } else {
      throw(`Undefined media query '${key}'`);
    }
  }
}

// Return all the CSS that has been concatenated to 'componentsCSS' variable
export function getAllComponentsCSS(): string {
  return componentsCSS;
}
