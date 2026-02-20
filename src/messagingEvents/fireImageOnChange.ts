declare const Liferay;
export const fireImageOnChange = () => {
    Liferay.fire('EditorCustomFields_Image_OnChange');
};