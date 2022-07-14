import { useState } from 'react'
import styles from '../styles/Producto.module.css'
import ImgProduct1 from '../../public/images/image-product-1.jpg'
import ImgProduct1Tumb from '../../public/images/image-product-1-thumbnail.jpg'
import ImgProduct2Tumb from '../../public/images/image-product-2-thumbnail.jpg'
import ImgProduct3Tumb from '../../public/images/image-product-3-thumbnail.jpg'
import ImgProduct4Tumb from '../../public/images/image-product-4-thumbnail.jpg'
import arrowNext from '../../public/images/icon-next.svg'
import arrowPrev from '../../public/images/icon-previous.svg'
import styles2 from '../styles/Contador.module.css'
import menosImg from '../../public/images/icon-minus.svg'
import masImg from '../../public/images/icon-plus.svg'
const Producto = ({carrito, setCarrito, cantidad,setCantidad, handleSubmit, alerta}) => {

    const [index, setIndex] = useState(1)
    const objetoPersonas = [1,2,3,4,5]


    const checarPosicion = (numero) => {
        if(numero > objetoPersonas.length - 1){
          return 1
        }
        if(numero < 1){
          return objetoPersonas.length - 1
        }
        return numero
      }
    
      const handlePrev = () => {
        // console.log('Click en previous');
        setIndex((index) => {
          let newIndex = index - 1
          return checarPosicion(newIndex)
        })
      }
    
      const handleNext = () => {
          // console.log('Click en next');
        setIndex((index) => {
          let newIndex = index + 1
          return checarPosicion(newIndex)
        })
      }

  return (
    <div className='grid-producto content'>
        <div className='imagen'>
            <style jsx>{`
                .imagen{
                    background-image: url(${`../../public/images/image-product-${index}.jpg`});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center ;
                    height: 320px;
                    margin-top: 1.5rem;
                    position: relative;
                }
                @media (min-width: 768px) {
                   .imagen{
                      border-radius: 1rem;
                      height: 430px;
                      width: 430px;
                   }
                }
            `}
            </style>
            <div className='botones'>
              <div className={styles.btn_prev} onClick={handlePrev}>
                  <img src={arrowPrev} alt="icon prev" />
              </div>
              <div className={styles.btn_next} onClick={handleNext}>
                  <img src={arrowNext} alt="icon next" />
              </div>
            </div>
            <div className='grid-images'>
                <img src={ImgProduct1Tumb} alt="imagen" onClick={() => setIndex(1)} />
                <img src={ImgProduct2Tumb} alt="imagen"  onClick={() => setIndex(2)} />
                <img src={ImgProduct3Tumb} alt="imagen"   onClick={() => setIndex(3)}/>
                <img src={ImgProduct4Tumb} alt="imagen"   onClick={() => setIndex(4)}/>
            </div>
        </div>
       
        <div className={`contenedor ${styles.contenido} `}>
            <h4 className={styles.company}>SNEAKER COMPANY</h4>
            <h2 className={styles.titulo}>Fall Limited Edition Sneakers</h2>
            <p className={styles.descripcion}>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className={styles.precios}>
                <div className='flex'>
                    <p className={styles.precio_actual}>$125.00</p>
                    <p className={styles.descuento}>50%</p>
                </div>
                
                <p className={styles.precio_original}>$250.00</p>
            </div>
            {/*Formulario para agregar articulo al carrito */}
            <form className='formulario'>
              <div className={styles2.contador}>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    if(cantidad <= 0){
                      return;
                    }else{
                      setCantidad(cantidad - 1)
                    }
                  }}>
                    <img src={menosImg} alt="icon minus" />
                </button>
                <p className={styles2.cantidad}>{cantidad}</p>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    setCantidad(cantidad + 1)
                  }}>
                    <img src={masImg} alt="icon plus" />
                </button>
              </div>
              <div className={styles2.carrito} onClick={handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles2.img_carrito} fill="transparent" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Add to cart</span>
              </div>
              {alerta && <p className={styles2.alerta}>**Add at least one item**</p>}
            </form>
        </div>
    </div>
  )
}

export default Producto