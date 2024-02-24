import React,{useState} from 'react'
import Card from './Card'
import Text from '../Text/Text'
import Icon from '../Text/Icon'
import {useNavigate} from 'react-router-dom'

export default function LandingResultCard({result,removeResult,index,last,...props}) {
    const navigate=useNavigate()
    const [copiedToClipboard,setCopiedToClipboard]=useState(false)
    const getSimilarResults=() => {
        navigate('/login')
    }

    async function copyToClipboard() {
        const permission=await navigator.permissions.query({name: 'clipboard-write'});
        if(permission.state==='granted') {
            const copied=await navigator.clipboard.writeText(result);
            setCopiedToClipboard(true)
            setTimeout(() => {
                setCopiedToClipboard(false)
            },1000)
        }
    }

    return (
        <Card className={`!box-border !min-w-fit`}>
            <Text className="text-xl font-medium whitespace-pre-wrap w-fit">{result}</Text>
            <div className='flex items-center justify-end w-full gap-1 mt-2'>
                <Card onClick={copyToClipboard} className='text-xs p-1 px-3 !flex-row gap-1 cursor-pointer !mx-0'>
                    <Icon className='inline-block my-auto align-middle' icon={copiedToClipboard? 'check-lg':'clipboard'} />
                    <Text className='hidden my-auto align-middle pointer-events-none lg:inline-block '>{copiedToClipboard? 'Copied!':'Copy'}</Text>
                </Card>
                <Card onClick={() => getSimilarResults(result)} className='text-xs p-1 px-3 !flex-row gap-1 cursor-pointer !mx-0 '>
                    <Icon className='inline-block my-auto align-middle' icon='plus-lg' />
                    <Text className='hidden my-auto align-middle pointer-events-none lg:inline-block min-w-max'>More like this</Text>
                </Card>
                <Card onClick={() => removeResult(index)} className='text-xs p-1 px-3 !flex-row gap-1 cursor-pointer !mx-0'>
                    <Icon className='inline-block my-auto align-middle' icon='x-circle' />
                    <Text className='hidden my-auto align-middle pointer-events-none lg:inline-block '>Remove</Text>
                </Card>
            </div>
        </Card>
    )
}
