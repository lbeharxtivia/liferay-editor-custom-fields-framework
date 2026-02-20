declare const Liferay;

import { observeFragmentConfig, observeWebContentFields } from "./observers";

export {
  debounce,
  getContentImageInput,
  getFieldByLabel,
  getPreviewImage,
  setReactDomInputValue,
} from "./util";

const initFramework: () => void = () => {
  const startObservers = () => {
    observeWebContentFields();
    // Fragment element we are watching is loaded client-side, and AFAIK there is no event fired when client-side is loaded.
    setTimeout(observeFragmentConfig, 500);
  };
  if (Liferay && !Liferay?.editorCustomFields) {
    Liferay.editorCustomFields = {};
    Liferay.on("allPortletsReady", () => {
      startObservers();
    });
    Liferay.on("endNavigate", () => {
      startObservers();
    });
  }
}
export default initFramework;
