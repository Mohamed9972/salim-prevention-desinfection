/**
 * Custom line-art scene: a protection agent spraying toward a shielded house.
 * Echoes the company logo (sprayer man) in brand duotone. No stock imagery.
 * Mist particles drift via CSS; disabled under prefers-reduced-motion.
 * The scene auto-mirrors in RTL so the agent always sprays "forward".
 */
export function HeroVisual() {
  return (
    <div className="rtl:-scale-x-100" aria-hidden="true">
      <svg
        viewBox="0 0 400 250"
        className="h-auto w-full"
        fill="none"
        role="presentation"
      >
        {/* soft glow behind shield */}
        <circle cx="120" cy="120" r="86" fill="#45a5bc" opacity="0.10" />

        {/* pulsing ring on shield */}
        <circle
          cx="120"
          cy="118"
          r="70"
          stroke="#7cc4d4"
          strokeWidth="1.5"
          opacity="0.5"
          className="pulse-ring"
        />

        {/* shield */}
        <path
          d="M120 44l56 20v42c0 37-26 58-56 70-30-12-56-33-56-70V64l56-20Z"
          fill="#ffffff"
          opacity="0.06"
          stroke="#7cc4d4"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M104 116l12 12 22-24"
          stroke="#7cc4d4"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* house */}
        <g strokeLinejoin="round">
          <rect x="82" y="138" width="76" height="56" rx="4" fill="#ffffff" opacity="0.08" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2.5" />
          <path d="M70 140l50-34 50 34" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />
          <rect x="110" y="162" width="20" height="32" rx="2" fill="#45a5bc" opacity="0.9" />
          <rect x="90" y="148" width="15" height="13" rx="2" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
        </g>

        {/* ground */}
        <line x1="16" y1="218" x2="384" y2="218" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="228" x2="150" y2="228" stroke="#ffffff" strokeOpacity="0.10" strokeWidth="2" strokeLinecap="round" />
        <line x1="250" y1="228" x2="340" y2="228" stroke="#ffffff" strokeOpacity="0.10" strokeWidth="2" strokeLinecap="round" />

        {/* spray cone */}
        <polygon points="252,150 168,168 168,196 252,162" fill="#45a5bc" opacity="0.14" />

        {/* technician */}
        <g strokeLinecap="round" transform="translate(297 152) scale(1.18) translate(-297 -152)">
          {/* backpack tank */}
          <rect x="308" y="116" width="18" height="36" rx="7" fill="#0e7490" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="2.5" />
          <line x1="317" y1="108" x2="317" y2="116" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2.5" />
          {/* hose */}
          <path d="M310 150c-8 10-22 12-34 8" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2.5" />
          {/* legs */}
          <line x1="296" y1="162" x2="284" y2="206" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="5" />
          <line x1="296" y1="162" x2="308" y2="206" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="5" />
          {/* body */}
          <line x1="296" y1="108" x2="296" y2="162" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="5" />
          {/* arm + wand */}
          <line x1="296" y1="126" x2="270" y2="141" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="4" />
          <line x1="270" y1="141" x2="250" y2="150" stroke="#7cc4d4" strokeWidth="3.5" />
          {/* head + cap */}
          <circle cx="296" cy="94" r="12" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="3.5" />
          <path d="M284 90a12 12 0 0 1 20-6l3 5h-24l1-1Z" fill="#45a5bc" opacity="0.9" />
        </g>

        {/* knocked-out bugs near the house */}
        <g stroke="#ffffff" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round">
          <ellipse cx="182" cy="208" rx="7" ry="5" />
          <line x1="176" y1="204" x2="171" y2="200" />
          <line x1="176" y1="212" x2="171" y2="216" />
          <line x1="188" y1="204" x2="193" y2="200" />
          <line x1="188" y1="212" x2="193" y2="216" />
          <line x1="189" y1="206" x2="196" y2="200" />
          <line x1="196" y1="200" x2="199" y2="203" />
          <line x1="196" y1="200" x2="194" y2="196" />
          <ellipse cx="212" cy="212" rx="5" ry="4" />
          <line x1="207" y1="209" x2="203" y2="206" />
          <line x1="207" y1="215" x2="203" y2="218" />
          <line x1="217" y1="209" x2="221" y2="206" />
          <line x1="217" y1="215" x2="221" y2="218" />
        </g>

        {/* sparkles */}
        <g stroke="#7cc4d4" strokeWidth="2.5" strokeLinecap="round">
          <line x1="222" y1="60" x2="222" y2="72" />
          <line x1="216" y1="66" x2="228" y2="66" />
          <line x1="352" y1="66" x2="352" y2="76" />
          <line x1="347" y1="71" x2="357" y2="71" />
        </g>

        {/* mist particles */}
        <g>
          <circle cx="244" cy="154" r="3.2" fill="#9adce8" className="mist-dot" style={{ animationDelay: "0s" }} />
          <circle cx="238" cy="164" r="2.4" fill="#9adce8" className="mist-dot" style={{ animationDelay: "0.7s" }} />
          <circle cx="246" cy="172" r="2.8" fill="#9adce8" className="mist-dot" style={{ animationDelay: "1.3s" }} />
          <circle cx="240" cy="158" r="2" fill="#d7eef3" className="mist-dot" style={{ animationDelay: "1.9s" }} />
        </g>
      </svg>
    </div>
  );
}
