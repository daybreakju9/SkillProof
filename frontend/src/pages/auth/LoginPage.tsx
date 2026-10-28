import { useState, type FormEvent } from 'react'
import AuthLayout from '../../components/auth/AuthLayout'
import Brand from '../../components/auth/Brand'

export default function LoginPage({ navigate }: { navigate: (path: string) => void }) {
  const [msg, setMsg] = useState('')

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMsg('登录接口还未接入')
  }

  return (
    <AuthLayout>
      <div className="auth-box">
        <div className="mobile-brand"><Brand /></div>
        <p className="form-tag">账号登录</p>
        <h1>欢迎回来</h1>
        <p className="form-desc">登录 SkillProof，继续你的能力测评。</p>
        <form onSubmit={login}>
          <label htmlFor="email">邮箱</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            required
          />
          <label htmlFor="password">密码</label>
          <input
            id="password"
            type="password"
            placeholder="请输入密码"
            autoComplete="current-password"
            required
          />
          <button className="primary-button" type="submit">登录</button>
        </form>
        {msg && <p className="form-message" role="status">{msg}</p>}
        <div className="divider"><span>或</span></div>
        <button className="secondary-button" type="button" onClick={() => navigate('/register')}>
          注册新账号
        </button>
      </div>
    </AuthLayout>
  )
}
