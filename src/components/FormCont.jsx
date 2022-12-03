import estilo from '../sass/formCont.module.scss'

function FormCont() {

  return (
    <section className={estilo.contForm} >
      <form
        action="https://formsubmit.co/miltonaguilar142018@gmail.com"
        method="POST"
        className={estilo.formulario}
        id='formCont' >
        <div className={estilo.contenedor} >
          <h1>FORMULARIO DE CONTACTO</h1>

          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder='Nombre' required name='name' />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' required name='email' />

          <label htmlFor="cell">Numero</label>
          <input type="number" placeholder='Celular' required name='cell' />

          <input type="submit" value='Enviar' className={estilo.btnEnviar} />
          <input type="hidden" name="_next" value="https://miltonr12.github.io/"></input>
          <input type="hidden" name="_captcha" value="false"></input>
        </div>
      </form>
    </section>
  )
}

export default FormCont