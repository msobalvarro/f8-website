import logo from '@/assets/logo/F8.svg'

export const Hero = () => {
  return (
    <section className={`w-full md:p-12 p-2 min-h-[512px] justify-center flex flex-col gap-10 backdrop-blur bg-[url('./panal.svg')] bg-no-repeat bg-cover`}>
      <div className='flex flex-col text-center gap-12 items-center'>
        <img className='w-[256px] h-auto fade-in' alt='logo' src={logo} />

        <h1 className='text-white md:text-5xl text-2xl font-bold mx-10 animate__animated animate__fadeInDown'>
          Especialistas en instalación de CCTV e infraestructura informática.
        </h1>
        <p className='md:text-xl text-lg animate__animated animate__fadeInUp'>
          Lideres en tecnlogīa, servicios integrales de control y monitoro
        </p>
      </div>
    </section>
  )
}
