import { getElementByLabel } from "./form/getElementByLabel";

const timeout = 5000;

type WaitForElement = (args: { parentEl: Element, label: string, searchQuerySelector?: string }) => Promise<Element>;

export const waitForElement: WaitForElement = ({ parentEl, label, searchQuerySelector = "span" }) => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            observer?.disconnect();
            reject(new Error(`Timeout: ${label} not found within ${timeout}ms`));
        }, timeout);

        const lookForElement = (_, obs?: MutationObserver) => {
            const element = getElementByLabel({ parentEl, label, searchQuerySelector });
            if (element) {
                clearTimeout(timer);
                obs?.disconnect();
                resolve(element);
            }
        }
        const observer = new MutationObserver(lookForElement);
        observer.observe(parentEl, {
            childList: true,
            subtree: true,
        });
        lookForElement(null);
    });
};