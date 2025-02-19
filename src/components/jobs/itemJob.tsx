import { JobsResponse } from '@/utils/interfaces'
import { Button } from '@mui/material'
import { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { BsCalendarCheckFill } from 'react-icons/bs'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { createPortal } from 'react-dom'
import { ModalApplication } from './modalApplication'

dayjs.extend(relativeTime)

export const ItemJob = ({ job }: { job: JobsResponse }) => {
  const [apply, setApply] = useState(false)

  return (
    <div key={job._id} className='flex flex-col gap-4 rounded p-4 bg-white/[0.1]'>
      <div className='flex justify-between'>
        <h2 className='text-xl font-semibold'>{job.title}</h2>
        <p className='text-white flex items-center gap-2'><IoLocationSharp /> {job?.location || 'Managua'}</p>

      </div>
      <div className='text-slate-200 space-y-4'>
        <p>{job.description}</p>

        <hr />
        <p>{job.tags.toString()?.replace(/,/g, ', ')}</p>
      </div>

      <div className='flex items-center gap-4 '>
        <BsCalendarCheckFill />

        <p>
          Publicado el {dayjs(job.createdAt).format('LL')}
        </p>

        <p className='text-gray-500'>({dayjs(job.createdAt).fromNow()})</p>
      </div>

      <Button className='self-end' color='primary' onClick={() => setApply(true)}>Aplicar</Button>

      {apply && createPortal(
        <ModalApplication job={job} onClose={() => setApply(false)} />,
        document.body
      )}
    </div>
  )
}