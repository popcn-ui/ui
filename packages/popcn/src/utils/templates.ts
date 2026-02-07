export const AURORAPOP_CSS = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* =====================================================
   AuroraPop Design System - CSS Tokens
   ===================================================== */

:root {
  /* Base colors (r g b format for Tailwind alpha) */
  --ap-background: 10 10 20;
  --ap-foreground: 255 255 255;

  /* Primary/Secondary - Cosmic theme default */
  --ap-primary: 99 102 241;
  --ap-primary-foreground: 255 255 255;
  --ap-secondary: 168 85 247;
  --ap-secondary-foreground: 255 255 255;

  /* Aurora gradient tokens - Cosmic */
  --ap-aurora-1: 99 102 241;
  --ap-aurora-2: 139 92 246;
  --ap-aurora-3: 56 189 248;

  /* Glow */
  --ap-glow-strength: 1;

  /* Gradient control */
  --ap-grad: 1;

  /* =====================================================
     Gradient Direction Tokens
     ===================================================== */

  /* Gradient angle (0=top, 90=right, 180=bottom, 270=left) */
  --ap-grad-angle: 135deg;      /* Default: top-left to bottom-right */

  /* Shine/shimmer angle */
  --ap-shine-angle: 105deg;     /* Shimmer sweep angle */

  /* Shine thickness (percentage for gradient spread) */
  --ap-shine-width: 10%;        /* Width of the shine band (5%=thin, 10%=normal, 20%=wide) */

  /* =====================================================
     Animation Tokens
     ===================================================== */

  /* Duration tokens */
  --ap-dur-1: 100ms;   /* Micro: button press */
  --ap-dur-2: 200ms;   /* Quick: pop, snap */
  --ap-dur-3: 300ms;   /* Standard: most transitions */
  --ap-dur-4: 500ms;   /* Emphasis: entrance animations, morph */
  --ap-dur-5: 800ms;   /* Dramatic: confetti, complex sequences */

  /* Easing tokens */
  --ap-ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);       /* Bouncy */
  --ap-ease-soft: cubic-bezier(0.4, 0, 0.2, 1);           /* Soft */
  --ap-ease-snap: cubic-bezier(0.2, 0, 0, 1);             /* Sharp */
  --ap-ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Elastic */

  /* Motion control tokens */
  --ap-motion: 1;        /* 1=enabled, 0=disabled (follows --ap-grad pattern) */
  --ap-motion-scale: 1;  /* Intensity scale (0.5=subtle, 1=normal, 1.5=dramatic) */

  /* Borders/Muted */
  --ap-border: 63 63 70;
  --ap-muted: 39 39 42;
  --ap-muted-foreground: 161 161 170;

  /* Ring */
  --ap-ring: 99 102 241;

  /* Radius */
  --ap-radius: 0.5rem;
}

/* Dark theme (default) */
.dark,
[data-theme="dark"] {
  --ap-background: 10 10 20;
  --ap-foreground: 255 255 255;
  --ap-border: 63 63 70;
  --ap-muted: 39 39 42;
  --ap-muted-foreground: 161 161 170;
}

/* Light theme */
.light,
[data-theme="light"] {
  --ap-background: 250 250 252;
  --ap-foreground: 15 15 20;
  --ap-primary-foreground: 255 255 255;
  --ap-secondary-foreground: 255 255 255;
  --ap-border: 228 228 231;
  --ap-muted: 244 244 245;
  --ap-muted-foreground: 113 113 122;
}

/* Theme Preset: Sunset (Pink/Orange/Yellow) */
.theme-sunset,
[data-theme="sunset"] {
  --ap-primary: 236 72 153;
  --ap-secondary: 251 146 60;
  --ap-aurora-1: 236 72 153;
  --ap-aurora-2: 251 146 60;
  --ap-aurora-3: 250 204 21;
  --ap-ring: 236 72 153;
}

/* Theme Preset: Neon (Cyan/Magenta/Lime) */
.theme-neon,
[data-theme="neon"] {
  --ap-primary: 6 182 212;
  --ap-secondary: 217 70 239;
  --ap-aurora-1: 6 182 212;
  --ap-aurora-2: 217 70 239;
  --ap-aurora-3: 163 230 53;
  --ap-ring: 6 182 212;
}

/* Theme Preset: Mono (Grayscale) */
.theme-mono,
[data-theme="mono"] {
  --ap-primary: 161 161 170;
  --ap-primary-foreground: 10 10 20;
  --ap-secondary: 113 113 122;
  --ap-secondary-foreground: 255 255 255;
  --ap-aurora-1: 161 161 170;
  --ap-aurora-2: 113 113 122;
  --ap-aurora-3: 82 82 91;
  --ap-ring: 161 161 170;
  --ap-glow-strength: 0.5;
}

/* Gradient disable */
.ap-no-gradient {
  --ap-grad: 0;
}

/* Motion disable */
.ap-no-motion {
  --ap-motion: 0;
}

/* Respect system reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  :root {
    --ap-motion: 0;
    --ap-motion-scale: 0;
  }
}

/* =====================================================
   Base Styles
   ===================================================== */

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }
}

/* =====================================================
   Aurora Background Component
   ===================================================== */

.aurora-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: rgb(var(--ap-background));
}

.aurora-bg::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
      ellipse 80% 50% at 20% 40%,
      rgba(var(--ap-aurora-1), 0.15),
      transparent 50%
    ),
    radial-gradient(
      ellipse 60% 40% at 80% 60%,
      rgba(var(--ap-aurora-2), 0.12),
      transparent 50%
    ),
    radial-gradient(
      ellipse 50% 60% at 40% 80%,
      rgba(var(--ap-aurora-3), 0.1),
      transparent 50%
    );
  animation: aurora-shift 15s ease infinite;
  background-size: 200% 200%;
}

@keyframes aurora-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* =====================================================
   Utility Classes
   ===================================================== */

