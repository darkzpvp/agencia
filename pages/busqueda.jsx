import React from 'react'
import Layout from '@/components/layout'
import styles from '../styles/busqueda.module.css'
import jsonData from '../data/datos.json'; 

const busqueda = () => {
    const data = jsonData; 


    return (
        
        <>
     <Layout>
      <main className='main'>
        <section className='search-bar'>
          {/* Aquí va el código para el formulario de búsqueda */}
        </section>

       

        <div className={styles['productos-busqueda']}> 
        <section className={styles['busqueda-item']}>
          <h1>PODRÍA INTERESARTE...</h1>
        </section>
          <div className={styles['productos-busqueda-contenido']}> 
          
            {jsonData.map((item, index) => (
              <div className={styles['busqueda-item']} key={index}>
                <img src={item.img_src} alt={item.pais} />
                <h1>{item.pais}</h1>
                <p>{item.descripcion}</p>
                
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
      </>
    );
  }

export default busqueda