"use client";
import React, { useEffect } from 'react';
import { MagicalApp } from '@/lib/app.js';

export default function MagicalCanvas() {
    useEffect(() => {
        // Initialize the app immediately on mount
        if (!window.appInitialized) {
            window.appInitialized = true;
            new MagicalApp();
        }
    }, []);

    return (
        <div id="app-container" className="landing-state">
            {/* Hidden Webcam Element */}
            <video id="webcam" autoPlay playsInline muted></video>

            {/* Main Canvas Layer */}
            <canvas id="output-canvas"></canvas>

            {/* LANDING SCREEN */}
            <div id="landing-screen" className="screen-overlay">
                <div className="landing-card glass-panel">
                    <div className="landing-badge">
                        <span>✦ MAGICAL WANDS • GESTURAL SPELLCRAFT ✦</span>
                    </div>

                    <div className="magic-icon-badge">
                        <img src="/flower-icon.png" alt="Flower Icon" width="40" height="40" style={{ objectFit: 'contain' }} />
                    </div>

                    <div className="landing-text-content">
                        <h1 className="landing-title">Magical Wands</h1>
                        <p className="landing-subtitle">Cast ethereal flowers, constellations & 3D light ribbons with your hands</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item glass-panel-light">
                            <span className="feature-icon">🌸</span>
                            <div className="feature-info">
                                <h3>Flower Bloom</h3>
                                <p>Point index finger to plant flowers</p>
                            </div>
                        </div>
                        <div className="feature-item glass-panel-light">
                            <span className="feature-icon">✦</span>
                            <div className="feature-info">
                                <h3>Star Magic</h3>
                                <p>Pinch fingers to spawn constellations</p>
                            </div>
                        </div>
                        <div className="feature-item glass-panel-light">
                            <span className="feature-icon">🎨</span>
                            <div className="feature-info">
                                <h3>Air Doodle</h3>
                                <p>Draw luminous 3D light ribbons</p>
                            </div>
                        </div>
                        <div className="feature-item glass-panel-light">
                            <span className="feature-icon">⚡</span>
                            <div className="feature-info">
                                <h3>AI Vision</h3>
                                <p>Real-time MediaPipe hand tracking</p>
                            </div>
                        </div>
                    </div>

                    <div className="landing-specs-row">
                        <span>📷 Webcam Required</span>
                        <span>•</span>
                        <span>🖱️ Mouse Fallback</span>
                        <span>•</span>
                        <span>✨ Zero Setup</span>
                    </div>

                    <div className="author-credit-row">
                        <span>Crafted with ✨ by </span>
                        <a href="https://github.com/Axshatt" target="_blank" rel="noopener noreferrer" className="author-link">
                            Akshat Singh
                        </a>
                    </div>

                    <button id="start-btn" className="glass-btn primary-glass-btn">
                        <span className="btn-icon">🔮</span>
                        <span className="btn-text">START EXPERIENCE</span>
                    </button>
                </div>
            </div>

            {/* CAMERA INTERFACE HUD (Active Mode) */}
            <div id="camera-hud" className="hud-overlay hidden">

                {/* Top Bar Navigation & Wand Selectors */}
                <header className="hud-header">

                    <div className="wand-selector-pill modern-border">
                        <button className="wand-btn active" data-wand="flowers" title="Flower Wand">
                            <img src="/flower-icon.png" alt="Flower Wand" className="wand-icon-img" />
                        </button>
                        <button className="wand-btn" data-wand="stars" title="Star Wand">
                            <img src="/star.png" alt="Star Wand" className="wand-icon-img" />
                        </button>
                        <button className="wand-btn" data-wand="doodle" title="Sketch Wand">
                            <svg className="wand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                            </svg>
                        </button>
                    </div>
                    <div className="header-tools">
                        <a href="https://github.com/Axshatt" target="_blank" rel="noopener noreferrer" className="hud-brand-watermark">
                            ✦ Magical Wands • by Akshat Singh
                        </a>
                    </div>
                </header>

                {/* Recording Indicator (Top Right) */}
                <div id="recording-badge" className="recording-indicator hidden">
                    <span className="red-dot pulse"></span>
                    <span id="recording-timer">00:00</span>
                </div>

                {/* Bottom Camera Shutter Control Panel */}
                <footer className="hud-footer">
                    <div className="mode-tabs-pill modern-border">
                        <button id="tab-photo" className="mode-tab active">PHOTO</button>
                        <button id="tab-video" className="mode-tab">VIDEO</button>
                    </div>



                    <div className="shutter-wrapper">
                        <button id="shutter-btn" className="shutter-btn" title="Take Photo or Start Recording">
                            <div className="shutter-inner"></div>
                        </button>
                    </div>
                </footer>
            </div>



            {/* Toast Notifications */}
            <div id="toast-container" className="toast-container"></div>
        </div>
    );
}
