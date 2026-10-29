import '../../styles/jobs.css'

export default function JobSelectionPage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <main className="jobs-page">
      <div className="jobs-content">
        <button className="jobs-back" type="button" onClick={() => navigate('/login')}>
          ← 返回登录
        </button>
        <p className="jobs-tag">SKILLPROOF · ALPHA</p>
        <h1>选择目标岗位</h1>
        <p className="jobs-desc">选择岗位，了解对应的能力评估方向。</p>
        <article className="job-card">
          <span className="job-label">岗位选择</span>
          <h2>岗位信息暂未开放</h2>
          <p className="job-status">岗位接口尚未接入，暂时无法选择岗位或开始测评。</p>
          <button type="button" disabled>暂未开放</button>
        </article>
      </div>
    </main>
  )
}
