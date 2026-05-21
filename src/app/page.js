export default function Home() {
  return (
    <main style={{ maxWidth: '740px', margin: '0 auto', padding: '48px 24px 80px' }}>

      {/* Name - linked to LinkedIn */}
      <h1 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '6px' }}>
        <a
          href="https://linkedin.com/in/jeremiah-winford"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jeremiah Winford
        </a>
      </h1>

      {/* Links row */}
      <p style={{ fontSize: '14px', color: '#333', marginBottom: '20px' }}>
        <a href="mailto:jdw110@latech.edu">jdw110@latech.edu</a>
        {' x '}
        <a href="https://linkedin.com/in/jeremiah-winford" target="_blank" rel="noopener noreferrer">linkedin</a>
        {' x '}
        <a href="https://github.com/jdwnnn" target="_blank" rel="noopener noreferrer">github</a>
        {' x '}
        <a href="https://drive.google.com/file/d/1oGUugrkt-rGqXSaAqm-jjLLh2EAK7oMp/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>
      </p>

      {/* About */}
      <p style={{ marginBottom: '12px' }}>
        CIS Student at{' '}
        <a href="https://www.latech.edu" target="_blank" rel="noopener noreferrer">
          <strong>Louisiana Tech University</strong>
        </a>
        . Active U.S. Secret Security Clearance holder.
      </p>
      <p style={{ marginBottom: '12px' }}>
        Verified <strong>1,000+</strong> technical records against international regulatory standards.
        Maintaining encrypted communications for a <strong>3,000+</strong> soldier brigade as a Signal
        Support Systems Specialist with the{' '}
        <a href="https://www.la.ngb.army.mil" target="_blank" rel="noopener noreferrer">
          <strong>Louisiana Army National Guard</strong>
        </a>
        .
      </p>
      <p style={{ marginBottom: '20px', color: '#444' }}>
        Outside of work and school, I train MMA and BJJ, take things apart to understand how they
        work, and spend too much time thinking about space. Lately I've been exploring database
        architecture and data infrastructure.
      </p>

      <p style={{ marginBottom: '32px' }}>
        <strong>Interests:</strong> databases, infrastructure, cybersecurity, networking, AI research
      </p>

      {/* Experience */}
      <Section title="Experience">
        <ExperienceItem
          role="Signal Support Operations Specialist (25U)"
          company="Louisiana Army National Guard — 256th Infantry Brigade Combat Team"
          date="March 2025 – Present"
          location="Lafayette, LA"
        />
        <ExperienceItem
          role="Corporate Operations Intern"
          company="Diamond Offshore Drilling, Inc."
          date="June 2023 – September 2023"
          location="Houston, TX"
        />
      </Section>

      {/* Awards */}
      <Section title="Awards">
        <p style={{ marginBottom: '4px' }}>
          <strong>Iron Soldier Award</strong> – Army Achievement Medal (AAM)
        </p>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <ProjectItem
          name="Sentinel"
          href="https://github.com/jdwnnn"
          status="Building"
          description="Cyber threat intelligence dashboard for real-time monitoring and threat analysis."
        />
      </Section>

      {/* Education */}
      <Section title="Education">
        <ExperienceItem
          role="B.S. Computer Information Systems, Minor in Physics"
          company="Louisiana Tech University"
          date="September 2024 – Present"
          location="Ruston, LA"
        />
      </Section>

    </main>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {children}
      </div>
    </div>
  )
}

function ExperienceItem({ role, company, date, location }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
      <div>
        <p style={{ fontWeight: '700', marginBottom: '2px' }}>{role}</p>
        <p style={{ fontStyle: 'italic', color: '#444' }}>{company}</p>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0, color: '#444' }}>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </div>
  )
}

function ProjectItem({ name, href, status, description }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: '700' }}
        >
          {name}
        </a>
        <span style={{
          background: '#fef08a',
          color: '#854d0e',
          fontSize: '12px',
          padding: '1px 8px',
          borderRadius: '4px',
          fontWeight: '500'
        }}>
          {status}
        </span>
      </div>
      <p style={{ color: '#444' }}>{description}</p>
    </div>
  )
}
