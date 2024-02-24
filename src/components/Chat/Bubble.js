import React from 'react'
import ReactMarkdown from 'react-markdown'
import Icon from '../Text/Icon'
import Text from '../Text/Text'

export default function Bubble({chat,index,deleteChatBubble,...props}) {
    return (
        <div className='block w-full mb-4 h-fit'>
            <div key={index} className={`flex items-center justify-between w-3/4 flex-shrink-0 gap-2 px-2 py-2 rounded-lg ${chat.role==='assistant'? ' ml-0 bg-primary':'bg-secondary-600 ml-auto'}`}>
                <Text className='w-full font-medium text-left text-white whitespace-pre-wrap lg:text-md'><ReactMarkdown>{`${chat.content}`}</ReactMarkdown></Text>
                <Icon icon='x' className='self-start text-lg cursor-pointer text-white/50' onClick={() => deleteChatBubble(index)} />
            </div>
        </div>
    )
}
