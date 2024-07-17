import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div className="pdf-viewer">
      <iframe
        title="PDF Viewer"
        className="pdf-iframe"
        src={pdfUrl}
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default PdfViewer;
