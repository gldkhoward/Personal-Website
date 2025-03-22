// pages/index.js
"use client"
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: "Building a Progressive Web App with Next.js",
      excerpt: "Learn how to leverage Next.js features to create lightning-fast PWAs that work offline.",
      date: "March 18, 2025",
      readTime: "8 min read",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Understanding React Server Components",
      excerpt: "Dive deep into React Server Components and how they're changing the way we build interactive UIs.",
      date: "March 10, 2025",
      readTime: "12 min read",
      category: "React",
    },
    {
      id: 3,
      title: "CSS Container Queries: The Future of Responsive Design",
      excerpt: "Explore how container queries are revolutionizing component-based responsive design.",
      date: "March 3, 2025",
      readTime: "6 min read",
      category: "CSS",
    },
  ];

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className="container">
        <Head>
          <title>DevNotes | A Personal Tech Blog</title>
          <meta name="description" content="Tutorials and insights on modern web development" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <div className="logo">
            <span className="bracket">{"<"}</span>
            <span className="name">LukeAtThis</span>
            <span className="bracket">{"/>"}</span>
          </div>
          
          <nav>
            <Link href="/">Home</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/snippets">Code Snippets</Link>
            <Link href="/about">About</Link>
          </nav>
          
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </header>

        <main>
          <section className="hero">
            <h1>Clean Code.<br />Clear Explanations.</h1>
            <p className="subtitle">
              Practical web development tutorials without the fluff.
            </p>
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search tutorials..." 
                className="search-input"
              />
              <button className="search-button">
                Search
              </button>
            </div>
          </section>

          <section className="featured">
            <div className="section-header">
              <h2>Latest Posts</h2>
              <Link href="/archive" className="view-all">
                View All →
              </Link>
            </div>
            
            <div className="posts-grid">
              {posts.map(post => (
                <article key={post.id} className="post-card">
                  <div className="post-category">{post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <Link href={`/post/${post.id}`} className="read-more">
                    Read Article →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="newsletter">
            <h2>Stay Updated</h2>
            <p>Get notified when I publish new tutorials and code snippets.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="you@example.com" />
              <button>Subscribe</button>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer-content">
            <div className="footer-logo">
              <span className="bracket">{"<"}</span>
              <span className="name">LukeAtThis</span>
              <span className="bracket">{"/>"}</span>
            </div>
            <p className="footer-text">
              Built with Next.js and ❤️
            </p>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} LukeAtThis. All rights reserved.
          </div>
        </footer>
      </div>

      <style jsx global>{`
        :root {
          --bg-light: #ffffff;
          --text-light: #1a1a1a;
          --accent-light: #3b82f6;
          --secondary-light: #f5f5f5;
          --muted-light: #6b7280;
          
          --bg-dark: #111827;
          --text-dark: #f3f4f6;
          --accent-dark: #60a5fa;
          --secondary-dark: #1f2937;
          --muted-dark: #9ca3af;
          
          --font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html, body {
          font-family: var(--font-sans);
          line-height: 1.6;
          scroll-behavior: smooth;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .light {
          background-color: var(--bg-light);
          color: var(--text-light);
        }
        
        .dark {
          background-color: var(--bg-dark);
          color: var(--text-dark);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        /* Header Styles */
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
          margin-bottom: 2rem;
        }
        
        .logo {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.5rem;
        }
        
        .dark .bracket {
          color: var(--accent-dark);
        }
        
        .light .bracket {
          color: var(--accent-light);
        }
        
        nav {
          display: flex;
          gap: 2rem;
        }
        
        nav a {
          text-decoration: none;
          color: inherit;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        
        .dark nav a:hover {
          color: var(--accent-dark);
        }
        
        .light nav a:hover {
          color: var(--accent-light);
        }
        
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
        }
        
        /* Hero Section */
        .hero {
          text-align: center;
          padding: 4rem 0;
          margin-bottom: 3rem;
        }
        
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        
        .subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          color: var(--light) ? var(--muted-light) : var(--muted-dark);
        }
        
        .search-container {
          display: flex;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .search-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 2px solid;
          border-color: var(--light) ? var(--secondary-light) : var(--secondary-dark);
          border-radius: 0.375rem 0 0 0.375rem;
          font-size: 1rem;
          background: transparent;
          color: inherit;
        }
        
        .search-button {
          padding: 0.75rem 1.5rem;
          border: none;
          background-color: var(--light) ? var(--accent-light) : var(--accent-dark);
          color: white;
          font-weight: 600;
          border-radius: 0 0.375rem 0.375rem 0;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        
        .search-button:hover {
          opacity: 0.9;
        }
        
        /* Featured Posts */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .section-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
        }
        
        .view-all {
          color: var(--light) ? var(--accent-light) : var(--accent-dark);
          text-decoration: none;
          font-weight: 500;
        }
        
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .post-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          border-radius: 0.5rem;
          background-color: var(--light) ? var(--secondary-light) : var(--secondary-dark);
          transition: transform 0.2s ease;
        }
        
        .post-card:hover {
          transform: translateY(-5px);
        }
        
        .post-category {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--light) ? var(--accent-light) : var(--accent-dark);
          margin-bottom: 0.75rem;
        }
        
        .post-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        
        .post-card p {
          color: var(--light) ? var(--muted-light) : var(--muted-dark);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        
        .post-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: var(--light) ? var(--muted-light) : var(--muted-dark);
          margin-bottom: 1rem;
        }
        
        .read-more {
          color: var(--light) ? var(--accent-light) : var(--accent-dark);
          text-decoration: none;
          font-weight: 500;
          align-self: flex-start;
        }
        
        /* Newsletter */
        .newsletter {
          padding: 3rem;
          border-radius: 0.5rem;
          background-color: var(--light) ? var(--secondary-light) : var(--secondary-dark);
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .newsletter h2 {
          margin-bottom: 1rem;
          font-size: 1.75rem;
        }
        
        .newsletter p {
          margin-bottom: 1.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 2px solid transparent;
          border-radius: 0.375rem 0 0 0.375rem;
          font-size: 1rem;
        }
        
        .newsletter-form button {
          padding: 0.75rem 1.5rem;
          border: none;
          background-color: var(--light) ? var(--accent-light) : var(--accent-dark);
          color: white;
          font-weight: 600;
          border-radius: 0 0.375rem 0.375rem 0;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        
        .newsletter-form button:hover {
          opacity: 0.9;
        }
        
        /* Footer */
        footer {
          padding: 3rem 0;
          border-top: 1px solid;
          border-color: var(--light) ? var(--secondary-light) : var(--secondary-dark);
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .footer-logo {
          font-family: var(--font-mono);
          font-weight: 700;
        }
        
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-links a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .dark .social-links a:hover {
          color: var(--accent-dark);
        }
        
        .light .social-links a:hover {
          color: var(--accent-light);
        }
        
        .copyright {
          text-align: center;
          font-size: 0.875rem;
          color: var(--light) ? var(--muted-light) : var(--muted-dark);
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          
          header {
            flex-direction: column;
            gap: 1rem;
          }
          
          nav {
            margin: 1rem 0;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          
          .newsletter {
            padding: 2rem 1rem;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .newsletter-form input {
            border-radius: 0.375rem;
            margin-bottom: 0.75rem;
          }
          
          .newsletter-form button {
            border-radius: 0.375rem;
          }
        }
      `}</style>
    </div>
  );
}