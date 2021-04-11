const Login = () => {
    return (
        <form>
            <div className="form">
                <div className="inputs">
            <h2>Авторизация</h2>
           <label>Телефон</label>
           <input type="tel" className="auth-input" placeholder="+998(...)"/> 
           <label>Пароль</label>
           <input type="password" className="auth-input" placeholder="Пароль"/> 
           <input type="checkbox"/>Запомнить пароль
           <input type="button" value="Войти" className="btn btn-dark"/> 
           <input type="button" value="Зарегистрироваться" className="btn btn-light"/>
           <a href="/forget" className="grey-text">Забыли пароль?</a>
           </div>
           </div> 
        </form>
    )
}

export default Login
