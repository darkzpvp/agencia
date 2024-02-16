import React from 'react'
import Layout from '@/components/layout'
import s from '../styles/login.module.css'

const login = () => {
  return (
   <>
   <Layout>
   <main className = {s['main']}>
      <section className = {s['login-wrapper']}>
        <section className = {s['login-wrapper-contenido']}>
          <div className = {s['logo-login-wrapper']}>
            <a href = '../index.html'>
              <img className = {s['login-logo']} src = '../assets/img/logo/logo.png' alt = 'logo' />
            </a>
          </div>


          <h3>Inicia sesión para acceder a <span className = 'login-negrita'>nuestros productos</span></h3>


          <form className = {s['formulario-login']} action = '../index.html'> 
            <div className = {s['input-wrapper']}>
              <label for = 'usuario-input'>Usuario<span className = {s['obligatorio']}>*</span></label>
              <input id = 'usuario-input' className = {s['login-input']} type = 'text' placeholder = 'Introduce tu usuario...' onfocus = 'this.select()' autofocus required/>
            </div>

            <div className = {s['input-wrapper']}>
              <label for = 'password-input'>Contraseña<span className = 'obligatorio'>*</span></label>
              <input id = 'password-input' className = 'login-input' type = 'password' placeholder = 'Introduce tu contraseña...' onfocus = 'this.select()' required/>
              <p className = {s['problema-password-texto']}>¿Problemas con tu contraseña?</p>
            </div>

            <div className = {s['botones-wrapper']}>
            <button className = {s['login-btn-boton--iniciar-sesion']}>INICIAR SESIÓN</button>
              <button className = {s['login-btn-boton--registrar']} formnovalidate>REGISTRARSE</button>
            </div>
          </form>
        </section>
      </section>
    </main>



   </Layout>
   
   </>
  )
}

export default login