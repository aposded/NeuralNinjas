/** @format */

import React,{useEffect,useState} from 'react'
import Card from './Card'
import Label from '../Text/Label'
import Text from '../Text/Text'
import {getDownloadURL} from 'firebase/storage'

export default function ProjectCard({project,to,...props}) {

  const [imageUrl,setImageUrl]=useState('')

  useEffect(() => {
    getDownloadURL(project.projectRef).then((url) => setImageUrl(url)).catch(() => { })
  },[project])

  return (
    <Card to={to} className='w-full min-w-0 !justify-start overflow-hidden !p-0'>
      <img className='w-full' src={imageUrl||'https://firebasestorage.googleapis.com/v0/b/flowsage-web.appspot.com/o/default-project.png?alt=media&token=43ec5fb1-9773-403a-ad55-65e99431612c'} alt={`${project.title} Preview Card`} />
      <Text className="max-w-full min-w-0 px-4 pt-2 overflow-hidden text-xl font-medium whitespace-normal">{project.title}</Text>
      <Text className='px-4'>Last Updated: {new Date(project.updatedAt?.seconds*1000||0).toDateString().slice(4)}</Text>
      {/* <div className="w-full mt-8">
        {project.tools.map((tool) => (
          <Label className="inline-block mr-1 max-w-fit" key={tool}>
            {tool}
          </Label>
        ))}
      </div> */}
    </Card>
  )
}
