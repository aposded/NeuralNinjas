import {GlobalWorkerOptions,getDocument} from 'pdfjs-dist'
import {WorkerMessageHandler} from 'pdfjs-dist/build/pdf.worker.mjs'

export default function usePdfParser() {
    const parseText=async (file,setTexts) => {
        const reader=new FileReader()
        reader.onload=async () => {
            const pdfData=new Uint8Array(reader.result)
            GlobalWorkerOptions.workerSrc=WorkerMessageHandler
            const pdf=await getDocument(pdfData).promise
            let text=[]
            for(let i=1;i<=pdf._pdfInfo.numPages;i++) {
                const page=await pdf.getPage(i)
                const content=await page.getTextContent()
                const strings=content.items.map(item => item.str)
                text.push(strings.join(' '))
            }
            text=text.join('\n\n ')
            // console.log("text",text)
            setTexts(texts => [...texts,text])
        }
        reader.readAsArrayBuffer(file)
    }
    return parseText
}