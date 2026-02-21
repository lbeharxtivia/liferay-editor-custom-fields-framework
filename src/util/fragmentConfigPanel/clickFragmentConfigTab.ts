  type ClickFragmentConfigTab = (label:string) => void;
  export const clickFragmentConfigTab:ClickFragmentConfigTab = (label) => {
    const parentEl = document.querySelector(
      "#portlet_com_liferay_journal_web_portlet_JournalPortlet, .page-editor__item-configuration-sidebar",
    );
    if(parentEl) {
      const spans = Array.from(parentEl.querySelectorAll('button>span'));
      const tabSpan = spans.find(el => el.textContent.trim() === label);
      if(tabSpan) {
        tabSpan?.parentElement?.click()
      }
    }
  };