/* Aurora gradient text */
.text-aurora {
  background: linear-gradient(
    var(--ap-grad-angle, 135deg),
    rgb(var(--ap-aurora-1)),
    rgb(var(--ap-aurora-2)),
    rgb(var(--ap-aurora-3))
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Aurora gradient background */
.bg-aurora {
  background: linear-gradient(
    var(--ap-grad-angle, 135deg),
    rgb(var(--ap-aurora-1)),
    rgb(var(--ap-aurora-2)),
    rgb(var(--ap-aurora-3))
  );
}

/* Shine effect overlay (use on ::before pseudo-element) */
.shine-effect::before {
  background: linear-gradient(
    var(--ap-shine-angle, 105deg),
    transparent calc(50% - var(--ap-shine-width, 10%)),
    rgba(255, 255, 255, 0.35) 50%,
    transparent calc(50% + var(--ap-shine-width, 10%))
  );
}

/* Switch aurora variant */
.switch-aurora[data-state="checked"] {
  background: linear-gradient(
    var(--ap-grad-angle, 135deg),
    rgb(var(--ap-aurora-1)),
    rgb(var(--ap-aurora-2)),
    rgb(var(--ap-aurora-3))
  );
}

/* Tabs trigger aurora variant */
.tab-trigger-aurora[data-state="active"] {
  background: linear-gradient(
    var(--ap-grad-angle, 135deg),
    rgb(var(--ap-aurora-1)),
    rgb(var(--ap-aurora-2)),
    rgb(var(--ap-aurora-3))
  );
}

/* Calendar aurora variant - selected day */
.calendar-aurora button[data-selected-single="true"],
.calendar-aurora button[data-range-start="true"],
.calendar-aurora button[data-range-end="true"] {
  background: linear-gradient(
    var(--ap-grad-angle, 135deg),
    rgb(var(--ap-aurora-1)),
    rgb(var(--ap-aurora-2)),
    rgb(var(--ap-aurora-3))
  );
  color: rgb(var(--ap-primary-foreground));
}

/* ===== Gradient Direction Utilities ===== */
.ap-grad-t { --ap-grad-angle: 0deg; }
.ap-grad-tr { --ap-grad-angle: 45deg; }
.ap-grad-r { --ap-grad-angle: 90deg; }
.ap-grad-br { --ap-grad-angle: 135deg; }
.ap-grad-b { --ap-grad-angle: 180deg; }
.ap-grad-bl { --ap-grad-angle: 225deg; }
.ap-grad-l { --ap-grad-angle: 270deg; }
.ap-grad-tl { --ap-grad-angle: 315deg; }

/* Shine direction utilities */
.ap-shine-t { --ap-shine-angle: 0deg; }
.ap-shine-tr { --ap-shine-angle: 45deg; }
.ap-shine-r { --ap-shine-angle: 90deg; }
.ap-shine-br { --ap-shine-angle: 135deg; }
.ap-shine-b { --ap-shine-angle: 180deg; }
.ap-shine-bl { --ap-shine-angle: 225deg; }
.ap-shine-l { --ap-shine-angle: 270deg; }
.ap-shine-tl { --ap-shine-angle: 315deg; }

/* Shine width utilities */
.ap-shine-thin { --ap-shine-width: 5%; }
.ap-shine-normal { --ap-shine-width: 10%; }
.ap-shine-wide { --ap-shine-width: 20%; }
.ap-shine-ultra { --ap-shine-width: 30%; }

/* Glass effect */
.glass {
  background: rgba(var(--ap-background), 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(var(--ap-border), 0.3);
}

/* Glow effect on hover */
.glow-hover {
  transition: box-shadow 0.3s ease;
}

.glow-hover:hover {
  box-shadow:
    0 0 20px rgba(var(--ap-primary), calc(0.3 * var(--ap-glow-strength))),
    0 0 40px rgba(var(--ap-secondary), calc(0.2 * var(--ap-glow-strength)));
}

/* =====================================================
   Animation Utility Classes
   ===================================================== */

@layer utilities {
  /* ===== Transition Presets ===== */
  .ap-trans-pop {
    transition-property: transform, opacity, box-shadow;
    transition-duration: var(--ap-dur-2);
    transition-timing-function: var(--ap-ease-pop);
  }

  .ap-trans-snap {
    transition-property: transform, opacity, box-shadow;
    transition-duration: var(--ap-dur-1);
    transition-timing-function: var(--ap-ease-snap);
  }

  .ap-trans-soft {
    transition-property: transform, opacity, box-shadow;
    transition-duration: var(--ap-dur-3);
    transition-timing-function: var(--ap-ease-soft);
  }

  .ap-trans-spring {
    transition-property: transform, opacity, box-shadow;
    transition-duration: var(--ap-dur-3);
    transition-timing-function: var(--ap-ease-spring);
  }

  /* ===== Hover States ===== */
  .ap-hover-float {
    transition: transform var(--ap-dur-3) var(--ap-ease-soft);
  }
  .ap-hover-float:hover {
    transform: translateY(calc(-4px * var(--ap-motion-scale, 1)));
  }

  .ap-hover-glow {
    transition: box-shadow var(--ap-dur-3) var(--ap-ease-soft);
  }
  .ap-hover-glow:hover {
    box-shadow: 0 0 calc(20px * var(--ap-motion-scale, 1)) rgba(var(--ap-primary), 0.4);
  }

  .ap-hover-scale {
    transition: transform var(--ap-dur-2) var(--ap-ease-pop);
  }
  .ap-hover-scale:hover {
    transform: scale(calc(1 + 0.05 * var(--ap-motion-scale, 1)));
  }

  .ap-hover-tilt {
    transition: transform var(--ap-dur-2) var(--ap-ease-pop);
  }
  .ap-hover-tilt:hover {
    transform: rotate(calc(3deg * var(--ap-motion-scale, 1)));
  }

  /* ===== Active States ===== */
  .ap-active-squish {
    transition: transform var(--ap-dur-1) var(--ap-ease-snap);
  }
  .ap-active-squish:active {
    transform: scale(0.95, 0.97);
  }

  .ap-active-press {
    transition: transform var(--ap-dur-1) var(--ap-ease-snap);
  }
  .ap-active-press:active {
    transform: scale(0.97);
  }

  /* ===== Enter Animations ===== */
  .ap-enter-pop {
    animation: ap-scale-in var(--ap-dur-2) var(--ap-ease-pop) forwards;
  }

  .ap-enter-slide {
    animation: ap-slide-up var(--ap-dur-3) var(--ap-ease-spring) forwards;
  }

  .ap-enter-bounce {
    animation: ap-bounce var(--ap-dur-3) var(--ap-ease-pop) forwards;
  }

  .ap-enter-jelly {
    animation: ap-jelly var(--ap-dur-3) var(--ap-ease-spring) forwards;
  }

  /* ===== Exit Animations ===== */
  .ap-exit-fade {
    animation: ap-scale-out var(--ap-dur-2) var(--ap-ease-soft) forwards;
  }

  .ap-exit-slide {
    animation: ap-slide-down var(--ap-dur-2) var(--ap-ease-soft) forwards;
  }

  /* ===== Special Effects ===== */
  .ap-wiggle {
    animation: ap-wiggle var(--ap-dur-4) var(--ap-ease-snap);
  }

  .ap-pulse-ring {
    animation: ap-pulse-ring var(--ap-dur-4) var(--ap-ease-soft) forwards;
  }

  .ap-confetti {
    animation: ap-confetti var(--ap-dur-5) var(--ap-ease-soft) forwards;
  }

  /* ===== Motion Reduce ===== */
  .ap-motion-reduce,
  .ap-motion-reduce * {
    --ap-motion: 0 !important;
    --ap-motion-scale: 0 !important;
    animation: none !important;
    transition-duration: 0.01ms !important;
  }
}

/* Global reduced motion override */
@media (prefers-reduced-motion: reduce) {
  .ap-hover-float:hover,
  .ap-hover-scale:hover,
  .ap-hover-tilt:hover,
  .ap-active-squish:active,
  .ap-active-press:active {
    transform: none;
  }

  .ap-enter-pop,
  .ap-enter-slide,
  .ap-enter-bounce,
  .ap-enter-jelly,
  .ap-exit-fade,
  .ap-exit-slide,
  .ap-wiggle,
  .ap-pulse-ring,
  .ap-confetti {
    animation: none;
    opacity: 1;
  }
}
`

export const NEUMOPOP_CSS = `
/* =====================================================
   NeumoPop Skin - Neumorphism + Pop Design
   ===================================================== */

[data-skin="neumopop"] {
  --ap-shadow-light: rgba(255, 255, 255, 0.05);
  --ap-shadow-dark: rgba(0, 0, 0, 0.4);
  --ap-elev-1: 4px 4px 8px var(--ap-shadow-dark),
               -4px -4px 8px var(--ap-shadow-light);
  --ap-elev-2: 6px 6px 12px var(--ap-shadow-dark),
               -6px -6px 12px var(--ap-shadow-light);
  --ap-elev-3: 10px 10px 20px var(--ap-shadow-dark),
               -10px -10px 20px var(--ap-shadow-light);
  --ap-inset-1: inset 2px 2px 5px var(--ap-shadow-dark),
                inset -2px -2px 5px var(--ap-shadow-light);
  --ap-inset-2: inset 4px 4px 8px var(--ap-shadow-dark),
                inset -4px -4px 8px var(--ap-shadow-light);
  --ap-glow-strength: 0.3;
}

/* Light Mode */
[data-skin="neumopop"].light,
.light[data-skin="neumopop"],
.light [data-skin="neumopop"],
[data-skin="neumopop"][data-theme="light"],
[data-theme="light"][data-skin="neumopop"],
[data-theme="light"] [data-skin="neumopop"] {
  --ap-shadow-light: rgba(255, 255, 255, 0.7);
  --ap-shadow-dark: rgba(0, 0, 0, 0.12);
}

[data-skin="neumopop"] .bg-aurora {
  background: rgb(var(--ap-primary));
  box-shadow: var(--ap-elev-2);
}

[data-skin="neumopop"] .text-aurora {
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
  color: rgb(var(--ap-primary));
}

[data-skin="neumopop"] .glass {
  background: rgb(var(--ap-muted));
  backdrop-filter: none;
  border: 1px solid rgba(var(--ap-border), 0.2);
  box-shadow: var(--ap-elev-1);
}

[data-skin="neumopop"] .shine-effect::before {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  );
}

[data-skin="neumopop"] .glow-hover {
  transition: box-shadow var(--ap-dur-3, 300ms) var(--ap-ease-soft, ease);
}

[data-skin="neumopop"] .glow-hover:hover {
  box-shadow: var(--ap-elev-3);
}

[data-skin="neumopop"] .switch-aurora[data-state="checked"] {
  background: rgb(var(--ap-primary));
  box-shadow: var(--ap-inset-2);
}

[data-skin="neumopop"] .tab-trigger-aurora[data-state="active"] {
  background: rgb(var(--ap-muted));
  color: rgb(var(--ap-primary));
  box-shadow: var(--ap-elev-1);
  border-bottom: 2px solid rgb(var(--ap-primary));
}

[data-skin="neumopop"] .calendar-aurora button[data-selected-single="true"],
[data-skin="neumopop"] .calendar-aurora button[data-range-start="true"],
[data-skin="neumopop"] .calendar-aurora button[data-range-end="true"] {
  background: rgb(var(--ap-primary));
  box-shadow: var(--ap-inset-1);
  color: rgb(var(--ap-primary-foreground));
}

[data-skin="neumopop"] .aurora-bg {
  background: rgb(var(--ap-background));
}

[data-skin="neumopop"] .aurora-bg::before {
  background: none;
  animation: none;
}

[data-skin="neumopop"] button.bg-aurora,
[data-skin="neumopop"] [role="button"].bg-aurora {
  transition: box-shadow var(--ap-dur-1, 100ms) var(--ap-ease-snap, ease);
}

[data-skin="neumopop"] button.bg-aurora:active,
[data-skin="neumopop"] [role="button"].bg-aurora:active {
  box-shadow: var(--ap-inset-1);
}

[data-skin="neumopop"] input,
[data-skin="neumopop"] textarea,
[data-skin="neumopop"] select {
  box-shadow: var(--ap-inset-1);
}

[data-skin="neumopop"] input:focus,
[data-skin="neumopop"] textarea:focus,
[data-skin="neumopop"] select:focus {
  border-color: rgb(var(--ap-primary));
  box-shadow: var(--ap-inset-1), 0 0 0 2px rgba(var(--ap-primary), 0.2);
}

[data-skin="neumopop"] .rounded-lg[class*="border"] {
  box-shadow: var(--ap-elev-1);
  transition: box-shadow var(--ap-dur-3, 300ms) var(--ap-ease-soft, ease);
}

[data-skin="neumopop"] .rounded-lg[class*="border"]:hover {
  box-shadow: var(--ap-elev-2);
}

@media (prefers-reduced-motion: reduce) {
  [data-skin="neumopop"] button.bg-aurora,
  [data-skin="neumopop"] [role="button"].bg-aurora,
  [data-skin="neumopop"] .glow-hover,
  [data-skin="neumopop"] .rounded-lg[class*="border"] {
    transition-duration: 0.01ms;
  }
}
`

export const GLASSPOP_CSS = `
/* =====================================================
   GlassPop Skin - Apple Liquid Glass Design
   Presets: glasspop-frosted (default), glasspop-liquid, glasspop-lite
   ===================================================== */

[data-skin="glasspop"] {
  --ap-glass-bg: var(--ap-background);
  --ap-glass-alpha: 0.22;
  --ap-glass-blur: 32px;
  --ap-glass-saturation: 1.7;
  --ap-glass-brightness: 1.08;
  --ap-glass-contrast: 1.05;
  --ap-glass-border-alpha: 0.22;
  --ap-glass-edge: inset 0 1px 0 rgba(255, 255, 255, 0.18),
                   inset 0 -1px 0 rgba(0, 0, 0, 0.18);
  --ap-glass-highlight-alpha: 0.18;
  --ap-glass-shadow-alpha: 0.22;
  --ap-liquid-shine-alpha: 0.22;
  --ap-liquid-shine-speed: 4s;
  --ap-liquid-noise-alpha: 0.015;
  --ap-liquid-refract-alpha: 0.12;
  --ap-glass: 1;
  --ap-liquid: 1;
  --ap-glow-strength: 0.5;
  --ap-surface: rgba(var(--ap-glass-bg), var(--ap-glass-alpha));
  --ap-surface-border: rgba(var(--ap-border), var(--ap-glass-border-alpha));
  --ap-surface-shadow: 0 10px 40px rgba(0, 0, 0, var(--ap-glass-shadow-alpha)),
                        0 2px 8px rgba(0, 0, 0, calc(var(--ap-glass-shadow-alpha) * 0.6));
}

/* Light Mode */
[data-skin="glasspop"].light,
.light[data-skin="glasspop"],
.light [data-skin="glasspop"],
[data-skin="glasspop"][data-theme="light"],
[data-theme="light"][data-skin="glasspop"],
[data-theme="light"] [data-skin="glasspop"] {
  --ap-glass-alpha: 0.38;
  --ap-glass-blur: 34px;
  --ap-glass-saturation: 1.5;
  --ap-glass-brightness: 1.02;
  --ap-glass-contrast: 1.02;
  --ap-glass-border-alpha: 0.35;
  --ap-glass-edge: inset 0 1px 0 rgba(255, 255, 255, 0.65),
                   inset 0 -1px 0 rgba(0, 0, 0, 0.06);
  --ap-glass-highlight-alpha: 0.22;
  --ap-glass-shadow-alpha: 0.08;
  --ap-liquid-shine-alpha: 0.24;
  --ap-liquid-refract-alpha: 0.14;
}

/* Preset: Frosted (default) */
[data-skin="glasspop"].glasspop-frosted,
[data-skin="glasspop"]:not(.glasspop-liquid):not(.glasspop-lite) {
  --ap-liquid: 0;
}

/* Preset: Liquid */
[data-skin="glasspop"].glasspop-liquid {
  --ap-liquid: 1;
  --ap-liquid-shine-alpha: 0.26;
  --ap-liquid-shine-speed: 3.2s;
  --ap-liquid-noise-alpha: 0.03;
  --ap-liquid-refract-alpha: 0.16;
  --ap-glass-highlight-alpha: 0.2;
}

/* Preset: Lite (low-spec) */
[data-skin="glasspop"].glasspop-lite {
  --ap-glass-blur: 8px;
  --ap-glass-saturation: 1.2;
  --ap-glass-brightness: 1;
  --ap-glass-contrast: 1;
  --ap-liquid: 0;
  --ap-glass-shadow-alpha: 0.1;
}

/* Compatibility Switches */
[data-skin="glasspop"] .ap-no-glass { --ap-glass: 0; }
[data-skin="glasspop"] .ap-no-liquid { --ap-liquid: 0; }

/* .glass */
[data-skin="glasspop"] .glass {
  position: relative;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, var(--ap-glass-highlight-alpha)) 0%,
      rgba(255, 255, 255, 0) 45%
    ),
    linear-gradient(
      315deg,
      rgba(0, 0, 0, 0.22) 0%,
      rgba(0, 0, 0, 0) 50%
    ),
    var(--ap-surface);
  backdrop-filter: blur(var(--ap-glass-blur)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness)) contrast(var(--ap-glass-contrast));
  -webkit-backdrop-filter: blur(var(--ap-glass-blur)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness)) contrast(var(--ap-glass-contrast));
  border: 1px solid var(--ap-surface-border);
  box-shadow: var(--ap-glass-edge), var(--ap-surface-shadow);
}

