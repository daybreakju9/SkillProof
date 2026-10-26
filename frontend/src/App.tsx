import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState('')

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMsg('登录接口还未接入')
  }

  return (
    <div className="page">

      <div className="left">
        <div className="logo">
          <span className="logo-icon">S</span>
          <span>SkillProof</span>
        </div>

        <div>
          <h1>看清知识基础，<br />找到学习方向。</h1>
          <p>从岗位测评开始，了解自己的能力与不足。</p >
        </div>

        <p>Alpha</p >
      </div>

      <div className="right">
        <div className="box">
          <p className="phone-logo">SkillProof</p >

          <h2>欢迎回来</h2>
          <p className="info">登录后继续你的能力测评</p >

          <form onSubmit={login}>
            <label htmlFor="email">邮箱</label>
            <input
              id="email"
              type="email"
              placeholder="请输入邮箱"
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

            <button type="submit">登录</button>
          </form>

          {msg && <p className="msg" role="status">{msg}</p >}

          <p className="bottom">注册功能将在后续开发</p >
        </div>
      </div>

    </div>
  )
}

export default App
