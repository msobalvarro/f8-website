import { UiLayout } from '@/components/ui/layout';
import { UiTitle } from '@/components/ui/title';

export default function About() {
  return (
    <UiLayout addClassName='flex flex-col md:gap-12'>
      <UiTitle
        title='Acerca de F8'
        description='Somos una empresa líder en tecnología, control y monitorización, que ofrece servicios de alta calidad y confianza a todos nuestros clientes.'
      />


      <article className='flex md:flex-row flex-col gap-10'>
        <div className='flex flex-1 gap-4 flex-col md:bg-gray-800/[0.2] md:border-2 md:border-slate-600 backdrop-blur p-8 rounded-xl'>
          <h2 className='text-2xl mb-8'>Misión</h2>
          <p>
            Proveer soluciones innovadoras en la planeación e implementación de proyectos informáticos, ayudando a nuestros clientes a alcanzar sus objetivos estratégicos mediante tecnología avanzada, procesos eficientes y un equipo de especialistas comprometidos con la excelencia y la transformación digital.
          </p>

          <p>
            Nuestra misión es construir relaciones sólidas y duraderas con nuestros clientes, basadas en la confianza, la transparencia y la entrega de resultados tangibles. Nos esforzamos por mantenernos a la vanguardia tecnológica, adaptándonos a las necesidades cambiantes del mercado y ofreciendo un servicio que supere las expectativas.
          </p>

          <p>
            Creemos en el impacto positivo que la tecnología puede tener en las organizaciones y en la sociedad. Por ello, nos dedicamos a diseñar e implementar soluciones sostenibles que fomenten el crecimiento y la innovación, mientras promovemos un entorno de aprendizaje continuo para nuestros colaboradores.
          </p>
        </div>

        <div className='flex flex-1 gap-4 flex-col md:bg-gray-800/[0.2] md:border-2 md:border-slate-600 backdrop-blur p-8 rounded-xl'>
          <h2 className='text-2xl mb-8'>Visión</h2>
          <p>
            Ser líderes en el sector tecnológico, reconocidos por nuestra capacidad de diseñar e implementar proyectos informáticos que generen valor sostenible, posicionándonos como socios estratégicos de empresas que buscan adaptarse y sobresalir en un entorno digital en constante evolución.
          </p>

          <p>
            Aspiramos a ser un referente de excelencia en la industria tecnológica, guiados por un compromiso inquebrantable con la calidad, la innovación y el impacto positivo. Nuestro objetivo es establecer un legado que inspire confianza en las empresas que confían en nosotros para transformar sus operaciones y alcanzar su máximo potencial.
          </p>

          <p>
            Imaginamos un futuro donde la tecnología y la creatividad se unan para resolver los desafíos más complejos de nuestros clientes. Con esta visión, trabajamos día a día para desarrollar soluciones que no solo cumplan con las necesidades actuales, sino que también anticipen y resuelvan los retos del mañana.
          </p>
        </div>
      </article>

      <article className='flex flex-col gap-10 md:flex-row md:justify-evenly md:items-center md:gap-10 md:bg-gray-800/[0.2] md:border-2 md:border-slate-600 backdrop-blur p-6 md:p-12 rounded-xl'>
        <figure className='self-center md:text-center md:p-10 flex flex-col items-center'>
          <img className='rounded-full w-32 md:w-64 mb-6' src='https://media.licdn.com/dms/image/v2/C4E03AQFzbMZIS7v7AA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660861748387?e=1742428800&v=beta&t=IbdZ2C6_yeog0p3rtYFSNymHLsOe2lKetj8sF-6BtcY' />
          <figcaption className='text-center'>
            <b>Daniel Pérez</b>
            <p className='text-gray-500'>Founder of F8Technologies</p>
          </figcaption>
        </figure>


        <div className='flex flex-col gap-10'>
          <p className='text-xl'>Ingeniero emprendedor con más de 10 años de experiencia en infraestructura informática. Con una profunda competencia analítica para analizar, diseñar y desarrollar soluciones empresariales escalables para nuestros clientes.</p>

          <div className='flex flex-col gap-4'>
            <h3 className='text-lg'>Habilidades:</h3>
            <ul className='list-disc'>
              <li>
                Alta Analítica al momento de analizar problemas informáticos
              </li>
              <li>
                Experiencia en liderar grupos de trabajos bajo extrema presión
              </li>
              <li>
                Visionario con las tendencias tecnologías
              </li>
              <li>
                Autodidáctico al momento de implementar nuevas tecnologías
              </li>
            </ul>
          </div>
        </div>
      </article>
    </UiLayout>
  )
}