export const fragmentConfigLoadingStart = () => {
    const sidebar = document.querySelector('.page-editor__item-configuration-sidebar') as HTMLDivElement;
    const activeFragment = document.querySelector('.page-editor__topper.active');

    if (sidebar && activeFragment) {

        sidebar.style.transition = "opacity 300ms ease-in-out";
        sidebar.style.opacity = "0.1";

        const overlay = document.createElement('div');
        overlay.id = 'fragment-config-overlay';
        overlay.style.cssText = `
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.9;
    background: white;
    z-index: 999;
    text-align: center;
  `;

        const spinner = document.createElement('span');
        spinner.id = 'fragment-config-overlay-loading';
        spinner.style.cssText = `
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top-color: #3498db;
    border-radius: 50%;
    display: inline-block;
    margin-top: 3rem;
  `;

        // 4. Create the text paragraph
        const text = document.createElement('p');
        text.textContent = 'Applying changes';

        // 5. Assemble and insert as the first child
        overlay.appendChild(spinner);
        overlay.appendChild(text);
        activeFragment.prepend(overlay);

        // 6. Trigger the JS animation
        spinner.animate(
            [
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
            ],
            {
                duration: 1000,
                iterations: Infinity,
                easing: 'linear'
            }
        );
    }
}