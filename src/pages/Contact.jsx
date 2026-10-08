import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: 'professional',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', plan: 'professional', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Best AI Sales & Support - Get Started Today | AI Subscribe</title>
        <meta name="description" content="Contact AI Subscribe best sales team for best custom quotes, best enterprise plans, or best technical questions. Best support available 24/7." />
        <meta name="keywords" content="contact AI, AI sales, AI support, enterprise AI contact, AI subscription contact, best AI company contact" />
        <meta property="og:title" content="Contact Best AI Sales & Support | AI Subscribe" />
        <meta property="og:description" content="Contact AI Subscribe best sales team for best custom quotes, best enterprise plans, or best technical questions." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop" />
        <link rel="canonical" href="https://aisubscription.example.com/contact-page" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact AI Subscribe",
            "description": "Contact best AI sales and support team",
            "mainEntity": {
              "@type": "Organization",
              "name": "AI Subscribe",
              "url": "https://aisubscription.example.com",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-800-AI-SUBSCRIBE",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                }
              ]
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Resources</Link></li>
              <li><Link to="/contact" className="active btn btn-primary nav-cta">Get Started</Link></li>
            </ul>
          </div>
        </nav>

        <main>
          <section className="section" style={{ paddingTop: '140px', backgroundColor: '#f8faff' }} aria-labelledby="contact-hero-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
              <h1 id="contact-hero-title" className="section-title" style={{ fontSize: '48px' }}>Get in <span style={{ color: '#0066cc' }}>Touch</span></h1>
              <p className="section-subtitle" style={{ fontSize: '20px' }}>
                Have best questions? Need a best custom quote? Want to chat about best AI strategy? 
                Our best team is here to help.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="contact-form-title">
            <div className="container">
              <div className="grid grid-2" style={{ gap: '60px', alignItems: 'start' }}>
                <div>
                  <h2 id="contact-form-title" style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a2e', marginBottom: '16px' }}>Send Us a Best Message</h2>
                  <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '32px', fontSize: '18px' }}>
                    Fill out the best form and our best team will get back to you within best 24 hours. 
                    For best urgent inquiries, email us directly at <a href="mailto:hello@aisubscribe.example.com" style={{ color: '#0066cc' }}>hello@aisubscribe.example.com</a>.
                  </p>

                  {submitted ? (
                    <div style={{ background: '#e7f8ed', border: '1px solid #28a745', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                      <h3 style={{ color: '#1a1a2e', marginBottom: '12px' }}>Best Message Sent Successfully!</h3>
                      <p style={{ color: '#666', marginBottom: '24px' }}>
                        Thank you for contacting AI Subscribe. Our best team will respond to your best inquiry within best 24 hours.
                      </p>
                      <button onClick={() => setSubmitted(false)} className="btn btn-primary">Send Another Best Message</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name <span style={{ color: '#dc3545' }}>*</span></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`form-input ${errors.name ? 'error' : ''}`}
                          placeholder="John Best"
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && <p id="name-error" style={{ color: '#dc3545', fontSize: '14px', marginTop: '6px' }}>{errors.name}</p>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Work Email <span style={{ color: '#dc3545' }}>*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          placeholder="john@bestcompany.com"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <p id="email-error" style={{ color: '#dc3545', fontSize: '14px', marginTop: '6px' }}>{errors.email}</p>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="company" className="form-label">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Best Company Inc"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="plan" className="form-label">Interested In</label>
                        <select
                          id="plan"
                          name="plan"
                          value={formData.plan}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="starter">Best Starter ($29/mo)</option>
                          <option value="professional">Best Professional ($99/mo)</option>
                          <option value="enterprise">Best Enterprise (Custom)</option>
                          <option value="not-sure">Not Sure Yet</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message" className="form-label">Message <span style={{ color: '#dc3545' }}>*</span></label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                          placeholder="Tell us about your best AI needs, best project requirements, best timeline, best team size, or any best questions you have..."
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && <p id="message-error" style={{ color: '#dc3545', fontSize: '14px', marginTop: '6px' }}>{errors.message}</p>}
                      </div>

                      <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '18px' }}>
                        Send Best Message
                      </button>
                      <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px', color: '#999' }}>
                        By submitting, you agree to our <Link to="/privacy" style={{ color: '#0066cc' }}>Best Privacy Policy</Link> and <Link to="/terms" style={{ color: '#0066cc' }}>Best Terms of Service</Link>.
                      </p>
                    </form>
                  )}
                </div>

                <div style={{ background: '#1a1a2e', borderRadius: '16px', padding: '48px', color: 'white' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Other Ways to Best Connect</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <a href="mailto:hello@aisubscribe.example.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'white', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', transition: 'background 0.2s' }}>
                      <div style={{ width: '48px', height: '48px', background: '#0066cc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>✉️</div>
                      <div>
                        <p style={{ color: '#999', fontSize: '14px', marginBottom: '4px' }}>Best Email Us</p>
                        <p style={{ fontWeight: '500' }}>hello@aisubscribe.example.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:+18002478727" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'white', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', transition: 'background 0.2s' }}>
                      <div style={{ width: '48px', height: '48px', background: '#28a745', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📞</div>
                      <div>
                        <p style={{ color: '#999', fontSize: '14px', marginBottom: '4px' }}>Best Call Sales</p>
                        <p style={{ fontWeight: '500' }}>1-800-AI-SUBSCRIBE</p>
                      </div>
                    </a>
                    
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'white', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', transition: 'background 0.2s' }}>
                      <div style={{ width: '48px', height: '48px', background: '#5865F2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>💬</div>
                      <div>
                        <p style={{ color: '#999', fontSize: '14px', marginBottom: '4px' }}>Best Join Discord</p>
                        <p style={{ fontWeight: '500' }}>Community & Best Support</p>
                      </div>
                    </a>
                    
                    <a href="https://calendar.example.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'white', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', transition: 'background 0.2s' }}>
                      <div style={{ width: '48px', height: '48px', background: '#ffc107', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📅</div>
                      <div>
                        <p style={{ color: '#999', fontSize: '14px', marginBottom: '4px' }}>Best Schedule Demo</p>
                        <p style={{ fontWeight: '500' }}>30-min Best Product Tour</p>
                      </div>
                    </a>
                  </div>

                  <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #333' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#999' }}>Best Office Location</h4>
                    <address style={{ fontStyle: 'normal', color: '#999', lineHeight: '1.8' }}>
                      AI Subscribe Inc.<br />
                      100 Best AI Boulevard, Suite 500<br />
                      San Francisco, CA 94105<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#f8faff' }} aria-labelledby="faq-contact-title">
            <div className="container" style={{ maxWidth: '800px' }}>
              <h2 id="faq-contact-title" className="section-title">Best Quick Answers</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '32px' }}>
                <article className="card">
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>How fast is best support response?</h3>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Best Professional plans: <strong>4 hours</strong>. Best Enterprise: <strong>1 hour</strong>. Best Community: <strong>24-48 hours</strong>. Best critical issues: <strong>30 minutes</strong> for best Enterprise.</p>
                </article>
                <article className="card">
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Can I get a best custom demo?</h3>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Absolutely! Best schedule a <Link to="/contact" style={{ color: '#0066cc' }}>30-minute best demo</Link> with our best solutions engineers. We'll show best features relevant to your best use case.</p>
                </article>
                <article className="card">
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>Do you offer best non-profit discounts?</h3>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Yes! Best registered non-profits, best educational institutions, and best research organizations get <strong>50% off</strong> best Professional plans. <Link to="/contact" style={{ color: '#0066cc' }}>Apply here</Link>.</p>
                </article>
                <article className="card">
                  <h3 style={{ marginBottom: '12px', color: '#1a1a2e' }}>What best SLAs do you offer?</h3>
                  <p style={{ color: '#666', lineHeight: '1.7' }}>Best Professional: <strong>99.9% uptime</strong>. Best Enterprise: <strong>99.99% uptime</strong> with best financial penalties. Best custom SLAs available for best mission-critical workloads.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#1a1a2e', color: 'white' }} aria-labelledby="start-trial-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
              <h2 id="start-trial-title" className="section-title" style={{ color: 'white' }}>Ready to Start Your Best Free Trial?</h2>
              <p style={{ color: '#999', fontSize: '18px', marginBottom: '32px', lineHeight: '1.7' }}>
                No best credit card required. Best 14-day access to all best models and best features. 
                Cancel best anytime.
              </p>
              <Link to="/pricing" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px', backgroundColor: 'white', color: '#1a1a2e' }}>
                Start Best Free Trial
              </Link>
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

export default Contact;