import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Best for individuals & best small projects',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'Access to 20+ best AI models',
        '100K best tokens/month included',
        'Best unified API access',
        'Best playground & best SDKs',
        'Best community support',
        'Best basic analytics',
        'Best 14-day free trial',
      ],
      notIncluded: [
        'Best fine-tuning',
        'Best priority support',
        'Best custom models',
        'Best SLA guarantee',
        'Best dedicated infrastructure',
      ],
      cta: 'Start Best Free Trial',
      popular: false,
      badge: null,
    },
    {
      name: 'Professional',
      description: 'Best for growing teams & best production apps',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Access to all 50+ best AI models',
        '1M best tokens/month included',
        'Best fine-tuning (5 best jobs/month)',
        'Best RAG & best vector search',
        'Best advanced analytics',
        'Best email & best chat support',
        'Best 99.9% uptime SLA',
        'Best team collaboration (5 seats)',
        'Best custom rate limits',
      ],
      notIncluded: [
        'Best dedicated infrastructure',
        'Best custom model deployment',
        'Best enterprise SSO',
        'Best audit logs',
        'Best white-label options',
      ],
      cta: 'Start Best Free Trial',
      popular: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'Best for large organizations & best mission-critical AI',
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        'Unlimited best model access',
        '10M+ best tokens/month included',
        'Unlimited best fine-tuning',
        'Best dedicated infrastructure',
        'Best custom model deployment',
        'Best enterprise SSO (SAML/OIDC)',
        'Best audit logs & best compliance',
        'Best white-label & best custom domain',
        'Best dedicated success manager',
        'Best 99.99% uptime SLA',
        'Best custom contracts & best billing',
        'Best on-premise deployment option',
        'Unlimited best team seats',
      ],
      notIncluded: [],
      cta: 'Contact Best Sales',
      popular: false,
      badge: 'Best Value',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best AI Pricing - Best Subscription Plans, Best Monthly & Annual | AI Subscribe</title>
        <meta name="description" content="Best transparent AI pricing. Best Starter $29/mo, Best Professional $99/mo, Best Enterprise $499/mo. Best annual discounts. Best free trial." />
        <meta name="keywords" content="AI pricing, AI subscription cost, AI plans, machine learning pricing, GPT-4 pricing, Claude pricing, AI API pricing" />
        <meta property="og:title" content="Best AI Pricing - Transparent Plans for Every Team | AI Subscribe" />
        <meta property="og:description" content="Best transparent AI pricing. Best Starter $29/mo, Best Professional $99/mo, Best Enterprise $499/mo. Best annual discounts available." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop" />
        <link rel="canonical" href="https://aisubscription.example.com/pricing-page" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "24",
            "maxPrice": "499",
            "unitCode": "MON"
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
              <li><Link to="/pricing" className="active">Pricing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Resources</Link></li>
              <li><Link to="/contact" className="btn btn-primary nav-cta">Get Started</Link></li>
            </ul>
          </div>
        </nav>

        <main>
          <section className="section" style={{ paddingTop: '140px', backgroundColor: '#f8faff' }} aria-labelledby="pricing-hero-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
              <h1 id="pricing-hero-title" className="section-title" style={{ fontSize: '48px' }}>Best Simple, <span style={{ color: '#0066cc' }}>Transparent Pricing</span></h1>
              <p className="section-subtitle" style={{ fontSize: '20px' }}>
                Choose the best plan that fits your best needs. All best plans include best 14-day free trial. No best hidden fees. Cancel best anytime.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="billing-toggle">
            <div className="container">
              <div className="pricing-toggle" role="group" aria-labelledby="billing-toggle">
                <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
                <label className="toggle-switch" htmlFor="billing-switch">
                  <input
                    type="checkbox"
                    id="billing-switch"
                    checked={isAnnual}
                    onChange={(e) => setIsAnnual(e.target.checked)}
                    aria-label="Switch to annual billing"
                  />
                  <span className="toggle-slider"></span>
                </label>
                <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
                  Annual <span style={{ color: '#28a745', fontWeight: '600', marginLeft: '8px' }}>Save up to 20%</span>
                </span>
              </div>

              <div className="grid grid-3" role="list" style={{ alignItems: 'stretch' }}>
                {plans.map((plan) => (
                  <article 
                    key={plan.name} 
                    className={`pricing-card card ${plan.popular ? 'popular' : ''}`}
                    role="listitem"
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    {plan.badge && (
                      <div className={`badge ${plan.popular ? 'badge-popular' : 'badge-enterprise'}`} style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                        {plan.badge}
                      </div>
                    )}
                    <div className="pricing-header" style={{ background: plan.popular ? 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)' : '#f8faff', color: plan.popular ? 'white' : '#1a1a2e', borderRadius: '12px 12px 0 0', margin: '-32px -32px 24px', padding: '32px' }}>
                      <h3 className="pricing-name" style={{ color: plan.popular ? 'white' : '#1a1a2e' }}>{plan.name}</h3>
                      <div className="pricing-price" style={{ color: plan.popular ? 'white' : '#1a1a2e' }}>
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        <span style={{ color: plan.popular ? 'rgba(255,255,255,0.7)' : '#999' }}>/month</span>
                      </div>
                      {isAnnual && !plan.popular && (
                        <p style={{ marginTop: '8px', fontSize: '14px', color: plan.popular ? 'rgba(255,255,255,0.8)' : '#28a745' }}>
                          Billed ${plan.annualPrice * 12}/year
                        </p>
                      )}
                      {isAnnual && plan.popular && (
                        <p style={{ marginTop: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                          Billed ${plan.annualPrice * 12}/year — Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                        </p>
                      )}
                      {!isAnnual && (
                        <p style={{ marginTop: '8px', fontSize: '14px', color: plan.popular ? 'rgba(255,255,255,0.7)' : '#999' }}>
                          Or ${plan.annualPrice}/mo billed annually
                        </p>
                      )}
                    </div>
                    <p style={{ color: '#666', marginBottom: '24px', lineHeight: '1.6' }}>{plan.description}</p>
                    
                    <ul className="pricing-features" role="list">
                      {plan.features.map((feature, index) => (
                        <li key={index}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, index) => (
                        <li key={index} className="disabled">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={plan.name === 'Enterprise' ? '/contact' : '/contact'} 
                      className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full`}
                      style={{ textAlign: 'center', marginTop: 'auto' }}
                    >
                      {plan.cta}
                    </Link>
                  </article>
                ))}
              </div>

              <p style={{ textAlign: 'center', color: '#999', marginTop: '32px', fontSize: '14px' }}>
                All best prices in USD. Best tokens roll over monthly. Best volume discounts available for best high-usage customers.
                <Link to="/contact" style={{ marginLeft: '8px' }}>Contact us</Link> for best custom plans.
              </p>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#f8faff' }} aria-labelledby="faq-title">
            <div className="container" style={{ maxWidth: '800px' }}>
              <h2 id="faq-title" className="section-title">Best Frequently Asked Questions</h2>
              
              <div style={{ marginTop: '32px' }}>
                <details style={{ borderBottom: '1px solid #eee', padding: '24px 0' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', color: '#1a1a2e', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    What's included in the best free trial?
                    <span style={{ color: '#0066cc' }}>+</span>
                  </summary>
                  <p style={{ color: '#666', marginTop: '16px', lineHeight: '1.7' }}>
                    The best 14-day free trial gives you full access to your chosen best plan's features. 
                    Best Starter trial includes 50K tokens, Best Professional includes 200K tokens. 
                    No best credit card required. Cancel best anytime during trial with no charge.
                  </p>
                </details>
                <details style={{ borderBottom: '1px solid #eee', padding: '24px 0' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', color: '#1a1a2e', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    How does best token billing work?
                    <span style={{ color: '#0066cc' }}>+</span>
                  </summary>
                  <p style={{ color: '#666', marginTop: '16px', lineHeight: '1.7' }}>
                    Best tokens are consumed based on best model usage (input + output). 
                    Best unused monthly tokens roll over to the next month (up to 2x monthly limit). 
                    Best overage rates: $0.002/1K tokens for Best Starter, $0.0015/1K for Best Professional, 
                    custom rates for Best Enterprise.
                  </p>
                </details>
                <details style={{ borderBottom: '1px solid #eee', padding: '24px 0' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', color: '#1a1a2e', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Can I switch best plans anytime?
                    <span style={{ color: '#0066cc' }}>+</span>
                  </summary>
                  <p style={{ color: '#666', marginTop: '16px', lineHeight: '1.7' }}>
                    Yes! Upgrade best anytime — best prorated charges apply immediately. 
                    Downgrade best at next billing cycle. Best annual to monthly switches 
                    available at renewal. No best penalties, no best lock-in.
                  </p>
                </details>
                <details style={{ borderBottom: '1px solid #eee', padding: '24px 0' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', color: '#1a1a2e', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    What best payment methods do you accept?
                    <span style={{ color: '#0066cc' }}>+</span>
                  </summary>
                  <p style={{ color: '#666', marginTop: '16px', lineHeight: '1.7' }}>
                    Best credit/debit cards (Visa, Mastercard, Amex), best ACH/bank transfer for best annual Enterprise, 
                    best wire transfer for best custom contracts. Best invoicing available for best Enterprise plans.
                    All best payments processed securely via best Stripe.
                  </p>
                </details>
                <details style={{ borderBottom: '1px solid #eee', padding: '24px 0' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', color: '#1a1a2e', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Is there a best free tier?
                    <span style={{ color: '#0066cc' }}>+</span>
                  </summary>
                  <p style={{ color: '#666', marginTop: '16px', lineHeight: '1.7' }}>
                    We offer best 14-day free trials on all best plans instead of a limited best free tier. 
                    This gives you best full access to evaluate best properly. 
                    Best students, best researchers, and best non-profits may qualify for best discounts — 
                    <Link to="/contact" style={{ color: '#0066cc' }}>contact us</Link> to learn more.
                  </p>
                </details>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="compare-title">
            <div className="container">
              <h2 id="compare-title" className="section-title">Best Detailed Comparison</h2>
              <p className="section-subtitle">Best side-by-side comparison of all best features across best plans</p>
              
              <div style={{ overflowX: 'auto', marginTop: '32px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #eee' }}>
                      <th style={{ textAlign: 'left', padding: '16px', fontWeight: '600', color: '#1a1a2e' }}>Feature</th>
                      <th style={{ textAlign: 'center', padding: '16px', fontWeight: '600', color: '#1a1a2e' }}>Starter</th>
                      <th style={{ textAlign: 'center', padding: '16px', fontWeight: '600', color: '#0066cc' }}>Professional</th>
                      <th style={{ textAlign: 'center', padding: '16px', fontWeight: '600', color: '#1a1a2e' }}>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Monthly Price</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>$29</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>$99</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>$499</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Annual Price (per month)</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>$24</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>$79</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>$399</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>AI Models Access</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>20+</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>50+</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>All</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Monthly Tokens Included</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>100K</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>1M</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>10M+</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Fine-Tuning Jobs</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#ccc' }}>—</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>5/month</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>Unlimited</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>RAG & Vector Search</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#ccc' }}>—</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>✓</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>✓</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Advanced Analytics</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#ccc' }}>Basic</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>✓</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>✓</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Support Level</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>Community</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>Email + Chat</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>Dedicated Manager</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Uptime SLA</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#ccc' }}>—</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>99.9%</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>99.99%</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Team Seats</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>1</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#0066cc', fontWeight: '600' }}>5</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>Unlimited</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>SSO & Audit Logs</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#ccc' }}>—</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#ccc' }}>—</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>✓</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>Custom Deployment</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#ccc' }}>—</td>
                      <td style={{ textAlign: 'center', padding: '16px', color: '#ccc' }}>—</td>
                      <td style={{ textAlign: 'center', padding: '16px' }}>✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#1a1a2e', color: 'white' }} aria-labelledby="enterprise-cta-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
              <h2 id="enterprise-cta-title" className="section-title" style={{ color: 'white' }}>Need Best Custom Solution?</h2>
              <p style={{ color: '#999', fontSize: '18px', marginBottom: '32px', lineHeight: '1.7' }}>
                Best custom contracts, best volume discounts, best on-premise deployment, 
                best dedicated infrastructure. Let's build the best plan for your best organization.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px', backgroundColor: 'white', color: '#1a1a2e' }}>
                Contact Best Enterprise Sales
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

export default Pricing;