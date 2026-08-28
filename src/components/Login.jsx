import { useState } from 'react'
import { motion } from 'framer-motion'

const PASSWORD = 'sadhappy123!@#'

export default function Login({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === PASSWORD) {
      onLogin()
    } else {
      setError(true)
      setPassword('')
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '0 5%' }}>
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        style={{ width: '100%', maxWidth: 360, textAlign: 'center' }}
      >
        <img src="/ucsLogo.jpeg" alt="UCS" style={{ height: 64, width: 64, borderRadius: 12, objectFit: 'contain', margin: '0 auto 16px', display: 'block' }} />
        <h1 style={{ fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 600, color: '#111', marginBottom: 4 }}>
          9<sup style={{ fontSize: '0.6em' }}>th</sup> Project Exhibition 2026
        </h1>
        <p style={{ fontSize: 13, color: '#999', marginBottom: 32 }}>University Of Computer Studies (Monywa)</p>

        <div style={{ position: 'relative' }}>
          <input
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false) }}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '12px 44px 12px 14px',
              borderRadius: 8,
              border: error ? '1px solid #e55' : '1px solid #eee',
              fontSize: 13,
              outline: 'none',
              background: '#fafafa',
              color: '#333',
            }}
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: 12, color: '#23A38F', cursor: 'pointer', fontWeight: 500 }}
          >
            {show ? 'Hide' : 'Show'}
          </button>
        </div>

        {error && <p style={{ fontSize: 12, color: '#e55', marginTop: 10 }}>Incorrect password</p>}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
            background: '#23A38F',
            color: '#fff',
            marginTop: 16,
            transition: 'all 0.15s',
          }}
        >
          Continue
        </button>
      </motion.form>
    </div>
  )
}