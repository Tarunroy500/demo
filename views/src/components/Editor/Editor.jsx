import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import CheckList from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from '@editorjs/embed';
import Quote from "@editorjs/quote";
import Image from "@editorjs/quote";
import Paragraph from '@editorjs/paragraph'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
const Editor = () => {
  const Editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: {
        class: Header,
        inlineToolbar: true,
      },
      LinkTool:LinkTool,
      // LinkTool:{
      //     class: LinkTool,
      //     config:{
      //         endpoint : 'http://localhost:4000/upload'
      //     }
      // },
      RawTool: RawTool,
      Image : Image,
      SimpleImage: SimpleImage,
      CheckList: CheckList,
      delimiter: Delimiter,
      List: List,
      embed: {
        class: Embed,
        config: {
          services: {
            youtube: true,
            coub: true
          }
        }
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author",
        },
      },
      inlineCode: InlineCode,

    },
  });

  //   Editor.isReady
  //     .then((e) => {
  //       console.log("REady editor js");
  //     })
  //     .catch((err) => console.log(err));

  return (
    <>
      <div id="editorjs"></div>
    </>
  );
};

export default Editor;
