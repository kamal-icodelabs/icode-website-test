import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      slug: 'introducing-ai-subscribe',
      title: 'Introducing AI Subscribe: Best AI Subscription Platform',
      excerpt: 'We are thrilled to announce the launch of AI Subscribe, the best unified platform for accessing best AI models from OpenAI, Anthropic, Google, and best open-source providers.',
      date: '2024-01-15',
      author: 'Sarah Chen',
      category: 'Announcement',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    },
    {
      slug: 'best-ai-models-compared-2024',
      title: 'Best AI Models Compared: GPT-4o vs Claude 3.5 vs Gemini 1.5',
      excerpt: 'Deep dive into best performance benchmarks, best pricing, and best use cases for the best leading AI models in 2024.',
      date: '2024-01-22',
      author: 'Michael Torres',
      category: 'Comparison',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    },
    {
      slug: 'fine-tuning-best-practices',
      title: 'Best Fine-Tuning Practices for Custom AI Models',
      excerpt: 'Learn best practices for fine-tuning best LLMs on your best data. Covers best LoRA, best full fine-tuning, best RAG integration, and best evaluation.',
      date: '2024-01-29',
      author: 'David Park',
      category: 'Tutorial',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    },
    {
      slug: 'ai-cost-optimization-guide',
      title: 'Best AI Cost Optimization: Reduce Your Best AI Spend by 60%',
      excerpt: 'Complete guide to best optimizing AI costs: best model selection, best caching strategies, best token optimization, best batching, and best routing.',
      date: '2024-02-05',
      author: 'Emily Watson',
      category: 'Guide',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    },
    {
      slug: 'rag-implementation-guide',
      title: 'Best RAG Implementation: From Prototype to Production',
      excerpt: 'Step-by-step guide to building best production-ready RAG systems. Covers best chunking, best embedding models, best retrieval, best evaluation.',
      date: '2024-02-12',
      author: 'David Park',
      category: 'Tutorial',
      readTime: '18 min read',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    },
    {
      slug: 'ai-security-best-practices',
      title: 'Best AI Security: Protecting Your Best Data and Best Models',
      excerpt: 'Essential best security practices for best AI deployments: best data privacy, best model security, best prompt injection prevention, best compliance.',
      date: '2024-02-19',
      author: 'Sarah Chen',
      category: 'Security',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best AI Resources - Best Blog, Best Guides, Best Tutorials | AI Subscribe</title>
        <meta name="description" content="Best AI blog with best guides, best tutorials, best comparisons, and best best practices. Learn best AI from best experts at AI Subscribe." />
        <meta name="keywords" content="AI blog, AI tutorials, AI guides, machine learning blog, GPT-4 tutorial, fine-tuning guide, RAG tutorial, AI security" />
        <meta property="og:title" content="Best AI Resources - Blog, Guides & Tutorials | AI Subscribe" />
        <meta property="og:description" content="Best AI blog with best guides, best tutorials, best comparisons. Learn best AI from best experts." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aisubscription.example.com/blog-page" />
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
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog" className="active">Resources</Link></li>
              <li><Link to="/contact" className="btn btn-primary nav-cta">Get Started</Link></li>
            </ul>
          </div>
        </nav>

        <main>
          <section className="section" style={{ paddingTop: '140px', backgroundColor: '#f8faff' }} aria-labelledby="blog-hero-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
              <h1 id="blog-hero-title" className="section-title" style={{ fontSize: '48px' }}>Best AI <span style={{ color: '#0066cc' }}>Resources</span></h1>
              <p className="section-subtitle" style={{ fontSize: '20px' }}>
                Best guides, best tutorials, best comparisons, and best insights from best AI experts. 
                Everything you need to build best with AI.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="posts-title">
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
                <h2 id="posts-title" className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>Latest Best Articles</h2>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 16px' }}>All Best Articles</button>
                  <button className="btn btn-secondary" style={{ fontSize: '14px', padding: '8px 16px' }}>Best Tutorials</button>
                  <button className="btn btn-secondary" style={{ fontSize: '14px', padding: '8px 16px' }}>Best Guides</button>
                  <button className="btn btn-secondary" style={{ fontSize: '14px', padding: '8px 16px' }}>Best Comparisons</button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {posts.map((post) => (
                  <article key={post.slug} className="blog-post" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', alignItems: 'start' }}>
                    <Link to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                      <img 
                        src={post.image} 
                        alt="" 
                        className="blog-post-image"
                        loading="lazy"
                      />
                    </Link>
                    <div>
                      <div className="blog-post-meta">
                        <span>{post.category}</span>
                        <span>·</span>
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h3 className="blog-post-title">{post.title}</h3>
                      </Link>
                      <p className="blog-post-excerpt">{post.excerpt}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
                        <img 
                          src={`https://images.unsplash.com/photo-${post.author === 'Sarah Chen' ? '1472099645785-5658abf4ff4e' : post.author === 'Michael Torres' ? '1507003211169-0a1dd7228f2d' : post.author === 'David Park' ? '1507003211169-0a1dd7228f2d' : '1580489944761-15a19d654956'}?w=100&h=100&fit=crop&crop=face`} 
                          alt={post.author} 
                          style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                        />
                        <span style={{ fontSize: '14px', color: '#666' }}>By {post.author}</span>
                        <Link to={`/blog/${post.slug}`} className="btn btn-secondary" style={{ fontSize: '13px', padding: '6px 12px', marginLeft: 'auto' }}>Read Best Article</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <Link to="/blog/all" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '16px' }}>
                  Load More Best Articles
                </Link>
              </div>
            </div>
          </section>

          <section className="section" style={{ backgroundColor: '#f8faff' }} aria-labelledby="newsletter-title">
            <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
              <h2 id="newsletter-title" className="section-title">Get Best AI Insights Delivered</h2>
              <p className="section-subtitle">
                Join 15,000+ best developers and best leaders receiving best weekly AI updates, 
                best tutorials, and best industry news.
              </p>
              <form style={{ display: 'flex', gap: '12px', maxWidth: '400px', margin: '32px auto 0', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input 
                  type="email" 
                  placeholder="Enter your best email" 
                  className="form-input"
                  style={{ flex: 1, minWidth: '200px' }}
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
              <p style={{ marginTop: '12px', fontSize: '14px', color: '#999' }}>
                No spam, unsubscribe best anytime. Read our 
                <Link to="/privacy" style={{ color: '#0066cc' }}>Best Privacy Policy</Link>.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="categories-title">
            <div className="container">
              <h2 id="categories-title" className="section-title">Explore Best Topics</h2>
              <div className="grid grid-4" style={{ marginTop: '32px' }}>
                <Link to="/blog/category/tutorials" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>📚</div>
                  <h3 style={{ marginBottom: '8px', color: '#1a1a2e' }}>Best Tutorials</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>Step-by-step best guides</p>
                </Link>
                <Link to="/blog/category/guides" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>📖</div>
                  <h3 style={{ marginBottom: '8px', color: '#1a1a2e' }}>Best Guides</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>Comprehensive best resources</p>
                </Link>
                <Link to="/blog/category/comparisons" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚖️</div>
                  <h3 style={{ marginBottom: '8px', color: '#1a1a2e' }}>Best Comparisons</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>Model vs model best analysis</p>
                </Link>
                <Link to="/blog/category/best-practices" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ marginBottom: '8px', color: '#1a1a2e' }}>Best Practices</h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>Expert best recommendations</p>
                </Link>
              </div>
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

export default Blog;