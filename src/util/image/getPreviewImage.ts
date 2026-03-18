export const getPreviewImage = () => {
    console.log('latest version');
    let previewImage: HTMLImageElement | null = null;
    const parentEl: HTMLDivElement = document?.querySelector(
        "#portlet_com_liferay_journal_web_portlet_JournalPortlet, .page-editor__topper.active"
    );
    if(parentEl) {
        previewImage = parentEl.querySelector(
            ".page-editor__topper.active img.page-editor__editable, .image-picker-preview>img"
        ) as HTMLImageElement;
    }
    return previewImage;
}
