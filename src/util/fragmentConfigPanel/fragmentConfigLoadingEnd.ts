export const fragmentConfigLoadingEnd = async () => {
    const sidebar = document.querySelector('.page-editor__item-configuration-sidebar') as HTMLDivElement;
    if (sidebar) {
        sidebar.style.opacity = "1";
    }

    const overlay = document.getElementById('fragment-config-overlay');
    if (overlay) {
        const fade = overlay.animate(
            [
                { opacity: 0.9, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(1.05)' }
            ],
            {
                duration: 300,
                easing: 'ease-in',
                fill: 'forwards'
            }
        );
        await fade.finished;
        overlay.remove();
    }
}
