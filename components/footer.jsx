import React from 'react'
import s from '../styles/footer.module.css'

const footer = () => {
  return (
    <>
    <footer className = {s['main-footer']}>
      <section className = {s['footer']}>
        <article className = {s['contenido-footer']}>
          <div className = {s['textos-footer']}>
            <div className = {s['seccion-texto-footer']}>
              <h3>Sobre nosotros</h3>
              <ul>
                <li>Quiénes somos</li>
                <li>Sostenibilidad</li>
                <li>Tarjeta AventuraXplora</li>
                <li>Trabaja con nosotros</li>
                <li>AventuraXplora</li>
                <li>Afiliados</li>
              </ul>
            </div>


            <div className = {s['barra-divisoria-footer']}></div>


            <div className = {s['seccion-texto-footer']}>
              <h3>Planea tu viaje</h3>
              <ul>
                <li>Blog de viajes</li>
                <li>Guías de viaje</li>
                <li>Vente de maratón</li>
                <li>Catálogos</li>
                <li>Grupos</li>
              </ul>
            </div>


            <div className = {s['barra-divisoria-footer']}></div>


            <div className = {s['seccion-texto-footer']}>
              <h3>Información importante</h3>
              <ul>
                <li>Condiciones generales</li>
                <li>Política de privacidad</li>
                <li>Centro de ayuda</li>
                <li>Viajar a EE.UU.</li>
                <li>Auto check-in</li>
                <li>Política de cookies</li>
              </ul>
            </div>


            <div className = {s['barra-divisoria-footer']}></div>


            <div className = {s['seccion-texto-footer']}>
              <h3>Internacional</h3>
              <div className = {s['footer-internacional-columnas']}>
                <div className = {s['footer-internacional-columna-1']}>
                  <ul>
                    <li>Portugal</li>
                    <li>Chile</li>
                    <li>Perú</li>
                    <li>Panamá</li>
                    <li>R. Dominicana</li>
                  </ul>
                </div>

                <div className = {s['footer-internacional-columna-2']}>
                  <ul>
                    <li>Colombia</li>
                    <li>Argentina</li>
                    <li>México</li>
                    <li>Ecuador</li>
                    <li>Uruguay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className = {s['logo--redes-sociales']}>
            <div className = {s['barra-divisoria-footer--segundo-wrapper hidden']}></div>

            <div className = {s['logo-wrapper-footer']}>
              <a href = 'index.html'>
                <img className = {s['logo']} src = 'assets/img/logo/logo.png' alt = 'logo' />
              </a>
            </div>

            <div className = {s['barra-divisoria-footer--segundo-wrapper hidden']}></div>

            <div className = {s['redes-sociales']}>
              <h4>Síguenos en:</h4>
              <div className = {s['redes-sociales-iconos']}>
                <div className = {s['twitter-wrapper']}>
                  <img className = {s['icono-social-footer']} src = 'assets/icons/socials/twitter.svg' alt = 'twitter' />
                </div>
                <div className = {s['instagram-wrapper']}>
                  <img className = {s['icono-social-footer']} src = 'assets/icons/socials/instagram.svg' alt = 'instagram' />
                </div>
                <div className = {s['youtube-wrapper']}>
                  <img className = {s['icono-social-footer']} src = 'assets/icons/socials/youtube.svg' alt = 'youtube' />
                </div>
                <div className = {s['tiktok-wrapper']}>
                  <img className = {s['icono-social-footer']} src = 'assets/icons/socials/tiktok.svg' alt = 'tiktok' />
                </div>
                <div className = {s['facebook-wrapper']}>
                  <img className = {s['icono-social-footer']} src = 'assets/icons/socials/facebook.svg' alt = 'facebook' />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </footer>
    
    </>
  )
}

export default footer