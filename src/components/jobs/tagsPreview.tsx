export const TagsPreview = ({ tags }: { tags: string[] }) => (
  <div className='flex gap-2'>
    {tags.map((tag, k) => (
      <span key={k} className='text-xs bg-sky-500 text-white px-2 py-1 rounded-full'>
        {tag}
      </span>
    ))}
  </div>
)