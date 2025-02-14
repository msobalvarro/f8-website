import { ContactForm } from '@/components/contact/contactForm'
import { ContactCard } from '@/components/contact/contactCard'
import { UiLayout } from '@/components/ui/layout'
import { UiTitle } from '@/components/ui/title'

export default function Contact() {

  return (
    <UiLayout addClassName='p-10'>

      <UiTitle
        title='Contáctanos'
        description='¿Tienes preguntas o necesitas asistencia? Estamos aquí para ayudarte. Puedes ponerte en contacto con nosotros a través de nuestro formulario en línea, enviándonos un mensaje por WhatsApp o escribiéndonos por correo electrónico.'
      />

      <section className='animate__animated animate__fadeInUp p-6 lg:p-10 md:rounded-xl md:bg-gray-800/[0.2] border-2 border-white/[0.2] rounded flex flex-col gap-8 bg-slate-900 mt-10 backdrop-blur shadow-xl w-full md:w-4/4 lg:w-4/6'>
        <ContactForm />

        <hr className='border-slate-500' />

        <ContactCard />
      </section>
    </UiLayout>
  )
}
