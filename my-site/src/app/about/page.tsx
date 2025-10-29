import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import ClientHeader from '@/components/about-header';

// Read markdown content
const getMarkdownContent = () => {
  const filePath = path.join(process.cwd(), 'content', 'about.md');
  return fs.readFileSync(filePath, 'utf8');
};

export default function About() {
  const markdownContent = getMarkdownContent();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ClientHeader />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-em:text-muted-foreground">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-primary mb-8">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">{children}</h2>
              ),
              p: ({ children }) => (
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">{children}</p>
              ),
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  className="text-primary hover:underline font-medium"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="text-foreground font-semibold">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="text-muted-foreground italic">{children}</em>
              ),
              hr: () => (
                <hr className="border-border my-8" />
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
                  {children}
                </blockquote>
              )
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Luke Howard. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}