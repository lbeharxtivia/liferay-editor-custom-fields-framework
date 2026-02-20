declare const Liferay;

import { fireWebContentFieldsOnLoad } from "../messagingEvents/fireWebContentFieldsOnLoad";
import { debounce } from "../util";
import { observePreviewImage } from "./observePreviewImage";

export const observeWebContentFields = () => {
    const fieldsContainerEl: HTMLDivElement = document.querySelector(
        "#_com_liferay_journal_web_portlet_JournalPortlet_fieldsContent",
    );
    if (fieldsContainerEl) {
        if (Liferay.editorCustomFields.webContentObserver) {
            Liferay.editorCustomFields.webContentObserver.disconnect?.();
        }
        const debouncedFieldEvent = debounce(() => {
            observePreviewImage('content');
            fireWebContentFieldsOnLoad();
        }, 500);
        Liferay.editorCustomFields.webContentObserver = new MutationObserver(debouncedFieldEvent);
        const observer = Liferay.editorCustomFields.webContentObserver
        const config = { attributes: false, childList: true, subtree: true };
        observer.observe(fieldsContainerEl, config);
    }
};