[data-skin="glasspop"] .glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(
      120% 140% at 0% 0%,
      rgba(255, 255, 255, var(--ap-glass-highlight-alpha)) 0%,
      transparent 55%
    ),
    radial-gradient(
      120% 120% at 100% 0%,
      rgba(255, 255, 255, calc(var(--ap-glass-highlight-alpha) * 0.7)) 0%,
      transparent 60%
    ),
    radial-gradient(
      160% 120% at 50% 120%,
      rgba(0, 0, 0, calc(var(--ap-liquid-refract-alpha) * 0.7)) 0%,
      transparent 60%
    );
  pointer-events: none;
}

/* .bg-aurora */
[data-skin="glasspop"] .bg-aurora {
  position: relative;
  background: rgba(var(--ap-primary), 0.7);
  backdrop-filter: blur(var(--ap-glass-blur)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness)) contrast(var(--ap-glass-contrast));
  -webkit-backdrop-filter: blur(var(--ap-glass-blur)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness)) contrast(var(--ap-glass-contrast));
  border: 1px solid rgba(255, 255, 255, calc(var(--ap-glass-border-alpha) + 0.08));
  box-shadow: var(--ap-glass-edge), var(--ap-surface-shadow);
}

[data-skin="glasspop"] .bg-aurora::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, calc(var(--ap-glass-highlight-alpha) * 0.8)) 0%,
    rgba(255, 255, 255, 0) 55%
  );
  pointer-events: none;
}

