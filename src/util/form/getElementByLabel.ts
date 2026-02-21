  type GetElementByLabel = (args:{parentEl:Element, label:string, searchQuerySelector:string}) => HTMLElement;
  
  export const getElementByLabel:GetElementByLabel = ({parentEl, label, searchQuerySelector}) => {
    let el;
    if(parentEl) {
      const spans = Array.from(parentEl.querySelectorAll(searchQuerySelector));
      el = spans.find(el => el.textContent.trim().startsWith(label)); // Sometimes another child element sticks extra text at the end.
    }
    return el;
  };