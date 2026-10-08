import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import "./App.css";

import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevOps Demo</h2>
        <span className="status">● CI Ready</span>
      </nav>

      <main className="hero">
        <div className="badge">React + CI/CD</div>

        <h1>
          My First <span>CI Project</span>
        </h1>

        <p>
          A simple React frontend created to practice GitHub,
          Continuous Integration, Docker, and AWS deployment.
        </p>

        <div className="buttons">
          <button>Get Started</button>
          <button className="secondary">View Project</button>
        </div>
      </main>

      <section className="cards">
        <div className="card">
          <h3>⚛️ React</h3>
          <p>Frontend application built with React and Vite.</p>
        </div>

        <div className="card">
          <h3>🔄 CI</h3>
          <p>Automatically test and build the application after every push.</p>
        </div>

        <div className="card">
          <h3>🐳 Docker</h3>
          <p>Containerize the application for deployment.</p>
        </div>

        <div className="card">
          <h3>☁️ AWS</h3>
          <p>Deploy the application on an AWS server.</p>
        </div>
      </section>

      <footer>
        <p>Built for DevOps learning • 2026</p>
      </footer>
    </div>
  );
}

export default App;