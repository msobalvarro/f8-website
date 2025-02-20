import { JobsResponse } from '@/utils/interfaces'
import { Button } from '@mui/material'
import { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { BsCalendarCheckFill } from 'react-icons/bs'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { createPortal } from 'react-dom'
import { ModalApplication } from './modalApplication'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { imageOrigin } from '@/utils/constants'
import { AnimatedImage } from '../ui/image'
import { TagsPreview } from './tagsPreview'

dayjs.extend(relativeTime)

export const ItemJob = ({ job }: { job: JobsResponse }) => {
  const [apply, setApply] = useState(false)

  return (
    <div key={job._id} className='flex flex-col gap-4 rounded p-4 bg-white/[0.1]'>
      {job.image && (
        <PhotoProvider>
          <PhotoView src={`${imageOrigin}/${job.image}`}>
            <AnimatedImage
              className='w-full object-cover max-h-[512px] md:aspect-[1] rounded'
              src={`${imageOrigin}/${job.image}`}
              alt='product-image' />
          </PhotoView>
        </PhotoProvider>
      )}

      <div className='flex justify-between py-4'>
        <h2 className='text-xl'>{job.title}</h2>
        <p className='text-white flex items-center gap-2 font-bold'><IoLocationSharp /> {job?.location || 'Managua'}</p>
      </div>

      <div className='text-slate-200 space-y-4'>
        <p>{job.description}</p>
      </div>

      <TagsPreview tags={job.tags} />

      <hr />

      <div className='flex items-center gap-4 justify-center'>
        <BsCalendarCheckFill />

        <p>
          Publicado el {dayjs(job.createdAt).format('LL')}
        </p>

        <p className='text-gray-500'>({dayjs(job.createdAt).fromNow()})</p>
      </div>


      <Button
        className='self-end'
        variant='contained'
        color='primary'
        onClick={() => setApply(true)}>Aplicar</Button>

      {apply && createPortal(
        <ModalApplication job={job} onClose={() => setApply(false)} />,
        document.body
      )}
    </div>
  )
}