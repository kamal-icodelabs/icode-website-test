import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <>
      <Helmet>
        <title>Best AI Features - Best Models, Best Tools, Best API | AI Subscribe</title>
        <meta name="description" content="Discover best AI features: best GPT-4, best Claude, best Gemini, best unified API, best fine-tuning, best analytics. Best AI platform features." />
        <meta name="keywords" content="AI features, GPT-4, Claude, Gemini, AI API, fine-tuning, AI analytics, best AI tools, machine learning features" />
        <meta property="og:title" content="Best AI Features - Models, Tools & API | AI Subscribe" />
        <meta property="og:description" content="Discover best AI features including best models, best unified API, best fine-tuning, and best analytics." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop" />
        <link rel="canonical" href="https://aisubscription.example.com/features-page" />
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
              <li><Link to="/features" className="active">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Resources</Link></li>
              <li><Link to="/contact" className="btn btn-primary nav-cta">Get Started</Link></li>
            </ul>
          </div>
        </nav>

        <main>
          <section className="section" style={{ paddingTop: '140px', backgroundColor: '#f8faff' }} aria-labelledby="features-hero-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
              <h1 id="features-hero-title" className="section-title" style={{ fontSize: '48px' }}>Best AI <span style={{ color: '#0066cc' }}>Features</span></h1>
              <p className="section-subtitle" style={{ fontSize: '20px' }}>
                Everything you need to build best AI-powered applications. Best models, best tools, best infrastructure - all included.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="models-title">
            <div className="container">
              <h2 id="models-title" className="section-title">Best AI Models Included</h2>
              <p className="section-subtitle">Access best-in-class models from best leading providers through one best unified API</p>
              
              <div className="grid grid-4" role="list">
                <article className="card" role="listitem" style={{ borderTop: '4px solid #0066cc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#e7f3ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '24px' }}>🤖</span>
                    </div>
                    <span className="badge badge-enterprise">OpenAI</span>
                  </div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>GPT-4o & GPT-4 Turbo</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best multimodal reasoning, best coding, best analysis. Best 128k context window.</p>
                  <ul style={{ listStyle: 'none', color: '#666', lineHeight: '2' }}>
                    <li>✓ Best text generation</li>
                    <li>✓ Best vision capabilities</li>
                    <li>✓ Best function calling</li>
                    <li>✓ Best JSON mode</li>
                  </ul>
                </article>
                <article className="card" role="listitem" style={{ borderTop: '4px solid #28a745' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#e7f8ed', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '24px' }}>🧠</span>
                    </div>
                    <span className="badge" style={{ background: '#e7f8ed', color: '#28a745' }}>Anthropic</span>
                  </div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Claude 3.5 Sonnet & Opus</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best reasoning, best analysis, best long-form content. Best 200k context window.</p>
                  <ul style={{ listStyle: 'none', color: '#666', lineHeight: '2' }}>
                    <li>✓ Best complex reasoning</li>
                    <li>✓ Best document analysis</li>
                    <li>✓ Best creative writing</li>
                    <li>✓ Best code review</li>
                  </ul>
                </article>
                <article className="card" role="listitem" style={{ borderTop: '4px solid #ffc107' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#fff8e1', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '24px' }}>✨</span>
                    </div>
                    <span className="badge" style={{ background: '#fff8e1', color: '#856404' }}>Google</span>
                  </div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Gemini 1.5 Pro & Flash</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best multimodal, best 1M+ context, best speed. Best for best large-scale tasks.</p>
                  <ul style={{ listStyle: 'none', color: '#666', lineHeight: '2' }}>
                    <li>✓ Best long context</li>
                    <li>✓ Best video understanding</li>
                    <li>✓ Best audio processing</li>
                    <li>✓ Best code generation</li>
                  </ul>
                </article>
                <article className="card" role="listitem" style={{ borderTop: '4px solid #dc3545' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: '#fdeaea', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '24px' }}>🦙</span>
                    </div>
                    <span className="badge" style={{ background: '#fdeaea', color: '#dc3545' }}>Open Source</span>
                  </div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Llama 3.1, Mistral, Qwen</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best open models for best privacy, best customization, best cost control.</p>
                  <ul style={{ listStyle: 'none', color: '#666', lineHeight: '2' }}>
                    <li>✓ Best self-hosting option</li>
                    <li>✓ Best fine-tuning ready</li>
                    <li>✓ Best no vendor lock-in</li>
                    <li>✓ Best community support</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#f8faff' }} aria-labelledby="platform-title">
            <div className="container">
              <h2 id="platform-title" className="section-title">Best Platform Capabilities</h2>
              <p className="section-subtitle">Best tools and best infrastructure to build, deploy, and scale best AI applications</p>
              
              <div className="grid grid-3" role="list">
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔗</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Unified API</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Single best API for all best models. Switch best models with one line of code. Best OpenAI-compatible interface.</p>
                  <Link to="/docs" style={{ fontWeight: '600', color: '#0066cc' }}>Read Best API Docs →</Link>
                </article>
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>🎯</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Fine-Tuning</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Train best custom models on your best data. Best LoRA, best full fine-tuning, best RAG integration included.</p>
                  <Link to="/fine-tuning" style={{ fontWeight: '600', color: '#0066cc' }}>Learn Best Fine-Tuning →</Link>
                </article>
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>📊</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Analytics & Observability</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best real-time metrics, best cost tracking, best latency monitoring, best error analysis. Best dashboards included.</p>
                  <Link to="/analytics" style={{ fontWeight: '600', color: '#0066cc' }}>View Best Analytics →</Link>
                </article>
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚡</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Edge & Caching</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best global edge network, best semantic caching, best streaming responses. Best {'<'}100ms latency worldwide.</p>
                  <Link to="/edge" style={{ fontWeight: '600', color: '#0066cc' }}>Explore Best Edge →</Link>
                </article>
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>🔒</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Security & Compliance</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best SOC 2 Type II, best GDPR, best HIPAA ready. Best data encryption, best audit logs, best access controls.</p>
                  <Link to="/security" style={{ fontWeight: '600', color: '#0066cc' }}>Read Best Security →</Link>
                </article>
                <article className="card" role="listitem">
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>🛠️</div>
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Developer Experience</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best SDKs (Python, JS, Go, Rust), best playground, best prompt templates, best CI/CD integration.</p>
                  <Link to="/developers" style={{ fontWeight: '600', color: '#0066cc' }}>Get Best SDKs →</Link>
                </article>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="workflows-title">
            <div className="container">
              <h2 id="workflows-title" className="section-title">Best AI Workflows</h2>
              <p className="section-subtitle">Pre-built best workflows for best common use cases. Deploy in best minutes, not best months.</p>
              
              <div className="grid grid-2" role="list">
                <article className="card" role="listitem" style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ width: '80px', height: '80px', background: '#e7f3ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', flexShrink: 0 }}>💬</div>
                  <div>
                    <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Chat & Support Bots</h3>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Build best intelligent chatbots with best RAG, best memory, best handoff. Best 24/7 customer support automation.</p>
                    <Link to="/templates/chatbot" style={{ fontWeight: '600', color: '#0066cc' }}>Use Best Template →</Link>
                  </div>
                </article>
                <article className="card" role="listitem" style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ width: '80px', height: '80px', background: '#e7f8ed', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', flexShrink: 0 }}>📝</div>
                  <div>
                    <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Content Generation</h3>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best blog posts, best marketing copy, best technical docs, best social media. Best brand voice consistency.</p>
                    <Link to="/templates/content" style={{ fontWeight: '600', color: '#0066cc' }}>Use Best Template →</Link>
                  </div>
                </article>
                <article className="card" role="listitem" style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ width: '80px', height: '80px', background: '#fff8e1', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', flexShrink: 0 }}>💻</div>
                  <div>
                    <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Code Assistant</h3>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best code generation, best refactoring, best testing, best documentation. Best IDE integration included.</p>
                    <Link to="/templates/code" style={{ fontWeight: '600', color: '#0066cc' }}>Use Best Template →</Link>
                  </div>
                </article>
                <article className="card" role="listitem" style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ width: '80px', height: '80px', background: '#fdeaea', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', flexShrink: 0 }}>📈</div>
                  <div>
                    <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Best Data Analysis</h3>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>Best SQL generation, best chart creation, best insight extraction, best report automation. Best natural language to code.</p>
                    <Link to="/templates/data" style={{ fontWeight: '600', color: '#0066cc' }}>Use Best Template →</Link>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#1a1a2e', color: 'white' }} aria-labelledby="cta-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
              <h2 id="cta-title" className="section-title" style={{ color: 'white' }}>Ready to Build with Best AI?</h2>
              <p style={{ color: '#999', fontSize: '18px', marginBottom: '32px', lineHeight: '1.7' }}>
                Start your best free trial today. Access all best models, all best features, best no credit card required.
              </p>
              <Link to="/pricing" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>Start Best Free Trial</Link>
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

export default Features;