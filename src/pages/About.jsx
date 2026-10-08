import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About AI Subscribe - Best AI Company, Best Team, Best Mission</title>
        <meta name="description" content="Learn about AI Subscribe, the best AI subscription company. Best team, best mission, best values. Best about page for best AI platform." />
        <meta name="keywords" content="about AI, AI company, AI team, AI mission, best AI company, artificial intelligence company, AI startup" />
        <meta property="og:title" content="About AI Subscribe - Best AI Company" />
        <meta property="og:description" content="Learn about AI Subscribe, the best AI subscription company with best team and best mission." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop" />
        <link rel="canonical" href="https://aisubscription.example.com/about-us" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="app">
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <div className="container">
            <Link to="/" className="logo" aria-label="AI Subscribe Home">
              AI<span>Subscribe</span>
            </Link>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about" className="active">About</Link></li>
              <li><Link to="/blog">Resources</Link></li>
              <li><Link to="/contact" className="btn btn-primary nav-cta">Get Started</Link></li>
            </ul>
          </div>
        </nav>

        <main>
          <section className="section" style={{ paddingTop: '140px' }} aria-labelledby="about-title">
            <div className="container">
              <h1 id="about-title" className="section-title" style={{ fontSize: '48px', textAlign: 'left', marginBottom: '24px' }}>About <span style={{ color: '#0066cc' }}>AI Subscribe</span></h1>
              <p style={{ fontSize: '20px', color: '#666', maxWidth: '600px', lineHeight: '1.7' }}>
                We're on a mission to make best AI accessible to every best business. 
                One best subscription. Unlimited best possibilities.
              </p>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#f8faff' }} aria-labelledby="story-title">
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                <div>
                  <h2 id="story-title" style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a2e', marginBottom: '24px' }}>Our Best Story</h2>
                  <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px', fontSize: '18px' }}>
                    Founded in 2023 by best AI researchers and best engineers, AI Subscribe was born from a simple best insight: 
                    every best company needs best AI, but not every best company can afford best AI teams.
                  </p>
                  <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px', fontSize: '18px' }}>
                    We united best GPT-4, best Claude, best Gemini, and best open-source models under one best subscription. 
                    No best vendor lock-in. No best hidden costs. Just best AI that works.
                  </p>
                  <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px', fontSize: '18px' }}>
                    Today, 25,000+ best companies trust us with their best AI workloads. 
                    We process 1M+ best API calls daily with best 99.9% uptime.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop" 
                    alt="AI Subscribe team working on best AI" 
                    style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="mission-title">
            <div className="container">
              <h2 id="mission-title" className="section-title">Our Best Mission & Best Values</h2>
              <div className="grid grid-3" style={{ marginTop: '48px' }}>
                <article className="card" style={{ textAlign: 'center', borderTop: '4px solid #0066cc' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Accessibility</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>Democratize best AI for every best business, regardless of best size or best technical expertise.</p>
                </article>
                <article className="card" style={{ textAlign: 'center', borderTop: '4px solid #28a745' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔬</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Innovation</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>Continuously integrate best newest models and best technologies so you always have best cutting-edge AI.</p>
                </article>
                <article className="card" style={{ textAlign: 'center', borderTop: '4px solid #ffc107' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🤝</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Partnership</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>Your best success is our best success. We grow when you grow with best transparent, best fair pricing.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#f8faff' }} aria-labelledby="team-title">
            <div className="container">
              <h2 id="team-title" className="section-title">Meet Our Best Leadership</h2>
              <div className="grid grid-4" role="list">
                <article className="card" role="listitem" style={{ textAlign: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
                    alt="Dr. Sarah Chen, CEO" 
                    style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px', border: '4px solid #0066cc' }}
                  />
                  <h3 style={{ marginBottom: '4px', color: '#1a1a2e' }}>Dr. Sarah Chen</h3>
                  <p style={{ color: '#0066cc', fontWeight: '600', marginBottom: '8px' }}>CEO & Co-Founder</p>
                  <p style={{ color: '#666', fontSize: '14px' }}>Ex-Google Brain, PhD Stanford AI</p>
                </article>
                <article className="card" role="listitem" style={{ textAlign: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                    alt="Michael Torres, CTO" 
                    style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px', border: '4px solid #28a745' }}
                  />
                  <h3 style={{ marginBottom: '4px', color: '#1a1a2e' }}>Michael Torres</h3>
                  <p style={{ color: '#28a745', fontWeight: '600', marginBottom: '8px' }}>CTO & Co-Founder</p>
                  <p style={{ color: '#666', fontSize: '14px' }}>Ex-OpenAI, MS MIT Computer Science</p>
                </article>
                <article className="card" role="listitem" style={{ textAlign: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" 
                    alt="Emily Watson, COO" 
                    style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px', border: '4px solid #ffc107' }}
                  />
                  <h3 style={{ marginBottom: '4px', color: '#1a1a2e' }}>Emily Watson</h3>
                  <p style={{ color: '#856404', fontWeight: '600', marginBottom: '8px' }}>COO</p>
                  <p style={{ color: '#666', fontSize: '14px' }}>Ex-Stripe, MBA Harvard Business</p>
                </article>
                <article className="card" role="listitem" style={{ textAlign: 'center' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face" 
                    alt="David Park, VP Research" 
                    style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px', border: '4px solid #dc3545' }}
                  />
                  <h3 style={{ marginBottom: '4px', color: '#1a1a2e' }}>David Park</h3>
                  <p style={{ color: '#dc3545', fontWeight: '600', marginBottom: '8px' }}>VP Research</p>
                  <p style={{ color: '#666', fontSize: '14px' }}>Ex-DeepMind, PhD CMU Machine Learning</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="stats-title">
            <div className="container">
              <h2 id="stats-title" className="section-title">Best Impact in Numbers</h2>
              <div className="grid grid-4" style={{ textAlign: 'center', marginTop: '48px' }}>
                <div>
                  <div style={{ fontSize: '56px', fontWeight: '700', color: '#0066cc', marginBottom: '8px' }}>25K+</div>
                  <div style={{ color: '#666', fontSize: '18px' }}>Best Companies</div>
                </div>
                <div>
                  <div style={{ fontSize: '56px', fontWeight: '700', color: '#0066cc', marginBottom: '8px' }}>50+</div>
                  <div style={{ color: '#666', fontSize: '18px' }}>Best AI Models</div>
                </div>
                <div>
                  <div style={{ fontSize: '56px', fontWeight: '700', color: '#0066cc', marginBottom: '8px' }}>1M+</div>
                  <div style={{ color: '#666', fontSize: '18px' }}>Daily Best API Calls</div>
                </div>
                <div>
                  <div style={{ fontSize: '56px', fontWeight: '700', color: '#0066cc', marginBottom: '8px' }}>99.9%</div>
                  <div style={{ color: '#666', fontSize: '18px' }}>Best Uptime SLA</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#1a1a2e', color: 'white' }} aria-labelledby="join-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
              <h2 id="join-title" className="section-title" style={{ color: 'white' }}>Join Our Best Team</h2>
              <p style={{ color: '#999', fontSize: '18px', marginBottom: '32px', lineHeight: '1.7' }}>
                We're hiring best engineers, best researchers, and best operators to build the best AI platform. 
                Work on best problems with best people.
              </p>
              <Link to="/careers" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>View Best Open Roles</Link>
            </div>
          </section>
        </main>

        <footer className="footer" role="contentinfo">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link to="/" className="logo" style={{ color: 'white' }}>AI<span>Subscribe</span></Link>
                <p>Best AI subscription platform providing best AI tools, best models, and best services for best businesses worldwide.</p>
              </div>
              <nav aria-label="Product links">
                <h3 className="footer-title">Product</h3>
                <ul className="footer-links">
                  <li><Link to="/features">Best Features</Link></li>
                  <li><Link to="/pricing">Best Pricing</Link></li>
                  <li><Link to="/docs">Best Documentation</Link></li>
                  <li><Link to="/api">Best API Reference</Link></li>
                  <li><Link to="/status">Best Status</Link></li>
                </ul>
              </nav>
              <nav aria-label="Company links">
                <h3 className="footer-title">Company</h3>
                <ul className="footer-links">
                  <li><Link to="/about">Best About</Link></li>
                  <li><Link to="/blog">Best Blog</Link></li>
                  <li><Link to="/careers">Best Careers</Link></li>
                  <li><Link to="/press">Best Press</Link></li>
                  <li><Link to="/contact">Best Contact</Link></li>
                </ul>
              </nav>
              <nav aria-label="Legal links">
                <h3 className="footer-title">Legal</h3>
                <ul className="footer-links">
                  <li><Link to="/privacy">Best Privacy</Link></li>
                  <li><Link to="/terms">Best Terms</Link></li>
                  <li><Link to="/security">Best Security</Link></li>
                  <li><Link to="/cookies">Best Cookies</Link></li>
                  <li><Link to="/gdpr">Best GDPR</Link></li>
                </ul>
              </nav>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 AI Subscribe. All best rights reserved.</p>
              <div className="footer-social">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">Discord</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;