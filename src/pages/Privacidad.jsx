import Eyebrow from '../components/Eyebrow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Seo from '../components/Seo.jsx'
import { CONTACT_EMAIL, contactDetails } from '../data/content.js'

function Block({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-lg font-bold tracking-tight text-ink">{title}</h2>
      <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-muted">{children}</div>
    </section>
  )
}

export default function Privacidad() {
  return (
    <section className="bg-cream pt-32 pb-20">
      <Seo
        title="Política de privacidad | EOG Topografía SAS"
        description="Política de tratamiento de datos personales de EOG Topografía SAS conforme a la Ley 1581 de 2012."
        path="/privacidad"
      />
      <div className="container-x max-w-3xl">
        <Eyebrow line>Privacidad</Eyebrow>
        <SectionHeading className="mt-5">Política de tratamiento de datos</SectionHeading>
        <p className="mt-3 text-sm text-muted">Última actualización: 24 de junio de 2026</p>

        <Block title="1. Responsable del tratamiento">
          <p>
            EOG Topografía es responsable del tratamiento de los datos personales recolectados a
            través de este sitio web, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de
            Colombia (Habeas Data). Para cualquier asunto relacionado puedes escribirnos a{' '}
            <a className="text-accent underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Block>

        <Block title="2. Datos que recolectamos">
          <p>
            A través del formulario de contacto recolectamos: nombre, empresa (opcional), correo
            electrónico, teléfono, tipo de servicio, la descripción de tu proyecto y los archivos
            que decidas adjuntar. No recolectamos datos sensibles ni utilizamos cookies de
            seguimiento.
          </p>
        </Block>

        <Block title="3. Finalidad">
          <p>
            Usamos tus datos únicamente para responder tu solicitud, elaborar cotizaciones y darte
            seguimiento comercial y técnico. No vendemos ni compartimos tu información con terceros
            con fines publicitarios.
          </p>
          <p>
            El envío del formulario se procesa mediante el servicio Web3Forms, que entrega la
            información a nuestro correo. La verificación anti-bots se realiza con hCaptcha.
          </p>
        </Block>

        <Block title="4. Conservación">
          <p>
            Conservamos tus datos durante el tiempo necesario para atender tu solicitud y cumplir
            obligaciones legales o contractuales. Luego serán eliminados o anonimizados.
          </p>
        </Block>

        <Block title="5. Tus derechos">
          <p>
            Como titular puedes conocer, actualizar, rectificar y suprimir tus datos, así como
            revocar la autorización otorgada. Para ejercer estos derechos escríbenos a{' '}
            <a className="text-accent underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>{' '}
            y atenderemos tu solicitud en los plazos de ley.
          </p>
        </Block>

        <Block title="6. Seguridad">
          <p>
            Aplicamos medidas técnicas razonables para proteger tu información: cifrado en tránsito
            (HTTPS/HSTS), políticas de seguridad de contenido (CSP), protección anti-bots y
            minimización de datos. Ningún sistema es 100% infalible, pero trabajamos para mantener
            tu información segura.
          </p>
        </Block>

        <Block title="7. Contacto">
          <p>
            EOG Topografía · {contactDetails.location} · Tel. {contactDetails.phone} ·{' '}
            <a className="text-accent underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </Block>
      </div>
    </section>
  )
}
