import { useState } from 'react'
import menu from '../public/images/icon-menu.svg'
import logo from '../public/images/logo.svg'
import carritoIcon from '../public/images/icon-cart.svg'
import avatar from '../public/images/image-avatar.png'
import menosImg from '../public/images/icon-minus.svg'
import masImg from '../public/images/icon-plus.svg'
import closeImg from '../public/images/icon-close.svg'
import styles from './styles/Barra.module.css'
import styles2 from './styles/Contador.module.css'
import styles3 from './styles/Modal.module.css'
import Producto from './components/Producto'
import ModalCarrito from './components/ModalCarrito'

function App() {

  const [cantidad, setCantidad] = useState(0)
  const [alerta, setAlerta] = useState(false)
  const [carrito, setCarrito] = useState({})
  const [modal, setModal] = useState(false)
  const [menuOculto, setMenuOculto] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    if(cantidad <= 0){
      //Alerta de mensaje de error
      setAlerta(true)
      setTimeout(() => {
        setAlerta(false)
      }, 3000);
      return;
    }
    //Agrega al carrito
    setCarrito({
      cantidad,
      nombre: 'Fall Limited Edition Sneakers',
      precio: 125
    })
    //Reinicia los valores
    
  }

  return (
    <>
    <header className='contenedor'>
      {/*Barra Superior*/}
      <div className={styles.barra}>
        <div className={styles.menu}>
          {menuOculto ? (
            ''
          ): (
            <img src={menu} alt="Icon menu" onClick={() => setMenuOculto(true)}  />
          )}
         
          {menuOculto && (
          <>
            <div className={styles.menu_oculto}>
                <img src={closeImg} alt="Icon close" onClick={() => setMenuOculto(false)} className={styles.cerrar} />
                <nav className={styles.enlaces}>
                    <a href="">Collections</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </nav>
            </div>
            <div className={styles.modal_backdrop}></div>
          </>
          )}
          <img src={logo} alt="icon logo" />
          <nav className={styles.enlaces_desk}>
            <a href="">Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </nav>
        </div>
        <div className='flex'>
          <div className={styles.carrito}>
            <img  src={carritoIcon} alt="Imagen de carrito" onClick={() => setModal(!modal)} />
            {carrito.cantidad > 0 && <p className={styles.carrito_decoration}>{cantidad}</p> }
          </div>
          <img src={avatar} alt="Imagen de avatar" className={styles.avatar} />
        </div>
      </div> {/*Fin barra */}
    </header>
    <main>
      <div className='grid-main'>
      <Producto
        carrito={carrito}
        setCantidad={setCantidad}
        setCarrito={setCarrito}
        cantidad={cantidad}
        handleSubmit={handleSubmit}
        alerta={alerta}
      />
      {/* Modal de carrito de compras */}
      {modal && (
        <div className={styles3.carrito}>
          <p>Cart</p>
          {carrito.cantidad > 0 ? (
            <ModalCarrito carrito={carrito} setCarrito={setCarrito} />
          ): (
            <span>Your cart is empty.</span>
          )}
        </div>
      )}
      </div>
    </main>
    </>
  )
}

export default App
