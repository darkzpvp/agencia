import React from 'react'
import s from '../styles/header.module.css'

const header = () => {
  return (
   <>

   <header className = {s['main-header']}>
      <section className = {s.header}>
        <article className={s['contenido-header']}>
          <div className = {s['icono-menu-lateral-header icono-menu-lateral-wrapper hidden']}>
            <img className = {s['icono-menu-lateral']} src = '/assets/icons/header/menu.svg' alt = 'menu lateral' />
          </div>

          <div className = {s['logo-wraper']}>
            <a href = '#'>
              <img className = {s['logo']} src = '/assets/img/logo/logo.png' alt = 'logo' />
            </a>
          </div>

          <div className = {s['opciones-header']}>
            <div className = {s['opcion-header agencia']}>
              <a href = '#'>
                <img className = {s['icono-header']} src = '/assets/icons/header/calendario.png' alt = 'calendario' />
                <p>Agencia y cita previa</p>
              </a>
            </div>

          

            <div className = {s['barra-divisora-header']}></div>

         

            <div className = {s['opcion-header ayuda']}>
              <a href = 'pages/contacto.html'>
                <img className = {s['icono-header']} src = '/assets/icons/header/informacion.png' alt = 'ayuda' />
                <p>Centro de ayuda</p>
              </a>
            </div>

        

            <div className = {s['barra-divisora-header']}></div>

         

            <div className = {s['opcion-header identificate']}>
              <a href = 'pages/login.html'>
                <img className = {s['icono-header']} src = '/assets/icons/header/usuario.png' alt = 'identificate' />
                <p>Identifícate</p>
              </a>
            </div>

   

            <div className = {s['barra-divisora-header']}></div>

      

            <div className = {s['opcion-header contacto']}>
              <a href = 'pages/contacto.html'>
                <img className = {s['icono-header']} src = '/assets/icons/header/telefono.svg' alt = 'contacto' />
                <p>911 22 33 44</p>
              </a>
            </div>
          </div>
        </article>
      </section>


      <nav className = {s['nav']}>
        <article className = {s['contenido-nav']}>
          <div className = {s['icono-menu-lateral-wrapper']}>
            <img className = {s['icono-menu-lateral-nav']} src = '/assets/icons/nav/menu.svg' alt = 'menu lateral' />
          </div>
  
          <div>
            <ul className = {s['lista-opciones-nav']}>
               
              <li>CARIBE</li><div className = {s['barra-divisora-nav']}></div>
              <li>ISLAS</li><div className = {s['barra-divisora-nav']}></div>
              <li><a href = '#choose-trip'>ELIGE TU VIAJE</a></li><div className = {s['barra-divisora-nac']}></div>
              <li><a href = '#offers-section'>OFERTAS</a></li><div className = {s['lista-opciones nav']}></div>
              <li><a href = '#guides-section'>GUÍAS DE VIAJE</a></li><div className = {s['lista-opciones nav']}></div>
              <li>DISNEY</li><div className = {s['lista-opciones nav']}></div>
              <li className = {s['cta-btn']}>CTA</li>
            </ul>
          </div>
        </article>
      </nav>
    </header>
   </>
  )
}

export default header