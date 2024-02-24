import React,{useContext} from 'react'
import Node from './Node'
import NodeContext from '../../contexts/NodeContext'

export default function TextNode({id,data,selected,...props}) {
    const [setNodeValue,getNodeValue]=useContext(NodeContext)

    return (
        <Node nodeId={id} className='relative p-4 text-xs bg-transparent rounded-md' selected={selected} approved={typeof getNodeValue(id,'approved')==='boolean'? getNodeValue(id,'approved'):true}{...props}><input className='absolute text-center -translate-x-1/2 -translate-y-1/2 bg-transparent left-1/2 top-1/2 focus:border-none focus:outline-none' onChange={e => {e.preventDefault(); setNodeValue(id,e.target.value)}} value={getNodeValue(id)} /></Node>
    )
}
