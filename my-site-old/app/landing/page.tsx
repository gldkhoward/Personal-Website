// pages/index.tsx
"use client"

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { GlowEffect } from '@/components/motion-primitives/glow-effect';
import { useTheme } from 'next-themes';


// Define types for the application
type TerminalStep = 
  | 'initial'
  | 'whoami'
  | 'runPortfolio'
  | 'waitingForInput'
  | 'portfolio'
  | 'blog'
  | 'about'
  | 'showcase';

// Custom type for styled terminal lines
interface StyledTerminalLine {
  content: string;
  isCommand?: boolean;
  prefix?: string;
}

export default function Home(): JSX.Element {
  const [terminalContent, setTerminalContent] = useState<StyledTerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<TerminalStep>('initial');
  const [promptPrefix, setPromptPrefix] = useState<string>('user@interweb:~$ ');
  const terminalRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // Function to add a command with typewriter effect
  const typeCommand = async (command: string, prefix: string = promptPrefix, delay: number = 80): Promise<void> => {
    const fullText = prefix + command;
    
    setTerminalContent(prev => [...prev, { content: '', isCommand: true, prefix }]);
    
    for (let i = 0; i < fullText.length; i++) {
      setTerminalContent(prev => {
        const newContent = [...prev];
        newContent[newContent.length - 1] = {
          content: fullText.substring(0, i + 1),
          isCommand: true,
          prefix
        };
        return newContent;
      });
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    return new Promise(resolve => setTimeout(resolve, 300));
  };
  
  // Function to add output instantly
  const addOutput = (output: string | string[]): Promise<void> => {
    if (Array.isArray(output)) {
      setTerminalContent(prev => [
        ...prev, 
        ...output.map(line => ({ content: line, isCommand: false }))
      ]);
    } else {
      setTerminalContent(prev => [...prev, { content: output, isCommand: false }]);
    }
    return new Promise(resolve => setTimeout(resolve, 100));
  };

  // Function to execute the terminal sequence - Using a ref to track if the effect has run for a step
  const hasRunSequence = useRef<Record<string, boolean>>({});
  
  useEffect(() => {
    const runTerminalSequence = async (): Promise<void> => {
      // Skip if we've already run this step
      if (hasRunSequence.current[currentStep]) return;
      
      // Mark this step as run
      hasRunSequence.current[currentStep] = true;
      
      if (currentStep === 'initial') {
        // Start with the interweb terminal
        await typeCommand('ssh luke@lukehoward.com.au');
        await addOutput([
          'Connecting...',
          'Connection established.',
          '',
          '═════════════════════════════════════════',
          '  Luke Howard | Engineer & Creative',
          '═════════════════════════════════════════',
          '',
          '• Currently: Coding from Sydney, AU',
          '• Last visitor: 22 March 2025 @ 14:32:36',
          '• Current project: Interactive Portfolio System',
          '',
          'Type "help" for available commands.',
          ''
        ]);
        // Update the prompt to reflect we're now in Luke's workspace
        setPromptPrefix('luke@lukehoward:~$ ');
        setCurrentStep('whoami');
      } else if (currentStep === 'whoami') {
        await typeCommand('whoami', 'luke@lukehoward:~$ ');
        await addOutput([
          'Luke Howard | Cross-Disciplinary Engineer',
          '',
          'Engineer with a passion for AI, web development, and robotics. ',
          'Experience building and managing large scale digital solutions. ',
          'Passionate about clean code and user-centered design.',
          ''
        ]);
        setCurrentStep('runPortfolio');
      } else if (currentStep === 'runPortfolio') {
        await typeCommand('./explore.sh', 'luke@lukehoward:~$ ');
        // Simplified output
        await addOutput([
          'Initializing navigation...',
          '',
          'Welcome to my digital workspace',
          '',
          'What would you like to explore?',
          '1. Portfolio - Development projects',
          '2. Blog - Technical articles',
          '3. About - Professional background',
          '4. Showcase - Creative work'
        ]);
        setShowPrompt(true);
        setCurrentStep('waitingForInput');
      } else if (currentStep === 'portfolio') {
        // This section is now simplified since we're redirecting to external pages
        await addOutput([
          'Redirecting to portfolio page...',
          'Opening in new tab.'
        ]);
        window.open('/portfolio', '_blank');
        setShowPrompt(true);
        setCurrentStep('waitingForInput');
      } else if (currentStep === 'blog') {
        // This section is now simplified since we're redirecting to external pages
        await addOutput([
          'Redirecting to blog page...',
          'Opening in new tab.'
        ]);
        window.open('/blog', '_blank');
        setShowPrompt(true);
        setCurrentStep('waitingForInput');
      } else if (currentStep === 'about') {
        // This section is now simplified since we're redirecting to external pages
        await addOutput([
          'Redirecting to about page...',
          'Opening in new tab.'
        ]);
        window.open('/about', '_blank');
        setShowPrompt(true);
        setCurrentStep('waitingForInput');
      } else if (currentStep === 'showcase') {
        // This section is now simplified since we're redirecting to external pages
        await addOutput([
          'Redirecting to showcase page...',
          'Opening in new tab.'
        ]);
        window.open('/showcase', '_blank');
        setShowPrompt(true);
        setCurrentStep('waitingForInput');
      }
    };

    runTerminalSequence();
  }, [currentStep, promptPrefix]);

  // Auto scroll the terminal to the bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalContent]);

  // Handle user input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && showPrompt) {
      e.preventDefault();
      const input = currentInput.trim().toLowerCase();
      
      // Show the command with current prefix
      setTerminalContent(prev => [...prev, { 
        content: `${promptPrefix}${input}`, 
        isCommand: true,
        prefix: promptPrefix
      }]);
      setCurrentInput('');
      
      // Process commands
      if (input === '1' || input === 'portfolio') {
        window.open('/portfolio', '_blank');
        addOutput('Opening portfolio in a new tab...');
      } else if (input === '2' || input === 'blog') {
        window.open('/blog', '_blank');
        addOutput('Opening blog in a new tab...');
      } else if (input === '3' || input === 'about') {
        window.open('/about', '_blank');
        addOutput('Opening about page in a new tab...');
      } else if (input === '4' || input === 'showcase') {
        window.open('/showcase', '_blank');
        addOutput('Opening creative showcase in a new tab...');
      } else if (input === 'clear') {
        setTerminalContent([]);
      } else if (input === 'help') {
        addOutput([
          'Available commands:',
          '',
          '1 or portfolio - Open portfolio in new tab',
          '2 or blog - Open blog in new tab',
          '3 or about - Open about page in new tab',
          '4 or showcase - Open showcase in new tab',
          'contact - Open contact page in new tab',
          'clear - Clear terminal',
          'menu - Return to main menu',
          'exit - End session',
          'help - Show this help message'
        ]);
      } else if (input === 'ls') {
        addOutput([
          'portfolio/',
          'blog/',
          'about.md',
          'showcase/',
          'contact.txt',
          'projects.json',
          'resume.pdf'
        ]);
      } else if (input === 'contact') {
        window.open('/contact', '_blank');
        addOutput('Opening contact page in a new tab...');
      } else if (input === 'back' || input === 'menu') {
        setShowPrompt(false);
        setCurrentStep('runPortfolio');
      } else if (input === 'exit' || input === 'logout') {
        addOutput([
          'Saving session state...',
          'Closing secure connection...',
          '',
          'Thank you for visiting my digital workspace.',
          'Connection terminated. Have a great day!',
          ''
        ]);
        // Reset to initial state
        setPromptPrefix('user@interweb:~$ ');
        setCurrentStep('initial');
        // Clear the run sequence tracking to allow restarting
        hasRunSequence.current = {};
        setShowPrompt(false);
      } else if (input === '') {
        // Do nothing for empty command
      } else {
        addOutput(`Command not found: ${input}. Type "help" for available commands.`);
      }
    }
  };

  // Render a styled command line
  const renderStyledCommandLine = (line: StyledTerminalLine): JSX.Element => {
    if (!line.isCommand) {
      return <div className="whitespace-pre-wrap">{line.content}</div>;
    }
    
    // Handle command lines with proper styling
    const prefix = line.prefix || promptPrefix;
    
    if (prefix.includes('@') && prefix.includes(':~$')) {
      const [user, host] = prefix.split('@');
      const [hostName, path] = host.split(':');
      const inputPart = line.content.substring(prefix.length);
      
      return (
        <div className="flex whitespace-pre-wrap">
          <span className="text-green-600 dark:text-green-400">{user}@{hostName}</span>
          <span className="text-foreground">:</span>
          <span className="text-blue-500 dark:text-blue-400">~</span>
          <span className="text-foreground">$ </span>
          <span>{inputPart}</span>
        </div>
      );
    }
    
    // Fallback for any other command formats
    return <div className="whitespace-pre-wrap">{line.content}</div>;
  };

  // Linux-style prompt with color formatting
  const renderPrompt = (): JSX.Element => {
    const [user, host] = promptPrefix.split('@');
    const [hostName, path] = host.split(':');
    
    return (
      <div className="flex">
        <span className="text-green-600 dark:text-green-400">{user}@{hostName}</span>
        <span className="text-foreground">:</span>
        <span className="text-blue-500 dark:text-blue-400">~</span>
        <span className="text-foreground">$ </span>
        <input
          type="text"
          className="flex-1 focus:outline-none font-mono bg-transparent"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    );
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4">
      <Head>
        <title>Luke Howard | Developer</title>
        <meta name="description" content="Luke Howard's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-2xl relative">
        {/* Terminal Window */}
        <div className="relative">
          <GlowEffect
            colors={[
                '#d946ef', // fuchsia-500 (purple)
                '#e879f9', // fuchsia-400 (lighter purple)
                '#f97316', // orange-500 (deep orange)
                '#fb923c',  // orange-400 (lighter orange)
                '#e879f9'
              ]}
            mode="rotate"
            blur="strongest"
            duration= {30}
            scale={0.98}
          />
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border relative">
          {/* Terminal Header */}

          <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-sm text-muted-foreground font-mono absolute left-1/2 transform -translate-x-1/2">
              {currentStep !== 'initial' ? 'lukehoward.com.au' : 'secure-connection'}
            </div>
            {/* This empty div balances the layout */}
            <div className="w-[76px]"></div>
          </div>
          
          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="bg-card p-4 font-mono text-sm h-96 overflow-y-auto text-foreground"
          >
            {terminalContent.map((line, index) => (
              <div key={index}>
                {renderStyledCommandLine(line)}
              </div>
            ))}
            {showPrompt && renderPrompt()}
          </div>
        </div>
        </div>
        
        <footer className="mt-8 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Luke Howard. All rights reserved.
        </footer>
        {/* Button to toggle theme */}
        <button onClick={toggleTheme} className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md">
          Toggle Theme
        </button>
      </main>
    </div>
  );
}