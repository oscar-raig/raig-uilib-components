import React from 'react'
// import PropTypes from 'prop-types'

export default function FormUser() {
  const state = {
    userName: '',
    email: 'xxxx@xxx',
    password: '',
    repeatedPassword: '',
    acceptedTerms: true
  }
  const setState = state => {
    // eslint-disable-next-line no-console
    console.log('set state')
  }
  const handleSubmit = e => {
    // eslint-disable-next-line no-console
    console.log(state)
  }

  const onChangeUserName = e => {
    // eslint-disable-next-line no-console
    console.log(state)
    setState({userName: e.target.value})
  }

  const onChangeEmail = e => {
    // eslint-disable-next-line no-console
    console.log(state)
    setState({email: e.target.value})
  }

  const onChangePassword = e => {
    console.log(state)
    setState({password: e.target.value})
  }

  const onChangeRepeatedPassword = e => {
    console.log(state)
    setState({repeatedPassword: e.target.value})
  }

  const onChangeAcceptedTerms = e => {
    console.log(state)
    setState({acceptedTerms: e.target.checked})
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Nom:</label>
          <input
            id="name"
            name="userName"
            value={state.userName}
            onChange={onChangeUserName}
            placeholder="Intrdueix el teu nom"
          />
        </p>
        <p>
          <label htmlFor="email">email:</label>
          <input
            id="email"
            name="email"
            onChange={onChangeEmail}
            value={state.email}
            placeholder="Intrdueix el teu email"
          />
        </p>
        <p>
          <label htmlFor="password">Contrasenya:</label>
          <input
            id="password"
            name="password"
            value={state.password}
            onChange={onChangePassword}
            placeholder="Intrdueix la teva contrasenya"
          />
        </p>
        <p>
          <label htmlFor="repeatedPassword">Repeteix la Contrasenya:</label>
          <input
            id="repeatedPassword"
            name="repeatedPassword"
            value={state.repeatedPassword}
            onChange={onChangeRepeatedPassword}
            placeholder="Intrdueix la teva contrasenya un altra vegada"
          />
        </p>
        <p>
          <label>
            Condicions acceptades
            <input
              type="checkbox"
              onChange={onChangeAcceptedTerms}
              checked={state.acceptedTerms}
            />
          </label>
        </p>

        <button>Crear usuari</button>
      </form>
    </div>
  )
}

FormUser.displayName = 'FormUser'
FormUser.propTypes = {}
