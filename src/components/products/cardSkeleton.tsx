import { Skeleton } from '@mui/material'

export const ProductsSkeletons = () => (
  <article className='flex gap-10 p-12 w-full'>
    <Skeleton className='rounded-xl flex-1' sx={{ bgcolor: 'rgba(250, 250, 250, 0.3)' }} height={512} variant='rectangular' />
    <Skeleton className='rounded-xl flex-1' sx={{ bgcolor: 'rgba(250, 250, 250, 0.3)' }} height={512} variant='rectangular' />
  </article>
)