/* .text-aurora */
[data-skin="glasspop"] .text-aurora {
  background: linear-gradient(
    var(--ap-grad-angle, 135deg),
    rgb(var(--ap-aurora-1)),
    rgb(var(--ap-aurora-2)),
    rgb(var(--ap-aurora-3))
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* .shine-effect */
[data-skin="glasspop"] .shine-effect::before {
  background: linear-gradient(
    var(--ap-shine-angle, 105deg),
    transparent 30%,
    rgba(255, 255, 255, var(--ap-liquid-shine-alpha)) 50%,
    transparent 70%
  );
}

/* .glow-hover */
[data-skin="glasspop"] .glow-hover {
  transition: box-shadow var(--ap-dur-3, 300ms) var(--ap-ease-soft, ease),
              background var(--ap-dur-3, 300ms) var(--ap-ease-soft, ease);
}

[data-skin="glasspop"] .glow-hover:hover {
  box-shadow: var(--ap-glass-edge),
              0 8px 32px rgba(var(--ap-primary), calc(0.15 * var(--ap-glow-strength))),
              0 2px 8px rgba(0, 0, 0, var(--ap-glass-shadow-alpha));
}

/* .switch-aurora */
[data-skin="glasspop"] .switch-aurora[data-state="checked"] {
  background: rgba(var(--ap-primary), 0.75);
  backdrop-filter: blur(10px) saturate(1.4) brightness(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.4) brightness(1.05);
  box-shadow: var(--ap-glass-edge);
}

/* .tab-trigger-aurora */
[data-skin="glasspop"] .tab-trigger-aurora[data-state="active"] {
  background: var(--ap-surface);
  backdrop-filter: blur(var(--ap-glass-blur)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness)) contrast(var(--ap-glass-contrast));
  -webkit-backdrop-filter: blur(var(--ap-glass-blur)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness)) contrast(var(--ap-glass-contrast));
  color: rgb(var(--ap-foreground));
  box-shadow: var(--ap-glass-edge),
              0 2px 8px rgba(0, 0, 0, var(--ap-glass-shadow-alpha));
  border-bottom: 2px solid rgba(var(--ap-primary), 0.6);
}

