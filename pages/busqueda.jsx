import React from 'react'
import Layout from '@/components/layout'

const busqueda = () => {
  return (
  <>
  <Layout>
    <main className = 'main'>
      <section className = 'search-bar'>
        <div className = 'search-bar-wrapper'>
          <form className = 'search-bar-form'>
            <div className = 'search-bar-input1-wrapper'>
              <input className = 'search-bar-input search-bar-input1' type = 'text' placeholder = '¿Donde quieres ir?' autocomplete = 'off' onfocus = 'this.select()' />
            </div>
            <select className = 'search-bar-input search-bar-input2'>
              <option value = '' selected disabled>Selecciona una opción</option>
              <option value = '1'>Opción 1</option>
              <option value = '2'>Opción 2</option>
              <option value = '3'>Opción 3</option>
            </select>
            <select className = 'search-bar-input search-bar-input3'>
              <option value = '' selected disabled>Selecciona una opción</option>
              <option value = '1'>Opción 1</option>
              <option value = '2'>Opción 2</option>
              <option value = '3'>Opción 3</option>
            </select>
            <button className = 'search-bar-btn'>BUSCAR</button>
          </form>
        </div>
      </section>


      <section className = 'divider'>
        <h1>PODRÍA INTERESARTE...</h1>
      </section>


      <section className = 'productos-busqueda'>
        <article className = 'productos-busqueda-contenido'>
           <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen1.png' alt = 'Aqualand'/>
            <h1>Aqualand</h1>
            <p>Sumérgete en las movidas aguas de Aqualand y disfruta en familia de una experiencia inolvidable</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen2.png' alt = 'Italia'/>
            <h1>Italia</h1>
            <p>Visita las impresionantes estructuras de Italia y maravíllate con su arte, historia y exquisita gastronomía mediterránea</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen3.png' alt = 'Grecia'/>
            <h1>Grecia</h1>
            <p>Explora la cuna de la civilización occidental en Grecia: templos antiguos, playas de ensueño y una hospitalidad inigualable te esperan</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen4.png' alt = 'Eslovenia'/>
            <h1>Eslovenia</h1>
            <p>Descubre la joya escondida de Europa en Eslovenia: paisajes naturales deslumbrantes, castillos encantadores y una cultura cautivadora te aguardan</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen5.png' alt = 'Costa Oeste'/>
            <h1>Costa Oeste</h1>
            <p>Embárcate en un viaje épico por la Costa Oeste de EE. UU.: desde la majestuosidad del Gran Cañón hasta las playas de California</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen6.png' alt = 'Marruecos'/>
            <h1>Marruecos</h1>
            <p>Sumérgete en un caleidoscopio cultural en Marruecos, donde la arquitectura, los zocos y el desierto tejen una experiencia inolvidable</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen7.png' alt = 'Egipto'/>
            <h1>Egipto</h1>
            <p>Explora la tierra de los faraones en Egipto, donde la grandeza de las pirámides y el misterio del Nilo te cautivarán</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen8.png' alt = 'Laos'/>
            <h1>Laos</h1>
            <p>Descubre la serenidad de Laos: templos dorados, naturaleza exuberante y una cultura auténtica</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen9.png' alt = 'Birmania'/>
            <h1>Birmania</h1>
            <p>Los templos dorados y la autenticidad cultural te sumergirán en un viaje único e inolvidable</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen10.png' alt = 'Montenegro'/>
            <h1>Montenegro</h1>
            <p>Paisajes escarpados, costa impresionante y encanto medieval te aguardan para una aventura inolvidable</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen11.png' alt = 'Georgia'/>
            <h1>Georgia</h1>
            <p>Montañas majestuosas, gastronomía única y hospitalidad incomparable te esperan para una experiencia fascinante</p>
          </article>
          <article className = 'busqueda-item'>
            <img src = '../assets/img/productos-busqueda/imagen12.png' alt = 'Irán'/>
            <h1>Irán</h1>
            <p>Mosaicos centenarios, mercados bulliciosos y una historia que teje un viaje único e inolvidable</p>
          </article> 
        </article>
      </section>
    </main>
    </Layout>
  </>
  )
}

export default busqueda