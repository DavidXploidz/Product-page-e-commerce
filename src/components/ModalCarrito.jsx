
import styles3 from '../styles/Modal.module.css'
import imagen1 from '../../public/images/image-product-1-thumbnail.jpg'
import removeImg from '../../public/images/icon-delete.svg'

const ModalCarrito = ({carrito, setCarrito}) => {
    const {cantidad, nombre, precio} = carrito

    const obtenerTotal = (cantidad, precio) => {
        return cantidad * precio

    }


  return (
    <div className={styles3.contenido} >
        <div className={styles3.grid}>
            <div><img src={imagen1} alt="Imagen tumb" className={styles3.imgTumb} /></div>
            <div>
                <h4>{nombre}</h4>
                <div className={styles3.precio}>
                    <p>${precio} x {cantidad} <span>${obtenerTotal(precio, cantidad)}</span></p>
                </div>
            </div>
            <div>
                <img src={removeImg} alt="imagen de remove item" onClick={() => setCarrito({})} />
            </div>
        </div>
        <button className={styles3.btnCheckout}>Chekout</button>

    </div>
  )
}

export default ModalCarrito