/* .calendar-aurora */
[data-skin="glasspop"] .calendar-aurora button[data-selected-single="true"],
[data-skin="glasspop"] .calendar-aurora button[data-range-start="true"],
[data-skin="glasspop"] .calendar-aurora button[data-range-end="true"] {
  background: rgba(var(--ap-primary), 0.65);
  backdrop-filter: blur(10px) saturate(1.4) brightness(1.05);
  -webkit-backdrop-filter: blur(10px) saturate(1.4) brightness(1.05);
  box-shadow: var(--ap-glass-edge);
  color: rgb(var(--ap-primary-foreground));
}

/* .aurora-bg */
[data-skin="glasspop"] .aurora-bg {
  background-color: rgb(var(--ap-background));
  background-image: linear-gradient(
    var(--ap-grad-angle, 135deg),
    rgb(var(--ap-aurora-1)),
    rgb(var(--ap-aurora-2)),
    rgb(var(--ap-aurora-3))
  );
}

[data-skin="glasspop"] .aurora-bg::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
      ellipse 80% 60% at 20% 30%,
      rgba(var(--ap-aurora-1), 0.35),
      transparent 55%
    ),
    radial-gradient(
      ellipse 70% 50% at 80% 50%,
      rgba(var(--ap-aurora-2), 0.3),
      transparent 55%
    ),
    radial-gradient(
      ellipse 60% 70% at 40% 80%,
      rgba(var(--ap-aurora-3), 0.25),
      transparent 55%
    );
  animation: aurora-shift 20s ease infinite;
  background-size: 200% 200%;
}

