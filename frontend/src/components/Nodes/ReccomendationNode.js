import React,{useContext} from 'react'
import Node from './Node'
import NodeContext from '../../contexts/NodeContext'
import icon from '../../assets/nodes/HorCylinderNode.svg'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import Subheading from '../Text/Subheading'
import Text from '../Text/Text'
import CircularProgress from '../Progress/CircularProgress'

export default function ReccomendationNode({id,data,selected,...props}) {
    const [setNodeValue,getNodeValue,deleteNode]=useContext(NodeContext)

    return (
        <Node nodeId={id} nodePositions={[0,0,0,0]} className='relative w-48 px-2 text-xs border rounded-md shadow-sm border-primary-200 opacity-90 bg-light' {...props}>
            <Subheading className='!text-2xs !p-0 !m-0'>Reccomendation</Subheading>
            <Text className='px-0 py-0 my-0 leading-normal text-3xs'>{getNodeValue(id)}</Text>

            {/* Delete node button */}
            <div className='flex items-center justify-between w-full'>
                <CircularProgress className='!font-thin !pt-2 !px-0 !text-4xs !w-1/8 lg:!w-1/8' value={data.score} max={10} />
                <ButtonPrimary className='!text-3xs !font-bold !bg-opacity-20 !p-1 mt-0 !w-1/4 lg:!w-1/4 text-primary !rounded-md !shadow-none' onClick={e => {e.preventDefault(); deleteNode(id)}}>Cancel</ButtonPrimary>
            </div>
        </Node>
    )
}
