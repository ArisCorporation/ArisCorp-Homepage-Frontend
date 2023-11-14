import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "./flipbook.css"
const samplePDF = "https://cms.ariscorp.de/assets/9131f113-1e78-40c4-a794-48c68e468016";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// eslint-disable-next-line react/display-name
const Page = React.forwardRef(({ pageNumber, width }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

export default function Test () {
  // const [numPages, setNumPages] = useState(null);
  // const [width, setWidth] = useState(null);
  // const [height, setHeight] = useState(null);
  // let flipbook = null

  // async function onDocumentLoadSuccess (page) {
  //   setNumPages(page.numPages)

  //   const pageObj = await page.getPage(4)
  //   let pageHeight = pageObj.view[3]
  //   let pageWidth = pageObj.view[2]
  //   // pageHeight = pageHeight * 0.5
  //   // pageWidth = pageWidth * 0.5
  //   console.log(pageHeight);
  //   console.log(pageWidth);
  //   setHeight(pageHeight)
  //   setWidth(pageWidth)
  // }

  // console.log(flipbook);

  // const nextButtonClick = () => {
  //   flipbook.getPageFlip().flipNext();
  // };

  // const prevButtonClick = () => {
  //   flipbook.getPageFlip().flipPrev();
  // };

  // eslint-disable-next-line react/display-name
  // const Page = React.forwardRef(({ pageNumber }, ref) => {
  //   return (
  //     <div ref={ref}>
  //       <ReactPdfPage pageNumber={pageNumber} width={width} />
  //     </div>
  //   );
  // });

  return (
    <div data-density="hard">
      {/* <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        {!width ? null : (
          <HTMLFlipBook ref={(component) => (flipbook = component)} showCover="true" size="fixed" autoSize={true} width={width} height={height}>
            {Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={width}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </HTMLFlipBook>
        )}
      </Document> */}
      {/* <div className="container">
        <div>

          <button type="button" onClick={prevButtonClick}>
            Previous page
          </button>

          <button type="button" onClick={nextButtonClick}>
            Next page
          </button>

        </div>
      </div> */}
    </div>
  );
}
