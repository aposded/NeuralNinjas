import React,{useContext} from 'react'
import Node from './Node'
import NodeContext from '../../contexts/NodeContext'
import icon from '../../assets/nodes/TriangleNode.svg'
import useColorToFilter from '../../hooks/useColorToFilter'

export default function TriangleNode({id,data,selected,...props}) {
    const [setNodeValue,getNodeValue]=useContext(NodeContext)
    const getColorToFilter=useColorToFilter()

    return (
        <Node nodePositions={[1,0,1,0]} nodeId={id} className='relative text-xs' selected={selected} approved={typeof getNodeValue(id,'approved')==='boolean'? getNodeValue(id,'approved'):true} style={{filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.05)) '+getColorToFilter(data.color)}} {...props}><img src={icon} alt='TriangleNode' className='w-full' /><input className='absolute right-0 w-20 text-center -translate-x-1/2 -translate-y-1/2 bg-transparent left-1/2 top-3/4 focus:border-none focus:outline-none' onChange={e => {e.preventDefault(); setNodeValue(id,e.target.value)}} value={getNodeValue(id)} /></Node>
    )
}
