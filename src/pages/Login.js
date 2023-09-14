const Login = () => {
  const view = `
    <section class="login">
        <img class="logo-small" src="./assets/images/Logo-small-light.png" alt="">
        <article class="login__form">
            <h3>Login</h3>
            <form class="form_content" action="" method="post">
                <input class="input" type="text" id="login__email" placeholder="Ejemplo.342@hotmail.com">
                <input class="input" type="password" class="login__password" placeholder="password123">
                <a class="submit-input" href="#intranet">Enviar</a>
            </form>
        </article>
    </section>
    `;
  return view;
};

export default Login;
