const Authorization = () => {
    return (
        <>
            <form>
            <div className="form">
                <div className="inputs">
            <h2>Регистрация</h2>
           <label>Имя</label>
           <input type="text" className="auth-input" placeholder="Имя"/> 
           <label>E-mail</label>
           <input type="email" className="auth-input" placeholder="E-mail"/> 
           <label>Пароль</label>
           <input type="password" className="auth-input" placeholder="Пароль"/> 
           <label>Повторите пароль</label>
           <input type="password" className="auth-input" placeholder="Повторите пароль"/>
           <input type="checkbox"/>Я даю согласие на обработку моих персональных данных.
           <input type="button" value="Зарегистрироваться" className="btn btn-dark"/> 
           </div>
           Есть аккаунт? <a href="/login">Войти</a>
           </div> 
        </form>
        </>
    )
}

export default Authorization
