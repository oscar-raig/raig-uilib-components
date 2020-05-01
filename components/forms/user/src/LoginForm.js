import React from 'react'
export default function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <p>
          <label htmlFor="email">email:</label>
          <input id="email" name="email" placeholder="Intrdueix el teu email" />
        </p>
        <p>
          <label htmlFor="password">Contrasenya:</label>
          <input
            id="password"
            name="password"
            placeholder="Intrdueix la teva contrasenya"
          />
        </p>
        <button>Crear usuari</button>
      </form>
    </div>
  )
}
