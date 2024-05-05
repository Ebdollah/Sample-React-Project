
// import ModuleSidebar.jsx from "./ModuleSidebar";
import PDFViewer from "./PDFViewer";
import mmd from './assets/mmd.pdf'

export default function App() {
  return (
   <>
    <PDFViewer fileUrl={mmd}/>
   </>
  )
}