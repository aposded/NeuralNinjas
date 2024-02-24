/** @format */
import {useEffect,useState} from 'react'

export default function usePageTitle(title,addAppName=true) {
  const [pageTitle,setPageTitleState]=useState(title)
  useEffect(() => {
    if(pageTitle) {
      setPageTitle(pageTitle+(addAppName? ' | Flowsage':''))
    }
  },[pageTitle,addAppName])
  return [pageTitle,setPageTitleState]
}

function setPageTitle(title) {
  document.title=title
}