.light[data-skin="glasspop"] .aurora-bg::before,
[data-theme="light"][data-skin="glasspop"] .aurora-bg::before,
[data-theme="light"] [data-skin="glasspop"] .aurora-bg::before {
  background: radial-gradient(
      ellipse 80% 60% at 20% 30%,
      rgba(var(--ap-aurora-1), 0.25),
      transparent 55%
    ),
    radial-gradient(
      ellipse 70% 50% at 80% 50%,
      rgba(var(--ap-aurora-2), 0.2),
      transparent 55%
    ),
    radial-gradient(
      ellipse 60% 70% at 40% 80%,
      rgba(var(--ap-aurora-3), 0.18),
      transparent 55%
    );
  background-size: 200% 200%;
}

/* Dialog */
[data-skin="glasspop"] .ap-dialog-overlay {
  background: rgba(0, 0, 0, 0.35);
}

[data-skin="glasspop"].light .ap-dialog-overlay,
.light [data-skin="glasspop"] .ap-dialog-overlay,
[data-theme="light"][data-skin="glasspop"] .ap-dialog-overlay,
[data-theme="light"] [data-skin="glasspop"] .ap-dialog-overlay {
  background: rgba(15, 23, 42, 0.18);
}

[data-skin="glasspop"] .ap-dialog-content {
  position: fixed;
  z-index: 60;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, calc(var(--ap-glass-highlight-alpha) * 0.8)) 0%,
      rgba(255, 255, 255, 0) 45%
    ),
    var(--ap-surface);
  backdrop-filter: blur(calc(var(--ap-glass-blur) * 0.9))
    saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness))
    contrast(var(--ap-glass-contrast));
  -webkit-backdrop-filter: blur(calc(var(--ap-glass-blur) * 0.9))
    saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness))
    contrast(var(--ap-glass-contrast));
  border-color: rgba(255, 255, 255, calc(var(--ap-glass-border-alpha) + 0.08));
  box-shadow: var(--ap-glass-edge),
              0 24px 80px rgba(0, 0, 0, 0.35);
}

/* Card */
[data-skin="glasspop"] .rounded-lg[class*="border"]:not(.ap-dialog-content),
[data-skin="glasspop"] .rounded-xl[class*="border"]:not(.ap-dialog-content) {
  position: relative;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, var(--ap-glass-highlight-alpha)) 0%,
      rgba(255, 255, 255, 0) 45%
    ),
    linear-gradient(
      315deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 55%
    ),
    var(--ap-surface);
  backdrop-filter: blur(var(--ap-glass-blur)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness)) contrast(var(--ap-glass-contrast));
  -webkit-backdrop-filter: blur(var(--ap-glass-blur)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness)) contrast(var(--ap-glass-contrast));
  border-color: var(--ap-surface-border);
  box-shadow: var(--ap-glass-edge), var(--ap-surface-shadow);
  transition: box-shadow var(--ap-dur-3, 300ms) var(--ap-ease-soft, ease),
              transform var(--ap-dur-3, 300ms) var(--ap-ease-soft, ease);
}

[data-skin="glasspop"] .rounded-lg[class*="border"]:not(.ap-dialog-content)::before,
[data-skin="glasspop"] .rounded-xl[class*="border"]:not(.ap-dialog-content)::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background:
    radial-gradient(
      120% 140% at 0% 0%,
      rgba(255, 255, 255, var(--ap-glass-highlight-alpha)) 0%,
      transparent 55%
    ),
    radial-gradient(
      160% 120% at 50% 120%,
      rgba(0, 0, 0, calc(var(--ap-liquid-refract-alpha) * 0.6)) 0%,
      transparent 60%
    );
  pointer-events: none;
}

[data-skin="glasspop"] .rounded-lg[class*="border"]:not(.ap-dialog-content):hover,
[data-skin="glasspop"] .rounded-xl[class*="border"]:not(.ap-dialog-content):hover {
  box-shadow: var(--ap-glass-edge),
              0 8px 32px rgba(0, 0, 0, calc(var(--ap-glass-shadow-alpha) * 1.5)),
              0 2px 8px rgba(0, 0, 0, var(--ap-glass-shadow-alpha));
}

/* Button */
[data-skin="glasspop"] button.bg-aurora,
[data-skin="glasspop"] [role="button"].bg-aurora {
  transition: box-shadow var(--ap-dur-1, 100ms) var(--ap-ease-snap, ease),
              background var(--ap-dur-1, 100ms) var(--ap-ease-snap, ease),
              transform var(--ap-dur-1, 100ms) var(--ap-ease-snap, ease);
}

[data-skin="glasspop"] button.bg-aurora:hover,
[data-skin="glasspop"] [role="button"].bg-aurora:hover {
  background: rgba(var(--ap-primary), 0.8);
  box-shadow: var(--ap-glass-edge),
              0 4px 16px rgba(var(--ap-primary), 0.2),
              0 1px 4px rgba(0, 0, 0, var(--ap-glass-shadow-alpha));
}

[data-skin="glasspop"] button.bg-aurora:active,
[data-skin="glasspop"] [role="button"].bg-aurora:active {
  background: rgba(var(--ap-primary), 0.85);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15),
              0 1px 2px rgba(0, 0, 0, var(--ap-glass-shadow-alpha));
  transform: scale(0.98);
}

/* Input */
[data-skin="glasspop"] input,
[data-skin="glasspop"] textarea,
[data-skin="glasspop"] select {
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, calc(var(--ap-glass-highlight-alpha) * 0.6)) 0%,
      rgba(255, 255, 255, 0) 45%
    ),
    rgba(var(--ap-glass-bg), calc(var(--ap-glass-alpha) * 0.55));
  backdrop-filter: blur(calc(var(--ap-glass-blur) * 0.55)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness));
  -webkit-backdrop-filter: blur(calc(var(--ap-glass-blur) * 0.55)) saturate(var(--ap-glass-saturation))
    brightness(var(--ap-glass-brightness));
  border-color: var(--ap-surface-border);
  box-shadow: var(--ap-glass-edge),
              inset 0 1px 3px rgba(0, 0, 0, calc(var(--ap-glass-shadow-alpha) * 0.4));
}

