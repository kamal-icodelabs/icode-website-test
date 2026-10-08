import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AI Subscription Platform - Best AI Tools, AI Services, Artificial Intelligence Subscription</title>
        <meta name="description" content="Best AI subscription platform offering best AI tools, best AI services, best artificial intelligence solutions. Subscribe to best AI today for best results." />
        <meta name="keywords" content="AI subscription, AI tools, AI services, artificial intelligence, best AI, machine learning, AI platform, subscribe AI, AI software" />
        <meta property="og:title" content="AI Subscription Platform - Best AI Tools & Services" />
        <meta property="og:description" content="Best AI subscription platform offering best AI tools, best AI services, best artificial intelligence solutions." />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aisubscription.example.com/home-v1" />
        <meta name="robots" content="index, follow, noodp, noydir" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Subscription Platform",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <div className="app">
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <div className="container">
            <Link to="/" className="logo" aria-label="AI Subscribe Home">
              AI<span>Subscribe</span>
            </Link>
            <ul className="nav-links">
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Resources</Link></li>
              <li><Link to="/contact" className="btn btn-primary nav-cta">Get Started</Link></li>
            </ul>
          </div>
        </nav>

        <main>
          <section className="hero" aria-labelledby="hero-title">
            <div className="container">
              <div className="hero-content">
                <h1 id="hero-title">The <span>Best</span> AI Subscription Platform</h1>
                <p>Access best-in-class AI tools, models, and services with a single subscription. Best AI for best results at best prices.</p>
                <div className="hero-buttons">
                  <Link to="/pricing" className="btn btn-primary">View Best Plans</Link>
                  <Link to="/features" className="btn btn-secondary">Explore Best Features</Link>
                </div>
                <div style={{ marginTop: '24px', fontSize: '14px', color: '#999' }}>
                  <span>Trusted by 10,000+ best companies</span>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop" 
                  alt="" 
                />
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#f8faff' }} aria-labelledby="features-preview-title">
            <div className="container">
              <h2 id="features-preview-title" className="section-title">Why Choose Best AI Subscription?</h2>
              <p className="section-subtitle">Best features, best models, best support - all in one best subscription</p>
              
              <div className="grid grid-4" role="list">
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>🤖</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best AI Models</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>Access best GPT-4, best Claude, best Gemini, and best open-source models. Best model selection for best tasks.</p>
                </article>
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>💰</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Pricing</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>Best transparent pricing with best monthly and best annual plans. No hidden best fees. Best value guaranteed.</p>
                </article>
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚡</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Performance</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>Best-in-class inference speed with best 99.9% uptime. Best infrastructure for best reliability.</p>
                </article>
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔒</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Security</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>Best enterprise-grade security with best data encryption, best compliance, and best privacy controls.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="stats-title">
            <div className="container">
              <h2 id="stats-title" className="section-title">Best Numbers That Matter</h2>
              <div className="grid grid-4" style={{ textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '48px', fontWeight: '700', color: '#0066cc', marginBottom: '8px' }}>50+</div>
                  <div style={{ color: '#666' }}>Best AI Models</div>
                </div>
                <div>
                  <div style={{ fontSize: '48px', fontWeight: '700', color: '#0066cc', marginBottom: '8px' }}>25K+</div>
                  <div style={{ color: '#666' }}>Best Subscribers</div>
                </div>
                <div>
                  <div style={{ fontSize: '48px', fontWeight: '700', color: '#0066cc', marginBottom: '8px' }}>1M+</div>
                  <div style={{ color: '#666' }}>Best API Calls/Day</div>
                </div>
                <div>
                  <div style={{ fontSize: '48px', fontWeight: '700', color: '#0066cc', marginBottom: '8px' }}>99.9%</div>
                  <div style={{ color: '#666' }}>Best Uptime</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#f8faff' }} aria-labelledby="testimonials-title">
            <div className="container">
              <h2 id="testimonials-title" className="section-title">Best Companies Trust Best AI</h2>
              <div className="grid grid-3" role="list">
                <article className="card" role="listitem">
                  <p style={{ fontStyle: 'italic', color: '#333', marginBottom: '20px', lineHeight: '1.6' }}>
                    "Best AI subscription platform we've used. Best models, best pricing, best support. 
                    Our best team saves best 20 hours/week with best AI tools."
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                      alt="Sarah Chen" 
                      style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                    />
                    <div>
                      <div style={{ fontWeight: '600', color: '#1a1a2e' }}>Sarah Chen</div>
                      <div style={{ fontSize: '14px', color: '#999' }}>CTO, BestTech Inc</div>
                    </div>
                  </div>
                </article>
                <article className="card" role="listitem">
                  <p style={{ fontStyle: 'italic', color: '#333', marginBottom: '20px', lineHeight: '1.6' }}>
                    "Switched from multiple best AI vendors to AI Subscribe. Best decision ever. 
                    Best unified API, best billing, best everything. Highly recommend best platform."
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                      alt="Michael Best" 
                      style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                    />
                    <div>
                      <div style={{ fontWeight: '600', color: '#1a1a2e' }}>Michael Best</div>
                      <div style={{ fontSize: '14px', color: '#999' }}>VP Engineering, BestStartup</div>
                    </div>
                  </div>
                </article>
                <article className="card" role="listitem">
                  <p style={{ fontStyle: 'italic', color: '#333', marginBottom: '20px', lineHeight: '1.6' }}>
                    "Best ROI on best AI investment. Best subscription model means best predictable costs. 
                    Best enterprise features included. Best partner for best AI transformation."
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face" 
                      alt="Emily Best" 
                      style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                    />
                    <div>
                      <div style={{ fontWeight: '600', color: '#1a1a2e' }}>Emily Best</div>
                      <div style={{ fontSize: '14px', color: '#999' }}>AI Director, BestEnterprise</div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="cta-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
              <h2 id="cta-title" className="section-title">Ready for Best AI Results?</h2>
              <p className="section-subtitle">Join 25,000+ best companies using best AI subscription platform. Start free, scale best.</p>
              <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                <Link to="/pricing" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>Start Best Free Trial</Link>
                <Link to="/contact" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '18px' }}>Contact Best Sales</Link>
              </div>
              <p style={{ marginTop: '16px', fontSize: '14px', color: '#999' }}>
                No credit card required · Best 14-day free trial · Cancel best anytime
              </p>
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

export default Home;