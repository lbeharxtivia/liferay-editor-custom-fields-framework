declare const Liferay;

import { fireFragmentConfigOnLoad } from "../messagingEvents/fireFragmentConfigOnLoad";
import { debounce } from "../util";

import { observePreviewImage } from "./observePreviewImage";

export const observeFragmentConfig = () => {
    Liferay?.editorCustomFields?.fragmentObserver?.disconnect?.();
    const sidePanelQuery = ".page-editor__item-configuration-sidebar";
    const sidePanelEl: HTMLDivElement = document.querySelector(
        sidePanelQuery
    );
    if (sidePanelEl) {
        const debouncedAddButton = debounce(() => {
            observePreviewImage('fragment');
            fireFragmentConfigOnLoad();
        }, 500);
        Liferay.editorCustomFields.fragmentObserver = new MutationObserver(debouncedAddButton);
        const observer = Liferay.editorCustomFields.fragmentObserver;
        const config = { attributes: false, childList: true, subtree: false };
        observer.observe(sidePanelEl, config);
    }
};
