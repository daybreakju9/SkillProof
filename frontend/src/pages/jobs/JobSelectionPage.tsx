import '../../styles/jobs.css'

const job = {
  name: '后端开发',
  description: '围绕后端开发所需的计算机基础知识，了解自己的能力结构。',
  dimensions: ['编程基础', '数据结构', '算法思维', '计算机网络', '操作系统', '工程实践'],
}

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
          <span className="job-label">示例内容</span>
          <h2>{job.name}</h2>
          <p>{job.description}</p>
          <h3>六维能力方向</h3>
          <ul>
            {job.dimensions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="job-status">岗位信息与测评入口尚未接入，敬请期待。</p>
          <button type="button" disabled>暂未开放</button>
        </article>
      </div>
    </main>
  )
}
