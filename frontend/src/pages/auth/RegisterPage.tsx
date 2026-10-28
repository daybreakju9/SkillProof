import { useState, type FormEvent } from 'react'
import AuthLayout from '../../components/auth/AuthLayout'
import Brand from '../../components/auth/Brand'

export default function RegisterPage({ navigate }: { navigate: (path: string) => void }) {
  const [msg, setMsg] = useState('')

  function register(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMsg('注册接口还未接入')
  }

  return (
    <AuthLayout>
      <div className="auth-box">
        <div className="mobile-brand"><Brand /></div>
        <p className="form-tag">账号注册</p>
        <h1>创建账号</h1>
        <p className="form-desc">注册 SkillProof，开始了解你的能力结构。</p>
        <form onSubmit={register}>
          <label htmlFor="register-email">邮箱</label>
          <input
            id="register-email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            required
          />
          <label htmlFor="register-password">密码</label>
          <input
            id="register-password"
            type="password"
            placeholder="请输入密码"
            autoComplete="new-password"
            required
          />
          <button className="primary-button" type="submit">注册</button>
        </form>
        {msg && <p className="form-message" role="status">{msg}</p>}
        <div className="divider"><span>已有账号？</span></div>
        <button className="secondary-button" type="button" onClick={() => navigate('/login')}>
          返回登录
        </button>
      </div>
    </AuthLayout>
  )
}
