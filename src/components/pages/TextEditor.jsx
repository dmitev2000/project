import { useState } from "react";
import {
  Count,
  HtmlEditor,
  Image,
  Link,
  RichTextEditor,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";
RichTextEditor.Inject(HtmlEditor, Image, Link, Toolbar, Count);

const TextEditor = () => {
  const [rteObj, setRteObj] = useState(null);
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    const template = `
    <p><a href="http://www.syncfusion.com">The Rich Text Editor</a> component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
        Users can format their content using standard toolbar commands.</p>
    <img alt="Logo" src="http://cdn.syncfusion.com/content/images/sales/buynow/Character-opt.png" />
    <p><b>Key features:</b></p>
    <ul>
        <li> <p>Provides IFRAME and DIV modes</p> </li>
        <li> <p>Capable of handling markdown editing.</p> </li>
        <li> <p>Contains a modular library to load the necessary functionality on demand.</p> </li>
        <li> <p>Provides a fully customizable toolbar.</p> </li>
        <li> <p>Provides HTML view to edit the source directly for developers.</p> </li>
        <li> <p>Supports third-party library integration.</p> </li>
    </ul>`;
    const obj = new RichTextEditor(
      {
        height: 1000,
        valueTemplate: template,
      },
      "#rich-text-editor"
    );
    setRteObj(obj);
    setReady(true);
  }, [ready]);

  if (!rteObj) {
    return (
      <div className="container pt-5 pb-5 spinner-wrapper">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container pt-5 pb-5">
      <h1 className="mb-3">
        Text Editor
        <lord-icon
          src="https://cdn.lordicon.com/rfbqeber.json"
          trigger="loop"
          delay="1000"
          colors="primary:#1a2238,secondary:#ebe6ef,tertiary:#ff6a3d"
          style={{ width: "80px", height: "80px" }}
        ></lord-icon>
      </h1>
      <textarea id="rich-text-editor"></textarea>
    </div>
  );
};

export default TextEditor;
