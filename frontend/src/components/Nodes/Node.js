import classNames from 'classnames'
import React from 'react'
import {Handle,Position} from 'reactflow'
import {NodeResizer} from 'reactflow'

// Node should have handles on all four sides
export default function Node({children,nodeId,nodePositions=[1,1,1,1],resizable=true,deactivated=false,selected=false,approved=true,className,...props}) {
    return (
        <>
            <NodeResizer keepAspectRatio color="#45ac71" isVisible={selected&&resizable&&approved} minWidth={140} />
            <div className={classNames((deactivated||!approved)&&'opacity-30',className)} {...props}>
                {children||'Node'}
            </div>
            {!!nodePositions[0]&&<Handle id={nodeId+'a'} isConnectable={!deactivated&&approved} type="target" position={Position.Top} className={classNames((selected&&approved&&!deactivated)? 'opacity-75':'opacity-0')}></Handle>}
            {!!nodePositions[1]&&<Handle type="source" isConnectable={!deactivated&&approved} id={nodeId+'d'} position={Position.Right} className={classNames((selected&&approved&&!deactivated)? 'opacity-75':'opacity-0')}></Handle>}
            {!!nodePositions[2]&&<Handle id={nodeId+'b'} isConnectable={!deactivated&&approved} type="source" position={Position.Bottom} className={classNames((selected&&approved&&!deactivated)? 'opacity-75':'opacity-0')}></Handle>}
            {!!nodePositions[3]&&<Handle id={nodeId+'c'} isConnectable={!deactivated&&approved} type="target" position={Position.Left} className={classNames((selected&&approved&&!deactivated)? 'opacity-75':'opacity-0')}></Handle>}
        </>
    )
}
