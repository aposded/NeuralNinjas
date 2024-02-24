import React from 'react'
import Progress from './Progress'
import Text from '../Text/Text'
import Link from '../Links/Link'

export default function Credits({credits,className,...props}) {
    return (
        <div className={className}>
            <Text className='my-1 text-center'>You have {credits} credits for {new Date((new Date()).getFullYear(),(new Date()).getMonth()+1,0).getDate()-new Date().getDate()} days. <Link className='text-center' to='/pricing'>Learn more</Link></Text>
            <Progress max={10} value={credits||0} />
        </div>
    )
}
