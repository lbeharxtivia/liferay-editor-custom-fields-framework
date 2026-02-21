# Liferay Custom Fields Framework

The engine behind Liferay Editor Custom Fields. 

You only need this if you are creating a new Liferay Editor Custom Fields package, otherwise it is provided as a dependency on existing ones.

## Before You Start

Any client extension using this framework should not run on a production or pre-prod staging environment. It is only intended for the fragment and web content editors. Any JS that will end up on the page should be elsewhere, either in a separate client extension or in the fragment/web content template.

If you are creating/appending DOM elements, make sure that you check for an existing element to avoid infinite MutationObserver loops.

## Getting Started

- Download the boilerplate starter at https://github.com/lbeharxtivia/liferay-editor-custom-fields-sample
- See below for available events and helper functions

## Events

Use Liferay.on to subscribe to these events:

- `EditorCustomFields_WebContentFields_OnLoad` - Fires when web content field DOM is loaded.
- `EditorCustomFields_FragmenConfig_OnLoad` - Fires when a new Fragment config is loaded on the right pane of a page editor.
- `EditorCustomFields_Image_OnChange` - Fires when an lfr-editable image or Web Content image is changed.

## Helper functions

The helper functions below are available for import in any file. For example, to use the getFieldByLabel helper you would use `import { getFieldByLabel } from "@liferay-editor-custom-fields/framework";`

- `clickFragmentConfigTab(label:string)` - Clicks a tab on the Fragment Configuration screen
- `debounce(callback:function, wait:number)` - A simple callback function
- `fragmentConfigLoadingStart()` - Create a overlay with a loading spinner over the active fragment and reduce the opacity of the config panel so we can programatically manipulate it without flicker
- `fragmentConfigLoadingEnd()` - Remove the overlays
- `getContentImageInput(label:string)` - Gets the metadata input field associated with the web content image.
- `getElementByLabel(label:string)` - Gets an element (not an input) by innerText
- `getFieldByLabel(label:string)` - Uses Xpath to get an input field by its label. Usually used to append a GUI element.
- `getPreviewImage()` - Gets the preview Image
- `setReactDomInputValue({fieldEl:element,value:string})` - Sets React DOM input value and triggers an autosave on fragment config
- `wait(ms)` - (Use `await wait()`) - an async function that pauses the process for a bit. Good for multiple actions on the same input
- `waitForElement({ parentEl: Element, label: string, searchQuerySelector?: string })` - Starts a Mutation Observer that queries a parent element for a specified selector/innertext combo. Destroys the observer and resolves the promise when it finds it. Times out after 5 seconds.

## License

MIT Licensed. Copyright (c) Xtivia 2026.
