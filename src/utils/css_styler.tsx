// Utility functions to add CSS to HTML style element

let pageCSS = '';

export function addCSSToHead(css: string): void {
  pageCSS += css;
}

export function getAllPageHeadCSS(): string {
  return pageCSS;
}
