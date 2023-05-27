import React from 'react'
import './Loginmodule.css'

const Login = () => {

    const onChange = () => {

    }

    return ( 
        <>
            <main className='main'>
                <section className='secction'>
                    <h2>Iniciar Sesión</h2>
                    <form>
                        <article>
                            <input 
                                type="email"
                                id='email'
                                placeholder='Tu Email'
                                onChange={onChange} 
                            />
                        </article>
                        <article>
                            <input 
                                type="password"
                                id='password'
                                placeholder='Tu Contraseña'
                                onChange={onChange} 
                            />
                        </article>
                        <article className='Iniciar'>
                            <input 
                                type="submit" 
                                value='Iniciar Sesión'
                            />
                        </article>
                    </form>
                </section>
            </main>
        </>
     );
}
 
export default Login;