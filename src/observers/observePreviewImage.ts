declare const Liferay;

import { fireImageOnChange } from "../messagingEvents/fireImageOnChange";
import { ContentType } from "../types/ContentType.type";
import { debounce, getContentImageInput, getPreviewImage } from "../util";

export const observePreviewImage = (contentType: ContentType) => {
    if(Liferay.editorCustomFields.imageObserver){
        Liferay.editorCustomFields.imageObserver.disconnect?.();
    }
    // For when image changes
    const elToObserve = contentType === 'fragment' ? getPreviewImage() : getContentImageInput();
    if (contentType && elToObserve && !Liferay.editorCustomFields.imageObserver) {
        const debouncedAddContentBlurhash = debounce(() => fireImageOnChange(), 500);
        Liferay.editorCustomFields.imageObserver = new MutationObserver(debouncedAddContentBlurhash);
        const observer = Liferay.editorCustomFields.imageObserver
        const config = { attributes: true, childList: false, subtree: false };
        observer.observe(elToObserve, config);
    }
    // For when image is already present on load
    fireImageOnChange();
}
