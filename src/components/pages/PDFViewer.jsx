import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  TextSearch,
  FormFields,
  FormDesigner,
} from "@syncfusion/ej2-react-pdfviewer";
PdfViewerComponent.Inject(
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner
);

const PDFViewer = () => {
  return (
    <div className="container pt-5 pb-5">
      <h1>
        PDF Viewer
        <lord-icon
          src="https://cdn.lordicon.com/ckatldkn.json"
          trigger="loop"
          delay="1000"
          colors="primary:#1a2238,secondary:#ff6a3d,tertiary:#ebe6ef"
          style={{ width: "80px", height: "80px" }}
        ></lord-icon>
      </h1>
      <PdfViewerComponent
        id="PDFViewer"
        height={"1000px"}
        documentPath="PDF_Succinctly.pdf"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
      />
    </div>
  );
};

export default PDFViewer;
