import {useEffect,useState} from 'react'

export default function useSEO({indexable=true}) {
    const [isIndexable,setIsIndexable]=useState(indexable)
    useEffect(() => {
        setIndexable(isIndexable)
    },[isIndexable])
}

function setIndexable(isIndexable) {
    if(!isIndexable) {
        document.head.innerHTML+='<meta name="robots" content="noindex">'
    } else {
        document.head.querySelectorAll('meta').forEach((element) => {
            if(element.name==='robots'&&element.content==='noindex') {
                element.remove()
            }
        })
    }
}
