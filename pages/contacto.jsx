import React from 'react'
import Layout from '@/components/layout'
import s from '../styles/contacto.module.css'

const contacto = () => {
  return (
    <>
    <Layout>
    <main className = {s['main']}>
      <section className = {s['contacto-section']}>
        <article className = {s['contacto-section-contenido']}>
          <section className = {s['contacto-imagen-wrapper']}>
            <img className = {s['contacto-imagen']} src = '../assets/img/contacto/imagen.png' alt = 'asistencia técnica' />
          </section>


          <section className = {s['contacto-divider']}>
            <h1>ESTAMOS A TU DISPOSICIÓN</h1>
          </section>

          <section className = {s['contacto-cards']}>
            <article className = {s['contacto-card']}>
              <div className = {s['contacto-card-texto']}>
                <h3>Venta telefónica</h3>
                <p>Accede a los productos de nuestra web desde casa, sin tener que moverte.</p>
                <p>Contrata servicios, agenda viajes, elige destinos... Todo esto y mucho más desde nuestro número de teléfono, para que te sea lo más cómodo posible.</p>
              </div>
              <button className = {s['contacto-card-btn-phone']}><img className = {s['contacto-card-phone']} src = '../assets/icons/contact-cards/telefono.svg' alt = 'teléfono'/> 911 22 33 44</button>
            </article>

            <article className = {s['contacto-card']}>
              <div className = {s['contacto-card-texto']}>
                <h3>Agencias y cita previa</h3>
                <p>¿Necesitas información adicional sobre un viaje futuro? ¡Agenda una cita previa con nuestro equipo de soporte para ayudarte!</p>
              </div>
              <button className = {s['contacto-card-btn']}>Más información <img className = {s['contacto-card-btn-icono']} src = '../assets/icons/contact-cards/right-chevron.svg' alt = 'flecha'/></button>
            </article>

            <article className = {s['contacto-card']}>
              <div className = {s['contacto-card-texto']}>
                <h3>Asesor personal de viajes</h3>
                <p>¡De ahora en adelante puedes optar por contar con la ayuda de un asesor personal para que tus viajes salgan perfectos!</p>
              </div>
              <button className = {s['contacto-card-btn']}>Más información <img className = {s['contacto-card-btn-icono']} src = '../assets/icons/contact-cards/right-chevron.svg' alt = 'flecha'/></button>
            </article>
          </section>


          <section className = {s['formulario-contacto-wrapper']}>
            <form className = {s['formulario-contacto']}>
              <div className = {s['elemento-formulario-contacto']}>
                <label for = 'contact-user-name' className = {s['label']}>Nombre<span className = {s['obligatorio']}>*</span></label>
                <input id = 'contact-user-name' className = {s['elemento-formulario-contacto']} name = 'contact-user-name' type = 'text' placeholder = 'Introduce tu nombre...' onfocus = 'this.select()' required/>
              </div>

              <div className = {s['elemento-formulario-contacto']}>
                <label for = 'contact-email' className = {s['label']}>Correo electrónico<span className = {s['obligatorio']}>*</span></label>
                <input id = 'contact-email' className = {s['elemento-formulario-contacto']} name = 'contact-email' type = 'email' placeholder = 'Introduce tu correo electrónico...' onfocus = 'this.select()' required/>
              </div>

              <div className = {s['elemento-formulario-contacto']}>
                <label for = 'textarea' className = {s['label']}>Mensaje<span className = {s['obligatorio']}>*</span></label>
                <textarea id = 'textarea' name = 'textarea' className = {s['textarea']} placeholder = '¿Qué quieres decirnos?' required></textarea>
              </div>

              <input className = {s['submit-btn-contacto']} type = 'submit' value = 'ENVIAR'/>
            </form>
          </section>
        </article>
      </section>
    </main>

    </Layout>
    </>
  )
}

export default contacto