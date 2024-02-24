import React,{useContext} from 'react'
import Node from './Node'
import NodeContext from '../../contexts/NodeContext'
import icon from '../../assets/nodes/HexNode.svg'
import useColorToFilter from '../../hooks/useColorToFilter'

export default function HexNode({id,data,selected,...props}) {
    const [setNodeValue,getNodeValue]=useContext(NodeContext)
    const getColorToFilter=useColorToFilter()

    return (
        <Node nodeId={id} className='relative text-xs' selected={selected} approved={typeof getNodeValue(id,'approved')==='boolean'? getNodeValue(id,'approved'):true}{...props}><img src={icon} style={{filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.05)) '+getColorToFilter(data.color)}} alt='HexNode' className='w-full' /><input className='absolute right-0 text-center -translate-x-1/2 -translate-y-1/2 bg-transparent w-28 left-1/2 top-1/2 focus:border-none focus:outline-none' onChange={e => {e.preventDefault(); setNodeValue(id,e.target.value)}} value={getNodeValue(id)} /></Node>
    )
}
