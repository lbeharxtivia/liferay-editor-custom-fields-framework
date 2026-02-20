# Liferay Custom Fields Framework

The engine behind Liferay Editor Custom Fields.

## Before You Start

Any client extension using this framework should not run on a production or pre-prod staging environment. It is only intended for the fragment and web content editors. Any JS that will end up on the page should be elsewhere, either in a separate client extension or in the fragment/web content template.

You only need this if you are creating a new Liferay Editor Custom Fields package, otherwise it is provided as a dependency on existing ones.

## Getting Started

- Install @liferay-editor-custom-fields/framework
  - Make sure the version matches the minor version of Liferay you are using
  - For example `yarn add @liferay-editor-custom-fields/framework@~7.4.0` for Liferay 7.4.
- In the index.ts of your app:
  - Declare the Liferay global object
  - Import the default exported function from @liferay-editor-custom-fields/framework. You can call it something short like initFramework();
- Create a default exported function of your own and call that function
- Write a Liferay.on event subscriber for each event that your app will be using. See the Events section of this document for a list of events.

```
declare const Liferay;

import initFramework from '@liferay-editor-custom-fields/framework';

const initImageTools: () => void = () => {
    initFramework();
    Liferay.on('EditorCustomFields_WebContentFields_OnLoad', ()=>{});
    Liferay.on('EditorCustomFields_FragmenConfig_OnLoad', ()=>{});
    Liferay.on('EditorCustomFields_Image_OnChange', ()=>{});
}
export default initImageTools;
```

## Events

Use Liferay.on to subscribe to these events:

- `EditorCustomFields_WebContentFields_OnLoad` - Fires when web content field DOM is loaded.
- `EditorCustomFields_FragmenConfig_OnLoad` - Fires when a new Fragment config is loaded on the right pane of a page editor.
- `EditorCustomFields_Image_OnChange` - Fires when an lfr-editable image or Web Content image is changed.

## Helper functions

The helper functions below are available for import in any file. For example, to use the getFieldByLabel helper you would use `import { getFieldByLabel } from "@liferay-editor-custom-fields/framework";`

- `debounce(callback:function, wait:number)` - A simple callback function
- `getContentImageInput(label:string)` - Gets the metadata input field associated with the web content image.
- `getFieldByLabel(label:string)` - Uses Xpath to get an input field by its label. Usually used to append a GUI element.
- `getPreviewImage()` - Gets the preview Image
- `setReactDomInputValue({fieldEl:element,value:string})` - Sets React DOM input value and triggers an autosave on fragment config

## License

MIT Licensed. Copyright (c) Xtivia 2026.