[data-skin="glasspop"] input:focus,
[data-skin="glasspop"] textarea:focus,
[data-skin="glasspop"] select:focus {
  border-color: rgba(var(--ap-primary), 0.6);
  box-shadow: var(--ap-glass-edge),
              0 0 0 3px rgba(var(--ap-primary), 0.15),
              inset 0 1px 3px rgba(0, 0, 0, calc(var(--ap-glass-shadow-alpha) * 0.3));
}

/* Liquid Shine */
@keyframes glasspop-liquid-shine {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

[data-skin="glasspop"].glasspop-liquid .glass::after,
[data-skin="glasspop"].glasspop-liquid .rounded-lg[class*="border"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, var(--ap-liquid-shine-alpha)) 50%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: glasspop-liquid-shine var(--ap-liquid-shine-speed) var(--ap-ease-soft, ease) infinite;
  pointer-events: none;
}

[data-skin="glasspop"].glasspop-liquid button.bg-aurora::after,
[data-skin="glasspop"].glasspop-liquid [role="button"].bg-aurora::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(255, 255, 255, calc(var(--ap-liquid-shine-alpha) * 0.7)) 50%,
    transparent 65%
  );
  background-size: 200% 100%;
  animation: glasspop-liquid-shine var(--ap-liquid-shine-speed) var(--ap-ease-soft, ease) infinite;
  pointer-events: none;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  [data-skin="glasspop"] button.bg-aurora,
  [data-skin="glasspop"] [role="button"].bg-aurora,
  [data-skin="glasspop"] .glow-hover,
  [data-skin="glasspop"] .rounded-lg[class*="border"] {
    transition-duration: 0.01ms;
  }

  [data-skin="glasspop"].glasspop-liquid .glass::after,
  [data-skin="glasspop"].glasspop-liquid .rounded-lg[class*="border"]::after,
  [data-skin="glasspop"].glasspop-liquid button.bg-aurora::after,
  [data-skin="glasspop"].glasspop-liquid [role="button"].bg-aurora::after {
    animation: none;
  }

  [data-skin="glasspop"] .aurora-bg::before {
    animation: none;
  }
}
`

export const UTILS_TS = `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`

export const TAILWIND_CONFIG_EXTENSION = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--ap-background) / <alpha-value>)",
        foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--ap-background) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--ap-background) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--ap-primary) / <alpha-value>)",
          foreground: "rgb(var(--ap-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--ap-secondary) / <alpha-value>)",
          foreground: "rgb(var(--ap-secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--ap-muted) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--ap-muted) / <alpha-value>)",
          foreground: "rgb(var(--ap-muted-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68 / <alpha-value>)",
          foreground: "rgb(255 255 255 / <alpha-value>)",
        },
        border: "rgb(var(--ap-border) / <alpha-value>)",
        ring: "rgb(var(--ap-ring) / <alpha-value>)",
        input: "rgb(var(--ap-border) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "var(--ap-radius)",
      },
      keyframes: {
        "ap-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "ap-shine": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "ap-pop": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "ap-glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "aurora-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "ap-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "30%": { transform: "translateY(-8px) scale(1.02)" },
          "50%": { transform: "translateY(-4px) scale(1)" },
          "70%": { transform: "translateY(-2px) scale(1.01)" },
        },
        "ap-wiggle": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-4px)" },
          "20%": { transform: "translateX(4px)" },
          "30%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "50%": { transform: "translateX(-2px)" },
          "60%": { transform: "translateX(2px)" },
          "70%": { transform: "translateX(-1px)" },
          "80%": { transform: "translateX(1px)" },
        },
        "ap-pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "ap-slide-up": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "ap-slide-down": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(16px)", opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ap-scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "ap-scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        "ap-squish": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95, 0.97)" },
          "100%": { transform: "scale(1)" },
        },
        "ap-jelly": {
          "0%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(0.95, 1.05)" },
          "50%": { transform: "scale(1.05, 0.95)" },
          "75%": { transform: "scale(0.98, 1.02)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "ap-confetti": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(720deg)", opacity: "0" },
        },
        "caret-blink": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "ap-float": "ap-float 3s ease-in-out infinite",
        "ap-shine": "ap-shine 8s ease-in-out infinite",
        "ap-pop": "ap-pop 0.2s ease-out",
        "ap-glow-pulse": "ap-glow-pulse 2s ease-in-out infinite",
        "aurora-shift": "aurora-shift 15s ease infinite",
        "ap-bounce": "ap-bounce var(--ap-dur-3, 300ms) var(--ap-ease-pop)",
        "ap-wiggle": "ap-wiggle var(--ap-dur-4, 500ms) var(--ap-ease-snap)",
        "ap-pulse-ring": "ap-pulse-ring var(--ap-dur-4, 500ms) var(--ap-ease-soft) forwards",
        "ap-slide-up": "ap-slide-up var(--ap-dur-3, 300ms) var(--ap-ease-spring)",
        "ap-slide-down": "ap-slide-down var(--ap-dur-2, 200ms) var(--ap-ease-soft)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ap-scale-in": "ap-scale-in var(--ap-dur-2, 200ms) var(--ap-ease-pop)",
        "ap-scale-out": "ap-scale-out var(--ap-dur-2, 200ms) var(--ap-ease-soft)",
        "ap-squish": "ap-squish var(--ap-dur-1, 100ms) var(--ap-ease-snap)",
        "ap-jelly": "ap-jelly var(--ap-dur-3, 300ms) var(--ap-ease-spring)",
        "ap-confetti": "ap-confetti var(--ap-dur-5, 800ms) var(--ap-ease-soft) forwards",
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
      transitionDuration: {
        "ap-1": "var(--ap-dur-1)",
        "ap-2": "var(--ap-dur-2)",
        "ap-3": "var(--ap-dur-3)",
        "ap-4": "var(--ap-dur-4)",
        "ap-5": "var(--ap-dur-5)",
      },
      transitionTimingFunction: {
        "ap-pop": "var(--ap-ease-pop)",
        "ap-soft": "var(--ap-ease-soft)",
        "ap-snap": "var(--ap-ease-snap)",
        "ap-spring": "var(--ap-ease-spring)",
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(var(--ap-grad-angle, 135deg), rgb(var(--ap-aurora-1)), rgb(var(--ap-aurora-2)), rgb(var(--ap-aurora-3)))",
      },
    },
  },
  plugins: [],
}

export function getTailwindConfigContent(framework: string, configPath: string): string {
  const isTs = configPath.endsWith(".ts")
  const contentPaths =
    framework === "next"
      ? `"./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",`
      : framework === "astro"
        ? `"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",`
        : `"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",`

  const typeImport = isTs ? `import type { Config } from "tailwindcss"\n\n` : ""
  const typeAnnotation = isTs ? "" : `/** @type {import('tailwindcss').Config} */\n`
  const satisfies = isTs ? " satisfies Config" : ""

  return `${typeImport}${typeAnnotation}export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    ${contentPaths}
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--ap-background) / <alpha-value>)",
        foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--ap-background) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--ap-background) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--ap-primary) / <alpha-value>)",
          foreground: "rgb(var(--ap-primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--ap-secondary) / <alpha-value>)",
          foreground: "rgb(var(--ap-secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--ap-muted) / <alpha-value>)",
          foreground: "rgb(var(--ap-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--ap-muted) / <alpha-value>)",
          foreground: "rgb(var(--ap-muted-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68 / <alpha-value>)",
          foreground: "rgb(255 255 255 / <alpha-value>)",
        },
        border: "rgb(var(--ap-border) / <alpha-value>)",
        ring: "rgb(var(--ap-ring) / <alpha-value>)",
        input: "rgb(var(--ap-border) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "var(--ap-radius)",
      },
      keyframes: {
        "ap-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "ap-shine": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "ap-pop": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "ap-glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "aurora-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "ap-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "30%": { transform: "translateY(-8px) scale(1.02)" },
          "50%": { transform: "translateY(-4px) scale(1)" },
          "70%": { transform: "translateY(-2px) scale(1.01)" },
        },
        "ap-wiggle": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-4px)" },
          "20%": { transform: "translateX(4px)" },
          "30%": { transform: "translateX(-4px)" },
          "40%": { transform: "translateX(4px)" },
          "50%": { transform: "translateX(-2px)" },
          "60%": { transform: "translateX(2px)" },
          "70%": { transform: "translateX(-1px)" },
          "80%": { transform: "translateX(1px)" },
        },
        "ap-pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "ap-slide-up": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "ap-slide-down": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(16px)", opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ap-scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "ap-scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        "ap-squish": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95, 0.97)" },
          "100%": { transform: "scale(1)" },
        },
        "ap-jelly": {
          "0%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(0.95, 1.05)" },
          "50%": { transform: "scale(1.05, 0.95)" },
          "75%": { transform: "scale(0.98, 1.02)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "ap-confetti": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-100px) rotate(720deg)", opacity: "0" },
        },
        "caret-blink": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "ap-float": "ap-float 3s ease-in-out infinite",
        "ap-shine": "ap-shine 8s ease-in-out infinite",
        "ap-pop": "ap-pop 0.2s ease-out",
        "ap-glow-pulse": "ap-glow-pulse 2s ease-in-out infinite",
        "aurora-shift": "aurora-shift 15s ease infinite",
        "ap-bounce": "ap-bounce var(--ap-dur-3, 300ms) var(--ap-ease-pop)",
        "ap-wiggle": "ap-wiggle var(--ap-dur-4, 500ms) var(--ap-ease-snap)",
        "ap-pulse-ring": "ap-pulse-ring var(--ap-dur-4, 500ms) var(--ap-ease-soft) forwards",
        "ap-slide-up": "ap-slide-up var(--ap-dur-3, 300ms) var(--ap-ease-spring)",
        "ap-slide-down": "ap-slide-down var(--ap-dur-2, 200ms) var(--ap-ease-soft)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ap-scale-in": "ap-scale-in var(--ap-dur-2, 200ms) var(--ap-ease-pop)",
        "ap-scale-out": "ap-scale-out var(--ap-dur-2, 200ms) var(--ap-ease-soft)",
        "ap-squish": "ap-squish var(--ap-dur-1, 100ms) var(--ap-ease-snap)",
        "ap-jelly": "ap-jelly var(--ap-dur-3, 300ms) var(--ap-ease-spring)",
        "ap-confetti": "ap-confetti var(--ap-dur-5, 800ms) var(--ap-ease-soft) forwards",
        "caret-blink": "caret-blink 1.2s ease-out infinite",
      },
      transitionDuration: {
        "ap-1": "var(--ap-dur-1)",
        "ap-2": "var(--ap-dur-2)",
        "ap-3": "var(--ap-dur-3)",
        "ap-4": "var(--ap-dur-4)",
        "ap-5": "var(--ap-dur-5)",
      },
      transitionTimingFunction: {
        "ap-pop": "var(--ap-ease-pop)",
        "ap-soft": "var(--ap-ease-soft)",
        "ap-snap": "var(--ap-ease-snap)",
        "ap-spring": "var(--ap-ease-spring)",
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(var(--ap-grad-angle, 135deg), rgb(var(--ap-aurora-1)), rgb(var(--ap-aurora-2)), rgb(var(--ap-aurora-3)))",
      },
    },
  },
  plugins: [],
}${satisfies}
`
}
