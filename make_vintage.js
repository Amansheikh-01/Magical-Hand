const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

const replacements = [
  {
    target: `.glass-panel {
    background: rgba(15, 21, 32, 0.45);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.glass-panel-light {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
}`,
    replacement: `.glass-panel {
    background: #fdfbf7;
    border: 1px solid #4a4a4a;
    border-radius: 2px;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
    color: #2c2c2c;
    transition: all 0.3s ease;
}

.glass-panel-light {
    background: #f4f0ec;
    border: 1px solid #dcdcdc;
    border-radius: 2px;
    color: #2c2c2c;
}`
  },
  {
    target: `.landing-card {
    max-width: 550px;
    width: 100%;
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    position: relative;
}

.magic-icon-badge {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 30px rgba(255, 77, 109, 0.2);
}

.landing-text-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.landing-title {
    font-family: var(--font-heading);
    font-size: 3.5rem;
    font-weight: 700;
    background: linear-gradient(to right, #fff, #f9a8d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 4px 12px rgba(255, 107, 139, 0.3));
}

.landing-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
}

.features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 100%;
    margin-top: 10px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    text-align: left;
}

.feature-icon {
    font-size: 1.8rem;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.4));
}

.feature-info h3 {
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 4px;
}

.feature-info p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
}

.glass-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px 40px;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: #fff;
    margin-top: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.glass-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
}

.primary-glass-btn {
    background: linear-gradient(135deg, rgba(255, 77, 109, 0.5), rgba(157, 78, 221, 0.5));
    border-color: rgba(255, 255, 255, 0.3);
}

.primary-glass-btn:hover {
    background: linear-gradient(135deg, rgba(255, 77, 109, 0.7), rgba(157, 78, 221, 0.7));
}`,
    replacement: `.landing-card {
    max-width: 550px;
    width: 100%;
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    position: relative;
    font-family: Georgia, serif;
}

.magic-icon-badge {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid #4a4a4a;
    display: flex;
    justify-content: center;
    align-items: center;
}

.landing-text-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}

.landing-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 3rem;
    font-weight: 400;
    color: #2c2c2c;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 1px solid #2c2c2c;
    padding-bottom: 10px;
}

.landing-subtitle {
    font-size: 1.1rem;
    font-style: italic;
    color: #4a4a4a;
    margin-top: 10px;
}

.features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 100%;
    margin-top: 10px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 20px;
    text-align: left;
    border-bottom: 1px dotted #ccc;
    border-radius: 0;
}

.feature-icon {
    font-size: 1.5rem;
    filter: sepia(0.5);
}

.feature-info h3 {
    font-family: Georgia, serif;
    font-size: 1.1rem;
    color: #2c2c2c;
    margin-bottom: 4px;
    font-weight: normal;
}

.feature-info p {
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
    color: #555;
}

.glass-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 12px 36px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 0;
    border: 1px solid #2c2c2c;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: #2c2c2c;
    margin-top: 20px;
}

.glass-btn:hover {
    background: #2c2c2c;
    color: #fdfbf7;
}

.primary-glass-btn {
    background: transparent;
    border-color: #2c2c2c;
}

.primary-glass-btn:hover {
    background: #2c2c2c;
}`
  },
  {
    target: `.wand-selector-pill {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 20px;
    background: rgba(15, 21, 32, 0.4);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 999px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.wand-btn {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.wand-btn:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

.wand-btn.active {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 77, 109, 0.4); /* Pink glass */
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 77, 109, 0.4);
}`,
    replacement: `.wand-selector-pill {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    background: rgba(253, 251, 247, 0.9);
    border: 1px solid #2c2c2c;
    border-radius: 2px;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
}

.wand-btn {
    width: 44px;
    height: 44px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
}

.wand-btn:hover {
    border: 1px dotted #2c2c2c;
}

.wand-btn.active {
    border: 1px solid #2c2c2c;
    background: #e9e5de;
}`
  },
  {
    target: `.hud-icon-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--text-main);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.hud-icon-btn:hover {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.15);
}`,
    replacement: `.hud-icon-btn {
    width: 44px;
    height: 44px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    background: rgba(253, 251, 247, 0.9);
    border: 1px solid #2c2c2c;
    color: #2c2c2c;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
}

.hud-icon-btn:hover {
    background: #e9e5de;
}`
  },
  {
    target: `.recording-indicator {
    position: absolute;
    top: 85px;
    right: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 18px;
    background: rgba(239, 68, 68, 0.3);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(239, 68, 68, 0.5);
    border-radius: 999px;
    font-family: monospace;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    box-shadow: 0 8px 24px rgba(239, 68, 68, 0.3);
    z-index: 12;
}`,
    replacement: `.recording-indicator {
    position: absolute;
    top: 85px;
    right: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: rgba(253, 251, 247, 0.9);
    border: 1px solid #e74c3c;
    border-radius: 2px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    font-weight: bold;
    color: #e74c3c;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
    z-index: 12;
}`
  },
  {
    target: `.instruction-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 24px;
    border-radius: 999px;
    background: rgba(10, 14, 20, 0.4);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--text-main);
    margin-bottom: 8px;
    pointer-events: none;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

#gesture-icon {
    font-size: 1.2rem;
}

#gesture-text {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
}`,
    replacement: `.instruction-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 20px;
    border-radius: 2px;
    background: rgba(253, 251, 247, 0.95);
    border: 1px solid #2c2c2c;
    color: #2c2c2c;
    margin-bottom: 8px;
    pointer-events: none;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
}

#gesture-icon {
    font-size: 1.2rem;
    filter: grayscale(1);
}

#gesture-text {
    font-family: Georgia, serif;
    font-size: 1rem;
    font-style: italic;
    color: #2c2c2c;
}`
  },
  {
    target: `.mode-tabs-pill {
    display: flex;
    padding: 6px;
    border-radius: 999px;
    background: rgba(15, 21, 32, 0.5);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

.mode-tab {
    padding: 8px 24px;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.mode-tab.active {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}`,
    replacement: `.mode-tabs-pill {
    display: flex;
    padding: 4px;
    border-radius: 2px;
    background: rgba(253, 251, 247, 0.9);
    border: 1px solid #2c2c2c;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
}

.mode-tab {
    padding: 6px 20px;
    border: none;
    background: transparent;
    color: #555;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
}

.mode-tab.active {
    background: #2c2c2c;
    color: #fdfbf7;
}`
  },
  {
    target: `.shutter-btn {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.5);
    padding: 6px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    outline: none;
}

.shutter-btn:hover {
    transform: scale(1.08);
    border-color: rgba(255, 255, 255, 0.8);
}

.shutter-btn:active {
    transform: scale(0.95);
}

.shutter-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.shutter-btn.recording .shutter-inner {
    background: #ef4444;
    border-radius: 12px;
    transform: scale(0.5);
}`,
    replacement: `.shutter-btn {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(253, 251, 247, 0.9);
    border: 2px solid #2c2c2c;
    padding: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
    outline: none;
}

.shutter-btn:hover {
    background: #e9e5de;
}

.shutter-btn:active {
    transform: scale(0.95);
}

.shutter-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #2c2c2c;
    transition: all 0.2s ease;
    border: 2px solid #2c2c2c;
}

.shutter-btn.recording .shutter-inner {
    background: #e74c3c;
    border-color: #e74c3c;
    border-radius: 4px;
    transform: scale(0.6);
}`
  },
  {
    target: `.modal-card {
    max-width: 740px;
    width: 100%;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 20px;
    overflow: hidden;
    background: rgba(15, 21, 32, 0.6);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 24px;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
}`,
    replacement: `.modal-card {
    max-width: 740px;
    width: 100%;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 20px;
    overflow: hidden;
    background: #fdfbf7;
    border: 1px solid #2c2c2c;
    border-radius: 2px;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.15);
    color: #2c2c2c;
}`
  },
  {
    target: `.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 16px;
}`,
    replacement: `.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #2c2c2c;
    padding-bottom: 16px;
}`
  },
  {
    target: `.polaroid-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    color: #fff;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transform: rotate(calc(var(--r, 0) * 1deg));
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: flex;
    flex-direction: column;
    gap: 12px;
}`,
    replacement: `.polaroid-card {
    background: #fff;
    color: #2c2c2c;
    padding: 12px 12px 36px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.05);
    transform: rotate(calc(var(--r, 0) * 1deg));
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
}`
  },
  {
    target: `.polaroid-card:hover {
    transform: scale(1.05) rotate(0deg);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    z-index: 5;
}`,
    replacement: `.polaroid-card:hover {
    transform: scale(1.05) rotate(0deg);
    box-shadow: 4px 8px 24px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-color: #ccc;
    z-index: 5;
}`
  },
  {
    target: `.polaroid-img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 8px;
    background: rgba(0,0,0,0.5);
}`,
    replacement: `.polaroid-img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 0;
    border: 1px solid #eee;
    background: #f9f9f9;
}`
  },
  {
    target: `.polaroid-caption {
    font-family: var(--font-body);
    font-size: 1.1rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
}`,
    replacement: `.polaroid-caption {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    text-align: center;
    color: #4a4a4a;
}`
  },
  {
    target: `.doodle-toolbar {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 24px;
    border-radius: 999px;
    background: rgba(15, 21, 32, 0.4);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    margin-bottom: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}`,
    replacement: `.doodle-toolbar {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 20px;
    border-radius: 2px;
    background: rgba(253, 251, 247, 0.9);
    border: 1px solid #2c2c2c;
    margin-bottom: 12px;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
}`
  },
  {
    target: `.color-dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--c);
    border: 2px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}`,
    replacement: `.color-dot {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--c);
    border: 1px solid #2c2c2c;
    cursor: pointer;
    transition: all 0.2s ease;
}`
  },
  {
    target: `.color-dot:hover, .color-dot.active {
    transform: scale(1.2);
    border-color: #ffffff;
    box-shadow: 0 0 16px var(--c);
}`,
    replacement: `.color-dot:hover, .color-dot.active {
    transform: scale(1.15);
    border-color: #2c2c2c;
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px #2c2c2c;
}`
  },
  {
    target: `.size-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    padding: 6px 16px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.3s ease;
}`,
    replacement: `.size-btn {
    background: transparent;
    border: 1px solid transparent;
    color: #4a4a4a;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s ease;
}`
  },
  {
    target: `.size-btn.active {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}`,
    replacement: `.size-btn.active {
    background: #e9e5de;
    color: #2c2c2c;
    border: 1px solid #2c2c2c;
}`
  },
  {
    target: `.help-item {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    background: rgba(255, 255, 255, 0.05);
    padding: 18px 24px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

.help-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
}`,
    replacement: `.help-item {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    background: #fdfbf7;
    padding: 18px 24px;
    border-radius: 2px;
    border: 1px solid #e0e0e0;
    font-family: Georgia, serif;
    font-size: 1rem;
    color: #4a4a4a;
    transition: all 0.2s ease;
}

.help-item:hover {
    background: #f4f0ec;
    border-color: #ccc;
}`
  },
  {
    target: `.toast-item {
    background: rgba(15, 21, 32, 0.6);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    padding: 12px 28px;
    border-radius: 999px;
    font-family: var(--font-body);
    font-size: 1.1rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    animation: toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), toastOut 0.4s ease 2.7s forwards;
}`,
    replacement: `.toast-item {
    background: #fdfbf7;
    border: 1px solid #2c2c2c;
    color: #2c2c2c;
    padding: 12px 28px;
    border-radius: 2px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.95rem;
    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
    animation: toastIn 0.3s ease, toastOut 0.3s ease 2.7s forwards;
}`
  }
];

let changedCount = 0;
for (const {target, replacement} of replacements) {
    if (css.includes(target)) {
        css = css.replace(target, replacement);
        changedCount++;
    } else {
        console.log("Could not find target:", target.substring(0, 50) + "...");
    }
}

fs.writeFileSync('src/app/globals.css', css);
console.log(`Replaced ${changedCount} out of ${replacements.length} chunks.`);
