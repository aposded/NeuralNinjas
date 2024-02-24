import React,{useContext} from 'react'
import Node from './Node'
import NodeContext from '../../contexts/NodeContext'
import icon from '../../assets/nodes/ArrowRectNode.svg'
import useColorToFilter from '../../hooks/useColorToFilter'

export default function ArrowRectNode({id,data,selected,...props}) {
    const [setNodeValue,getNodeValue]=useContext(NodeContext)
    const getColorToFilter=useColorToFilter()

    return (
        <Node nodePositions={[1,1,1,1]} nodeId={id} className='relative text-xs' selected={selected} approved={typeof getNodeValue(id,'approved')==='boolean'? getNodeValue(id,'approved'):true}{...props}><img style={{filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.05)) '+getColorToFilter(data.color)}} src={icon} alt='ArrowRectNode' className='w-full' /><input className='absolute right-0 w-24 text-center -translate-x-1/2 -translate-y-1/2 bg-transparent left-1/2 top-1/2 focus:border-none focus:outline-none' onChange={e => {e.preventDefault(); setNodeValue(id,e.target.value)}} value={getNodeValue(id)} /></Node>
    )
}
