import classNames from 'classnames'
import React,{useEffect,useState} from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'

export default function DownloadableImage({src,alt,className,children,...props}) {
    const [hover,setHover]=useState(false)

    const toggleHover=() => {
        setHover(hover => !hover)
    }

    const downloadImage=() => {
        const a=document.createElement('a');
        a.href=src;
        a.download=alt;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }


    return (
        <div className={classNames('relative',className)} onMouseOver={toggleHover} onMouseOut={toggleHover}><img src={src} alt={alt}>{children}</img>{hover&&<ButtonPrimary className='absolute w-1/2 shadow-sm lg:shadow-sm bottom-3 right-3 lg:w-1/2 bg-primary-800/30' onClick={downloadImage}>Download</ButtonPrimary>}</div>
    )
}
