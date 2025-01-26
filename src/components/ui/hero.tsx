import { gradientNavbar } from './navbar'

export const Hero = () => {
  return (
    <section style={{ backgroundSize: '200%' }} className={`w-full md:p-12 p-2 min-h-[512px] justify-center flex flex-col gap-10  bg-[url('/panal.svg')] bg-no-repeat bg-center ${gradientNavbar}`}>
      <div className='flex flex-col text-center gap-8 items-center'>
        <h1 className='text-white md:text-5xl text-2xl font-bold mx-10'>
          Especialistas en instalación de CCTV e infraestructura informática.
        </h1>
        <p className='md:text-xl text-lg'>
          Lideres en tecnlogīa, servicios integrales de control y monitoro
        </p>
      </div>
    </section>
  )
}
