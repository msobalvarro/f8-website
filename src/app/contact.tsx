import { ContactForm } from '@/components/contact/contactForm'
import { ContactCard } from '@/components/contact/contactCard'
import { UiLayout } from '@/components/ui/layout'
import { UiTitle } from '@/components/ui/title'

export default function Contact() {

  return (
    <UiLayout addClassName='p-10'>

      <UiTitle
        title='Envía un Mensaje a F8'
        description='¿Tienes preguntas o necesitas asistencia? Contáctanos a través de formulario, WhatsApp ó correo electrónico para obtener soporte rápido.'
      />

      <section className='fade-in p-6 lg:p-10 rounded flex flex-col gap-8 bg-gray-800/[0.2] mt-10 backdrop-blur shadow-xl w-full md:w-4/4 lg:w-4/6'>
        <ContactForm />

        <hr className='border-slate-100' />

        <ContactCard />
      </section>
    </UiLayout>
  )
}
