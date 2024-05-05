import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import mmd from "./assets/mmd.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer({fileUrl}) {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);
    // alert(fileUrl);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='p-4 mt-4 bg-gray-200 border border-gray-400 max-w-5xl mx-auto overflow-hidden'>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div className='max-h-screen overflow-y-auto px-[10%]'>
                <Document
                    file={fileUrl}
                   
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {
                        Array.apply(null, Array(numPages))
                            .map((x, i) => i + 1)
                            .map((page) => (
                                <>
                                <Page
                                    key={page}
                                    pageNumber={page}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                                <div className='mb-10'></div>
                                </>
                            ))
                    }
                </Document>
            </div>
        </div>
    );
}

export default PDFViewer;
