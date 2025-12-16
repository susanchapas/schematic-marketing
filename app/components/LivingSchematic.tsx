'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// ===== DA VINCI PATENT ILLUSTRATION PALETTE =====
// Deep, saturated tones like oil paint on aged parchment
const INK_COLOR = '#0A1628'; // Deep midnight ink
const INK_SECONDARY = '#1B3A5F'; // Navy secondary
const GUIDE_COLOR = '#2E5A8C'; // Deep steel blue guides
const ACCENT_COLOR = '#D4A012'; // Rich patent gold
const ACCENT_WARM = '#B8651A'; // Copper/burnt sienna
const GLOW_COLOR = '#FF9800'; // Deep amber glow
const TEXT_COLOR = '#1A365D'; // Deep reading blue

// Ghost layer colors (faint erased sketches)
const GHOST_INK = 'rgba(10, 22, 40, 0.12)';

// Cyan/Teal liquid colors - saturated oil painting style
const CYAN_DEEP = '#006064'; // Deep teal
const CYAN_PRIMARY = '#00838F'; // Rich cyan
const CYAN_LIGHT = '#26C6DA'; // Bright pooling areas

// Amber/Gold filament - with bloom
const AMBER_CORE = '#FF8F00'; // Rich amber center
const AMBER_BLOOM = '#FFD54F'; // Bloom bleed color
const AMBER_HOT = '#FFAB00'; // Hot filament

// Bubble variety colors - more saturated
const BUBBLE_COLORS = [
  '#00ACC1', // Deep teal
  '#0097A7', // Rich cyan
  '#00838F', // Saturated teal
  '#26C6DA', // Bright pooling cyan
  '#4DD0E1', // Light accent
];

interface LivingSchematicProps {
  className?: string;
}

export default function LivingSchematic({ className = '' }: LivingSchematicProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;

    // Get all animated elements
    const guides = svg.querySelectorAll('.guide-line');
    const annotations = svg.querySelectorAll('.annotation');
    const mainPaths = svg.querySelectorAll('.main-path');
    const detailPaths = svg.querySelectorAll('.detail-path');
    const constructionLines = svg.querySelectorAll('.construction-line');
    const dimensionLines = svg.querySelectorAll('.dimension-line');

    const geometricRefs = svg.querySelectorAll('.geometric-ref');

    // Calculate stroke lengths
    const allStrokes = [
      ...Array.from(mainPaths),
      ...Array.from(detailPaths),
      ...Array.from(constructionLines),
      ...Array.from(dimensionLines),
      ...Array.from(geometricRefs),
    ];

    allStrokes.forEach(path => {
      const p = path as SVGPathElement | SVGLineElement | SVGCircleElement | SVGEllipseElement;
      if ('getTotalLength' in p) {
        const length = (p as SVGPathElement).getTotalLength();
        gsap.set(p, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      }
    });

    guides.forEach(line => {
      const l = line as SVGLineElement | SVGCircleElement | SVGPathElement;
      if ('getTotalLength' in l) {
        const length = (l as SVGPathElement).getTotalLength();
        gsap.set(l, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      }
    });

    // Initialize all elements
    gsap.set(annotations, { opacity: 0 });

    // Create master timeline (7 second loop - FAST!)
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'power2.inOut' },
    });

    // ===== PHASE 1: RAPID CONSTRUCTION (0-1.5s) =====
    tl.addLabel('construction', 0);

    // Flash in guide lines rapidly
    tl.to(
      guides,
      {
        strokeDashoffset: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: 'power2.out',
      },
      'construction'
    );

    // Geometric references appear
    tl.to(
      geometricRefs,
      {
        strokeDashoffset: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power1.out',
      },
      'construction+=0.2'
    );

    // Construction lines
    tl.to(
      constructionLines,
      {
        strokeDashoffset: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power1.out',
      },
      'construction+=0.3'
    );

    // Dimension lines
    tl.to(
      dimensionLines,
      {
        strokeDashoffset: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power1.out',
      },
      'construction+=0.4'
    );

    // Rapid typewriter annotations
    tl.to(
      annotations,
      {
        opacity: 1,
        duration: 0.15,
        stagger: 0.04,
        ease: 'steps(1)',
      },
      'construction+=0.3'
    );

    // ===== PHASE 2: INKING (1.5-3.5s) =====
    tl.addLabel('inking', 1.5);

    // Main paths draw fast
    tl.to(
      mainPaths,
      {
        strokeDashoffset: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power2.inOut',
      },
      'inking'
    );

    // Detail paths follow quickly
    tl.to(
      detailPaths,
      {
        strokeDashoffset: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power2.inOut',
      },
      'inking+=0.5'
    );

    // ===== PHASE 5: DECONSTRUCTION (6-7s) =====
    tl.addLabel('deconstruction', 6);

    // Rapid reverse draw
    tl.to(
      [...Array.from(detailPaths), ...Array.from(mainPaths)],
      {
        strokeDashoffset: (_, target) => {
          const t = target as SVGPathElement;
          if ('getTotalLength' in t) return t.getTotalLength();
          return 100;
        },
        duration: 0.4,
        stagger: 0.02,
        ease: 'power2.in',
      },
      'deconstruction+=0.1'
    );

    tl.to(
      annotations,
      {
        opacity: 0,
        duration: 0.1,
        stagger: 0.02,
      },
      'deconstruction+=0.2'
    );

    tl.to(
      [
        ...Array.from(guides),
        ...Array.from(geometricRefs),
        ...Array.from(constructionLines),
        ...Array.from(dimensionLines),
      ],
      {
        strokeDashoffset: (_, target) => {
          const t = target as SVGPathElement | SVGLineElement;
          if ('getTotalLength' in t) return (t as SVGPathElement).getTotalLength();
          return 100;
        },
        duration: 0.3,
        stagger: 0.01,
        ease: 'power2.in',
      },
      'deconstruction+=0.3'
    );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', maxWidth: '100%', overflow: 'hidden' }}
      aria-hidden="true"
    >
      {/* ===== FILTERS & DEFINITIONS ===== */}
      <defs>
        {/* CLIPPING PATH - Contains all color washes inside the tube shape */}
        <clipPath id="tubeClipPath">
          {/* Main glass bulb outline */}
          <path
            d="M180 350 
                           C175 320 165 260 165 200 
                           C165 130 190 90 230 75
                           L250 70
                           L270 75
                           C310 90 335 130 335 200
                           C335 260 325 320 320 350
                           C320 365 315 380 290 385
                           L290 400
                           C290 408 275 415 250 415
                           C225 415 210 408 210 400
                           L210 385
                           C185 380 180 365 180 350
                           Z"
          />
          {/* Base extension */}
          <path
            d="M210 415
                           L210 470
                           C210 485 230 495 250 495
                           C270 495 290 485 290 470
                           L290 415
                           Z"
          />
        </clipPath>

        {/* ===== DA VINCI PATENT ILLUSTRATION PATTERNS ===== */}

        {/* Cross-hatching pattern for engraved metal look */}
        <pattern id="crossHatch" patternUnits="userSpaceOnUse" width="6" height="6">
          <path d="M0 6 L6 0" stroke={INK_SECONDARY} strokeWidth="0.4" opacity="0.3" />
          <path d="M0 0 L6 6" stroke={INK_SECONDARY} strokeWidth="0.3" opacity="0.2" />
        </pattern>

        {/* Fine diagonal hatching for shading */}
        <pattern id="fineHatch" patternUnits="userSpaceOnUse" width="4" height="4">
          <path d="M0 4 L4 0" stroke={INK_COLOR} strokeWidth="0.3" opacity="0.25" />
        </pattern>

        {/* Paper/parchment grain texture */}
        <filter id="paperTexture" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="5"
            result="noise"
            seed="15"
          />
          <feColorMatrix type="saturate" values="0" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" result="textured" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.97" />
          </feComponentTransfer>
        </filter>

        {/* Pencil texture - crisp engraved look */}
        <filter id="pencilTexture" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            result="noise"
            seed="5"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Amber bloom effect - light bleeding into paper */}
        <filter id="amberBloom" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="15" result="bloom1" />
          <feGaussianBlur stdDeviation="8" result="bloom2" />
          <feGaussianBlur stdDeviation="3" result="bloom3" />
          <feColorMatrix
            in="bloom1"
            type="matrix"
            values="1 0.2 0 0 0.15
                                0.1 0.8 0 0 0.1
                                0 0 0.5 0 0
                                0 0 0 0.6 0"
            result="warmBloom"
          />
          <feMerge>
            <feMergeNode in="warmBloom" />
            <feMergeNode in="bloom2" />
            <feMergeNode in="bloom3" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subsurface scattering for liquid glow */}
        <filter id="subsurfaceGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="glow" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                                0.6 1 0.8 0 0.15
                                0.8 1 1 0 0.2
                                0 0 0 1 0"
            result="tealGlow"
          />
          <feMerge>
            <feMergeNode in="tealGlow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft warm glow - not harsh */}
        <filter id="warmGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur1" />
          <feGaussianBlur stdDeviation="4" result="blur2" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0.1
                                0 0.9 0 0 0.05
                                0 0 0.7 0 0
                                0 0 0 0.85 0"
            result="warmBlur"
          />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="warmBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Oil painting brushstroke effect */}
        <filter id="oilPaintEffect" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="4"
            result="noise"
            seed="42"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          {/* Add painterly texture without excessive blur */}
          <feGaussianBlur stdDeviation="1" />
        </filter>

        {/* Glass reflection effect */}
        <filter id="glassReflection" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="2"
            specularConstant="1.2"
            specularExponent="20"
            lightingColor="#FFFFFF"
            result="spec"
          >
            <fePointLight x="200" y="100" z="150" />
          </feSpecularLighting>
          <feComposite
            in="SourceGraphic"
            in2="spec"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="0.3"
            k4="0"
          />
        </filter>

        {/* Metal sheen effect */}
        <filter id="metalSheen" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feSpecularLighting
            in="blur"
            surfaceScale="3"
            specularConstant="0.8"
            specularExponent="35"
            lightingColor="#FFE4B5"
            result="spec"
          >
            <fePointLight x="180" y="150" z="200" />
          </feSpecularLighting>
          <feComposite
            in="SourceGraphic"
            in2="spec"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="0.4"
            k4="0"
          />
        </filter>

        {/* ===== DA VINCI OIL PAINTING GRADIENTS ===== */}

        {/* Saturated cyan/teal liquid - oil paint pooling effect */}
        <radialGradient id="washGradientPrimary" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="rgba(0, 131, 143, 0.9)" />
          <stop offset="25%" stopColor="rgba(0, 105, 100, 0.75)" />
          <stop offset="50%" stopColor="rgba(0, 77, 77, 0.55)" />
          <stop offset="100%" stopColor="rgba(0, 50, 60, 0.25)" />
        </radialGradient>

        {/* Rich amber/gold filament glow - oil paint warmth with subsurface */}
        <radialGradient id="washGradientWarm" cx="50%" cy="30%" r="45%">
          <stop offset="0%" stopColor="rgba(255, 171, 0, 0.95)" />
          <stop offset="20%" stopColor="rgba(255, 143, 0, 0.8)" />
          <stop offset="45%" stopColor="rgba(255, 111, 0, 0.55)" />
          <stop offset="100%" stopColor="rgba(200, 80, 0, 0.15)" />
        </radialGradient>

        {/* Deep copper/brass metallic for base - painterly */}
        <radialGradient id="washGradientCopper" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="rgba(184, 101, 26, 0.9)" />
          <stop offset="35%" stopColor="rgba(160, 80, 20, 0.7)" />
          <stop offset="100%" stopColor="rgba(110, 55, 15, 0.35)" />
        </radialGradient>

        {/* Amber bloom gradient - soft bleeding glow */}
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={AMBER_BLOOM} />
          <stop offset="20%" stopColor={AMBER_CORE} />
          <stop offset="45%" stopColor={AMBER_HOT} />
          <stop offset="70%" stopColor="#FF6D00" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E65100" stopOpacity="0" />
        </radialGradient>

        {/* Outer bloom bleed - extends beyond core */}
        <radialGradient id="bloomBleed" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="rgba(255, 213, 79, 0.5)" />
          <stop offset="40%" stopColor="rgba(255, 143, 0, 0.25)" />
          <stop offset="70%" stopColor="rgba(255, 111, 0, 0.1)" />
          <stop offset="100%" stopColor="rgba(230, 81, 0, 0)" />
        </radialGradient>

        {/* Glass tube curved reflection - streaky like real glass */}
        <linearGradient id="tubeShine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="15%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="25%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="35%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>

        {/* Glass edge shadow for depth */}
        <linearGradient id="glassShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(10,30,60,0.5)" />
          <stop offset="20%" stopColor="rgba(10,30,60,0.1)" />
          <stop offset="80%" stopColor="rgba(10,30,60,0.1)" />
          <stop offset="100%" stopColor="rgba(10,30,60,0.5)" />
        </linearGradient>

        {/* Metallic brass gradient for base */}
        <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(160,110,40,0.9)" />
          <stop offset="20%" stopColor="rgba(200,160,60,0.95)" />
          <stop offset="50%" stopColor="rgba(235,200,100,1)" />
          <stop offset="80%" stopColor="rgba(200,160,60,0.95)" />
          <stop offset="100%" stopColor="rgba(160,110,40,0.9)" />
        </linearGradient>

        {/* Bubble gradient - teal tinted glossy */}
        <radialGradient id="bubbleGloss" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="25%" stopColor="rgba(178,235,242,0.8)" />
          <stop offset="100%" stopColor="rgba(0,151,167,0.5)" />
        </radialGradient>
      </defs>

      {/* Transform group - no tilt for clean presentation */}
      <g>
        {/* ===== GEOMETRIC PLANNING GRID ===== */}
        <g className="guides" opacity="0.6">
          {/* Primary axis lines */}
          <line
            className="guide-line"
            x1="250"
            y1="30"
            x2="250"
            y2="550"
            stroke={GUIDE_COLOR}
            strokeWidth="0.8"
            strokeDasharray="8 4"
          />
          <line
            className="guide-line"
            x1="80"
            y1="160"
            x2="420"
            y2="160"
            stroke={GUIDE_COLOR}
            strokeWidth="0.6"
            strokeDasharray="6 3"
          />
          <line
            className="guide-line"
            x1="80"
            y1="360"
            x2="420"
            y2="360"
            stroke={GUIDE_COLOR}
            strokeWidth="0.6"
            strokeDasharray="6 3"
          />

          {/* Golden ratio construction circles */}
          <circle
            className="guide-line"
            cx="250"
            cy="160"
            r="80"
            stroke={GUIDE_COLOR}
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="3 3"
          />
          <circle
            className="guide-line"
            cx="250"
            cy="160"
            r="50"
            stroke={GUIDE_COLOR}
            strokeWidth="0.4"
            fill="none"
            strokeDasharray="2 2"
          />
          <circle
            className="guide-line"
            cx="250"
            cy="160"
            r="30"
            stroke={GUIDE_COLOR}
            strokeWidth="0.4"
            fill="none"
            strokeDasharray="2 2"
          />

          {/* Base construction */}
          <circle
            className="guide-line"
            cx="250"
            cy="420"
            r="40"
            stroke={GUIDE_COLOR}
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="3 3"
          />
        </g>

        {/* ===== GHOST LAYERS - Faint "erased" previous iterations ===== */}
        <g className="ghost-layers" opacity="0.12" filter="url(#paperTexture)">
          {/* Ghost tube outline - slightly offset, suggesting erased sketch */}
          <path
            className="guide-line"
            d="M177 352 C172 322 162 262 162 202 C162 132 187 92 227 77 L250 72"
            stroke={GHOST_INK}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="12 6"
          />
          <path
            className="guide-line"
            d="M250 72 L273 77 C313 92 338 132 338 202 C338 262 328 322 323 352"
            stroke={GHOST_INK}
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="12 6"
          />

          {/* Ghost base - alternative design attempt */}
          <ellipse
            className="guide-line"
            cx="252"
            cy="450"
            rx="45"
            ry="25"
            stroke={GHOST_INK}
            strokeWidth="1"
            fill="none"
            strokeDasharray="8 4"
          />

          {/* Ghost construction arcs */}
          <circle
            className="guide-line"
            cx="248"
            cy="162"
            r="95"
            stroke={GHOST_INK}
            strokeWidth="0.6"
            fill="none"
            strokeDasharray="4 4"
          />
          <circle
            className="guide-line"
            cx="252"
            cy="158"
            r="62"
            stroke={GHOST_INK}
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="3 3"
          />

          {/* Ghost filament design iteration */}
          <path
            className="guide-line"
            d="M222 172 C222 162 227 157 232 162 C237 167 242 157 247 152 C252 147 257 157 262 162 C267 167 272 157 277 160"
            stroke={GHOST_INK}
            strokeWidth="0.8"
            fill="none"
          />

          {/* Erased dimension attempt */}
          <line
            className="guide-line"
            x1="135"
            y1="90"
            x2="135"
            y2="340"
            stroke={GHOST_INK}
            strokeWidth="0.5"
            strokeDasharray="10 5"
          />
        </g>

        {/* ===== GEOMETRIC REFERENCE MARKS ===== */}
        <g className="geometric-refs" stroke={ACCENT_COLOR} strokeWidth="1">
          {/* Angle markers */}
          <path className="geometric-ref" d="M250 160 L280 130 L280 160" fill="none" />
          <path className="geometric-ref" d="M250 160 L220 130 L220 160" fill="none" />

          {/* Center crosshairs - detailed */}
          <line className="geometric-ref" x1="240" y1="160" x2="260" y2="160" />
          <line className="geometric-ref" x1="250" y1="150" x2="250" y2="170" />
          <circle className="geometric-ref" cx="250" cy="160" r="5" fill="none" />

          {/* Tangent points */}
          <path className="geometric-ref" d="M170 200 L175 195 L175 205 Z" fill={ACCENT_COLOR} />
          <path className="geometric-ref" d="M330 200 L325 195 L325 205 Z" fill={ACCENT_COLOR} />

          {/* Base alignment */}
          <line className="geometric-ref" x1="200" y1="450" x2="300" y2="450" />
          <line className="geometric-ref" x1="210" y1="445" x2="210" y2="455" />
          <line className="geometric-ref" x1="290" y1="445" x2="290" y2="455" />
        </g>

        {/* ===== CONSTRUCTION LINES ===== */}
        <g className="construction-lines" stroke={GUIDE_COLOR} strokeWidth="0.5" opacity="0.7">
          <line className="construction-line" x1="180" y1="100" x2="180" y2="380" />
          <line className="construction-line" x1="320" y1="100" x2="320" y2="380" />
          <line className="construction-line" x1="200" y1="380" x2="200" y2="490" />
          <line className="construction-line" x1="300" y1="380" x2="300" y2="490" />

          {/* Curve construction */}
          <path
            className="construction-line"
            d="M180 120 Q250 60 320 120"
            fill="none"
            strokeDasharray="4 2"
          />
          <path
            className="construction-line"
            d="M185 340 Q250 380 315 340"
            fill="none"
            strokeDasharray="4 2"
          />
        </g>

        {/* ===== DIMENSION LINES ===== */}
        <g className="dimension-lines" stroke={INK_COLOR} strokeWidth="0.8">
          {/* Vertical dimension */}
          <line className="dimension-line" x1="140" y1="80" x2="140" y2="350" />
          <line className="dimension-line" x1="135" y1="80" x2="145" y2="80" />
          <line className="dimension-line" x1="135" y1="350" x2="145" y2="350" />

          {/* Horizontal dimensions */}
          <line className="dimension-line" x1="180" y1="50" x2="320" y2="50" />
          <line className="dimension-line" x1="180" y1="45" x2="180" y2="55" />
          <line className="dimension-line" x1="320" y1="45" x2="320" y2="55" />

          {/* Base width */}
          <line className="dimension-line" x1="200" y1="510" x2="300" y2="510" />
          <line className="dimension-line" x1="200" y1="505" x2="200" y2="515" />
          <line className="dimension-line" x1="300" y1="505" x2="300" y2="515" />

          {/* Radius indicator */}
          <line className="dimension-line" x1="250" y1="160" x2="330" y2="160" />
          <path className="dimension-line" d="M325 157 L330 160 L325 163" fill="none" />
        </g>

        {/* ===== ANNOTATIONS - LEGIBLE ===== */}
        <g
          className="annotations"
          style={{ fontFamily: "'IBM Plex Mono', 'Courier New', monospace" }}
        >
          {/* Main labels - larger, bolder */}
          <text
            className="annotation"
            x="50"
            y="55"
            fill={TEXT_COLOR}
            fontSize="14"
            fontWeight="600"
          >
            VACUUM TUBE SCHEMATIC
          </text>
          <text
            className="annotation"
            x="380"
            y="55"
            fill={ACCENT_COLOR}
            fontSize="12"
            fontWeight="600"
          >
            REV.04
          </text>

          {/* Dimensions */}
          <text
            className="annotation"
            x="120"
            y="220"
            fill={TEXT_COLOR}
            fontSize="11"
            fontWeight="500"
          >
            H: 270mm
          </text>
          <text className="annotation" x="230" y="40" fill={TEXT_COLOR} fontSize="10">
            ∅ 140mm
          </text>
          <text className="annotation" x="220" y="525" fill={TEXT_COLOR} fontSize="10">
            100mm
          </text>

          {/* Technical callouts */}
          <text className="annotation" x="340" y="155" fill={GUIDE_COLOR} fontSize="10">
            r = 80
          </text>
          <text className="annotation" x="340" y="170" fill={GUIDE_COLOR} fontSize="9">
            (primary envelope)
          </text>

          <text
            className="annotation"
            x="60"
            y="400"
            fill={TEXT_COLOR}
            fontSize="11"
            fontWeight="500"
          >
            BASE ASSY.
          </text>
          <text className="annotation" x="60" y="415" fill={GUIDE_COLOR} fontSize="9">
            E27 SOCKET
          </text>

          {/* Figure reference */}
          <text
            className="annotation"
            x="50"
            y="95"
            fill={INK_COLOR}
            fontSize="12"
            fontWeight="700"
          >
            FIG. 1A
          </text>

          {/* Grid coordinates */}
          <text className="annotation" x="420" y="165" fill={GUIDE_COLOR} fontSize="9">
            y: 160
          </text>
          <text className="annotation" x="420" y="365" fill={GUIDE_COLOR} fontSize="9">
            y: 360
          </text>
          <text className="annotation" x="175" y="545" fill={GUIDE_COLOR} fontSize="9">
            x: 180
          </text>
          <text className="annotation" x="310" y="545" fill={GUIDE_COLOR} fontSize="9">
            x: 320
          </text>

          {/* Component labels */}
          <text
            className="annotation"
            x="265"
            y="115"
            fill={ACCENT_COLOR}
            fontSize="9"
            fontWeight="600"
          >
            EXHAUST TIP
          </text>
          <text className="annotation" x="290" y="190" fill={TEXT_COLOR} fontSize="9">
            ENVELOPE
          </text>
          <text className="annotation" x="290" y="245" fill={TEXT_COLOR} fontSize="9">
            FILAMENT
          </text>
          <text className="annotation" x="290" y="290" fill={TEXT_COLOR} fontSize="9">
            SUPPORT STEM
          </text>

          {/* Material note */}
          <text className="annotation" x="60" y="540" fill={GUIDE_COLOR} fontSize="8">
            MATERIAL: BOROSILICATE GLASS
          </text>
          <text
            className="annotation"
            x="340"
            y="540"
            fill={ACCENT_COLOR}
            fontSize="9"
            fontWeight="600"
          >
            SCALE 1:2
          </text>

          {/* Handwritten style notes - steampunk feel */}
          <text
            className="annotation"
            x="365"
            y="250"
            fill={ACCENT_WARM}
            fontSize="8"
            fontStyle="italic"
          >
            ← heating element
          </text>
          <text
            className="annotation"
            x="365"
            y="320"
            fill={ACCENT_WARM}
            fontSize="8"
            fontStyle="italic"
          >
            ← liquid reservoir
          </text>
          <text
            className="annotation"
            x="60"
            y="280"
            fill={ACCENT_WARM}
            fontSize="7"
            fontStyle="italic"
          >
            check pressure →
          </text>

          {/* Engineering notes */}
          <text className="annotation" x="380" y="420" fill={INK_SECONDARY} fontSize="7">
            OPERATING TEMP:
          </text>
          <text
            className="annotation"
            x="380"
            y="432"
            fill={ACCENT_COLOR}
            fontSize="8"
            fontWeight="600"
          >
            2200°C
          </text>
          <text className="annotation" x="380" y="455" fill={INK_SECONDARY} fontSize="7">
            VACUUM: 10⁻⁶ torr
          </text>

          {/* Date stamp */}
          <text className="annotation" x="50" y="565" fill={INK_SECONDARY} fontSize="8">
            DRN: 12.11.24
          </text>
          <text className="annotation" x="130" y="565" fill={INK_SECONDARY} fontSize="8">
            CHK: J.W.
          </text>
        </g>

        {/* ===== ILLEGIBLE ASEMETIC SCRIPT - Texture annotations ===== */}
        <g
          className="annotations"
          opacity="0.35"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          {/* Dense illegible notes - left margin */}
          <text
            className="annotation"
            x="35"
            y="195"
            fill={INK_SECONDARY}
            fontSize="5"
            fontStyle="italic"
            transform="rotate(-2, 35, 195)"
          >
            ∫∫ dV/dt = κ∇²T + Σᵢ
          </text>
          <text
            className="annotation"
            x="32"
            y="205"
            fill={INK_SECONDARY}
            fontSize="4.5"
            fontStyle="italic"
          >
            εₒμₒc² ≈ thermæ flux
          </text>
          <text
            className="annotation"
            x="38"
            y="215"
            fill={INK_SECONDARY}
            fontSize="4"
            fontStyle="italic"
            transform="rotate(1, 38, 215)"
          >
            cf. appendix § 4.2
          </text>
          <text
            className="annotation"
            x="30"
            y="235"
            fill={INK_SECONDARY}
            fontSize="5"
            fontStyle="italic"
          >
            λmax = b/T (Wien)
          </text>
          <text
            className="annotation"
            x="35"
            y="248"
            fill={INK_SECONDARY}
            fontSize="4"
            fontStyle="italic"
            transform="rotate(-1, 35, 248)"
          >
            N.B. verify seal
          </text>

          {/* Right margin dense notes */}
          <text
            className="annotation"
            x="400"
            y="275"
            fill={INK_SECONDARY}
            fontSize="4.5"
            fontStyle="italic"
          >
            ηthermal ≈ 0.92
          </text>
          <text
            className="annotation"
            x="395"
            y="285"
            fill={INK_SECONDARY}
            fontSize="4"
            fontStyle="italic"
            transform="rotate(2, 395, 285)"
          >
            ∂P/∂t + ∇·S = 0
          </text>
          <text
            className="annotation"
            x="402"
            y="298"
            fill={INK_SECONDARY}
            fontSize="4.5"
            fontStyle="italic"
          >
            σT⁴ radiative
          </text>
          <text
            className="annotation"
            x="398"
            y="368"
            fill={INK_SECONDARY}
            fontSize="4"
            fontStyle="italic"
          >
            (see reverse)
          </text>
          <text
            className="annotation"
            x="400"
            y="380"
            fill={INK_SECONDARY}
            fontSize="5"
            fontStyle="italic"
            transform="rotate(-1, 400, 380)"
          >
            Ω = 4πsr solid
          </text>

          {/* Bottom margin formulas */}
          <text
            className="annotation"
            x="260"
            y="555"
            fill={INK_SECONDARY}
            fontSize="4"
            fontStyle="italic"
          >
            q = σεAT⁴ radiation
          </text>
          <text
            className="annotation"
            x="180"
            y="555"
            fill={INK_SECONDARY}
            fontSize="4.5"
            fontStyle="italic"
          >
            I = V/R (Ohm)
          </text>
        </g>

        {/* ===== LEADER LINES - Connecting annotations to parts ===== */}
        <g className="annotations" stroke={INK_SECONDARY} strokeWidth="0.5" fill="none">
          {/* Leader to exhaust tip */}
          <path className="annotation" d="M263 115 L258 100 L250 68" strokeDasharray="2 1" />
          <circle className="annotation" cx="250" cy="68" r="2" fill={INK_SECONDARY} />

          {/* Leader to envelope */}
          <path className="annotation" d="M288 190 L275 190 L270 190" strokeDasharray="2 1" />
          <circle className="annotation" cx="270" cy="190" r="1.5" fill={INK_SECONDARY} />

          {/* Leader to filament */}
          <path className="annotation" d="M288 245 L275 248 L260 165" strokeDasharray="2 1" />
          <circle className="annotation" cx="260" cy="165" r="1.5" fill={INK_SECONDARY} />

          {/* Leader to support stem */}
          <path className="annotation" d="M288 290 L270 290 L255 290" strokeDasharray="2 1" />
          <circle className="annotation" cx="255" cy="290" r="1.5" fill={INK_SECONDARY} />

          {/* Leader to base */}
          <path className="annotation" d="M100 407 L180 407 L205 420" strokeDasharray="2 1" />
          <circle className="annotation" cx="205" cy="420" r="1.5" fill={INK_SECONDARY} />

          {/* Cross-reference arrows */}
          <path className="annotation" d="M355 250 L345 250" markerEnd="url(#arrowhead)" />
          <path className="annotation" d="M355 320 L340 320" markerEnd="url(#arrowhead)" />
        </g>

        {/* ===== MATHEMATICAL DIAGRAMS ===== */}
        <g className="annotations" opacity="0.7">
          {/* Small graph sketch - top right corner */}
          <g transform="translate(420, 140)">
            <line
              className="geometric-ref"
              x1="0"
              y1="25"
              x2="35"
              y2="25"
              stroke={INK_SECONDARY}
              strokeWidth="0.6"
            />
            <line
              className="geometric-ref"
              x1="0"
              y1="0"
              x2="0"
              y2="25"
              stroke={INK_SECONDARY}
              strokeWidth="0.6"
            />
            <path
              className="geometric-ref"
              d="M0 20 Q10 5 20 15 T35 8"
              stroke={ACCENT_COLOR}
              strokeWidth="0.8"
              fill="none"
            />
            <text
              className="annotation"
              x="15"
              y="32"
              fill={GUIDE_COLOR}
              fontSize="5"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              I-V
            </text>
          </g>

          {/* Small sine wave reference */}
          <g transform="translate(50, 485)">
            <line
              className="geometric-ref"
              x1="0"
              y1="8"
              x2="40"
              y2="8"
              stroke={INK_SECONDARY}
              strokeWidth="0.4"
              strokeDasharray="2 2"
            />
            <path
              className="geometric-ref"
              d="M0 8 Q5 2 10 8 T20 8 T30 8 T40 8"
              stroke={ACCENT_COLOR}
              strokeWidth="0.7"
              fill="none"
            />
            <text className="annotation" x="0" y="20" fill={GUIDE_COLOR} fontSize="5">
              60Hz AC
            </text>
          </g>
        </g>

        {/* ===== MINI COMPONENT SKETCHES ===== */}
        <g className="annotations" opacity="0.9">
          {/* Mini capacitor sketch - top right */}
          <g transform="translate(400, 80)">
            <line
              className="geometric-ref"
              x1="0"
              y1="0"
              x2="0"
              y2="20"
              stroke={INK_SECONDARY}
              strokeWidth="1"
            />
            <line
              className="geometric-ref"
              x1="-8"
              y1="20"
              x2="8"
              y2="20"
              stroke={INK_SECONDARY}
              strokeWidth="1.5"
            />
            <line
              className="geometric-ref"
              x1="-8"
              y1="26"
              x2="8"
              y2="26"
              stroke={INK_SECONDARY}
              strokeWidth="1.5"
            />
            <line
              className="geometric-ref"
              x1="0"
              y1="26"
              x2="0"
              y2="46"
              stroke={INK_SECONDARY}
              strokeWidth="1"
            />
            <text
              className="annotation"
              x="-15"
              y="60"
              fill={GUIDE_COLOR}
              fontSize="7"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              C1
            </text>
          </g>

          {/* Mini resistor sketch - bottom right */}
          <g transform="translate(420, 485)">
            <line
              className="geometric-ref"
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke={INK_SECONDARY}
              strokeWidth="1"
            />
            <path
              className="geometric-ref"
              d="M0 8 L5 10 L-5 14 L5 18 L-5 22 L5 26 L-5 30 L0 32"
              stroke={INK_SECONDARY}
              strokeWidth="1"
              fill="none"
            />
            <line
              className="geometric-ref"
              x1="0"
              y1="32"
              x2="0"
              y2="40"
              stroke={INK_SECONDARY}
              strokeWidth="1"
            />
            <text
              className="annotation"
              x="-20"
              y="50"
              fill={GUIDE_COLOR}
              fontSize="7"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              R1 47Ω
            </text>
          </g>

          {/* Mini coil/inductor sketch - left side */}
          <g transform="translate(45, 130)">
            <line
              className="geometric-ref"
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke={INK_SECONDARY}
              strokeWidth="1"
            />
            <path
              className="geometric-ref"
              d="M0 8 C8 8 8 14 0 14 C-8 14 -8 20 0 20 C8 20 8 26 0 26 C-8 26 -8 32 0 32"
              stroke={INK_SECONDARY}
              strokeWidth="1"
              fill="none"
            />
            <line
              className="geometric-ref"
              x1="0"
              y1="32"
              x2="0"
              y2="40"
              stroke={INK_SECONDARY}
              strokeWidth="1"
            />
            <text
              className="annotation"
              x="-10"
              y="52"
              fill={GUIDE_COLOR}
              fontSize="7"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              L1
            </text>
          </g>

          {/* Mini diode sketch */}
          <g transform="translate(60, 320)">
            <line
              className="geometric-ref"
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke={INK_SECONDARY}
              strokeWidth="1"
            />
            <path
              className="geometric-ref"
              d="M-6 8 L6 8 L0 18 Z"
              stroke={INK_SECONDARY}
              strokeWidth="1"
              fill="none"
            />
            <line
              className="geometric-ref"
              x1="-6"
              y1="18"
              x2="6"
              y2="18"
              stroke={INK_SECONDARY}
              strokeWidth="1.5"
            />
            <line
              className="geometric-ref"
              x1="0"
              y1="18"
              x2="0"
              y2="26"
              stroke={INK_SECONDARY}
              strokeWidth="1"
            />
            <text
              className="annotation"
              x="-10"
              y="36"
              fill={GUIDE_COLOR}
              fontSize="7"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              D1
            </text>
          </g>

          {/* Formula/equation annotation */}
          <text
            className="annotation"
            x="360"
            y="100"
            fill={TEXT_COLOR}
            fontSize="8"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            P = V²/R
          </text>

          {/* Wavelength notation */}
          <path
            className="geometric-ref"
            d="M385 200 Q390 195 395 200 Q400 205 405 200 Q410 195 415 200"
            stroke={ACCENT_COLOR}
            strokeWidth="1"
            fill="none"
          />
          <text
            className="annotation"
            x="385"
            y="215"
            fill={GUIDE_COLOR}
            fontSize="7"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            λ = 580nm
          </text>

          {/* Cross-section callout */}
          <g transform="translate(50, 460)">
            <circle
              className="geometric-ref"
              cx="0"
              cy="0"
              r="12"
              stroke={INK_SECONDARY}
              strokeWidth="1"
              fill="none"
            />
            <line
              className="geometric-ref"
              x1="-8"
              y1="0"
              x2="8"
              y2="0"
              stroke={INK_SECONDARY}
              strokeWidth="0.8"
            />
            <line
              className="geometric-ref"
              x1="0"
              y1="-8"
              x2="0"
              y2="8"
              stroke={INK_SECONDARY}
              strokeWidth="0.8"
            />
            <text
              className="annotation"
              x="-12"
              y="25"
              fill={GUIDE_COLOR}
              fontSize="7"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              SEC A-A
            </text>
          </g>
        </g>

        {/* Metallic base sheen */}

        {/* ===== MAIN VACUUM TUBE PATHS ===== */}
        <g filter="url(#pencilTexture)">
          {/* Glass bulb - left side */}
          <path
            className="main-path"
            d="M180 350 
                           C175 320 165 260 165 200 
                           C165 130 190 90 230 75
                           L250 70"
            stroke={INK_COLOR}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Glass bulb - right side */}
          <path
            className="main-path"
            d="M250 70
                           L270 75
                           C310 90 335 130 335 200
                           C335 260 325 320 320 350"
            stroke={INK_COLOR}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Top exhaust pip */}
          <ellipse
            className="main-path"
            cx="250"
            cy="68"
            rx="12"
            ry="15"
            stroke={INK_COLOR}
            strokeWidth="2"
            fill="none"
          />
          <circle
            className="main-path"
            cx="250"
            cy="55"
            r="6"
            stroke={INK_COLOR}
            strokeWidth="1.5"
            fill="none"
          />

          {/* Neck transition left */}
          <path
            className="main-path"
            d="M180 350
                           C180 365 185 380 210 385"
            stroke={INK_COLOR}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Neck transition right */}
          <path
            className="main-path"
            d="M320 350
                           C320 365 315 380 290 385"
            stroke={INK_COLOR}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Base collar */}
          <path
            className="main-path"
            d="M210 385
                           L210 400
                           C210 408 225 415 250 415
                           C275 415 290 408 290 400
                           L290 385"
            stroke={INK_COLOR}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Base body */}
          <path
            className="main-path"
            d="M215 415
                           L215 470
                           C215 485 230 495 250 495
                           C270 495 285 485 285 470
                           L285 415"
            stroke={INK_COLOR}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Base threading */}
          <path
            className="main-path"
            d="M215 430 C230 435 270 435 285 430"
            stroke={INK_COLOR}
            strokeWidth="1.8"
            fill="none"
          />
          <path
            className="main-path"
            d="M215 445 C230 450 270 450 285 445"
            stroke={INK_COLOR}
            strokeWidth="1.8"
            fill="none"
          />
          <path
            className="main-path"
            d="M218 460 C233 465 267 465 282 460"
            stroke={INK_COLOR}
            strokeWidth="1.8"
            fill="none"
          />
          <path
            className="main-path"
            d="M222 475 C237 478 263 478 278 475"
            stroke={INK_COLOR}
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* ===== DETAIL PATHS ===== */}
        <g filter="url(#pencilTexture)">
          {/* Central support stem */}
          <path
            className="detail-path"
            d="M250 385 L250 300"
            stroke={INK_COLOR}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Stem flare */}
          <path
            className="detail-path"
            d="M235 300 L250 270 L265 300"
            stroke={INK_COLOR}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner glass envelope */}
          <ellipse
            className="detail-path"
            cx="250"
            cy="200"
            rx="45"
            ry="85"
            stroke={INK_COLOR}
            strokeWidth="1.5"
            fill="none"
          />

          {/* Secondary envelope */}
          <ellipse
            className="detail-path"
            cx="250"
            cy="195"
            rx="30"
            ry="55"
            stroke={INK_COLOR}
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />

          {/* Filament posts */}
          <path
            className="detail-path"
            d="M225 270 L225 170"
            stroke={INK_COLOR}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            className="detail-path"
            d="M275 270 L275 170"
            stroke={INK_COLOR}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Filament coil - detailed */}
          <path
            className="detail-path"
            d="M225 170 
                           C225 160 230 155 235 160
                           C240 165 240 155 245 150
                           C250 145 250 155 255 160
                           C260 165 265 155 270 158
                           C275 162 275 170 275 170"
            stroke={INK_COLOR}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Grid plates - left */}
          <line
            className="detail-path"
            x1="200"
            y1="200"
            x2="215"
            y2="200"
            stroke={INK_COLOR}
            strokeWidth="1.5"
          />
          <line
            className="detail-path"
            x1="200"
            y1="215"
            x2="215"
            y2="215"
            stroke={INK_COLOR}
            strokeWidth="1.5"
          />
          <line
            className="detail-path"
            x1="200"
            y1="230"
            x2="215"
            y2="230"
            stroke={INK_COLOR}
            strokeWidth="1.5"
          />
          <line
            className="detail-path"
            x1="200"
            y1="245"
            x2="215"
            y2="245"
            stroke={INK_COLOR}
            strokeWidth="1.5"
          />

          {/* Grid plates - right */}
          <line
            className="detail-path"
            x1="285"
            y1="200"
            x2="300"
            y2="200"
            stroke={INK_COLOR}
            strokeWidth="1.5"
          />
          <line
            className="detail-path"
            x1="285"
            y1="215"
            x2="300"
            y2="215"
            stroke={INK_COLOR}
            strokeWidth="1.5"
          />
          <line
            className="detail-path"
            x1="285"
            y1="230"
            x2="300"
            y2="230"
            stroke={INK_COLOR}
            strokeWidth="1.5"
          />
          <line
            className="detail-path"
            x1="285"
            y1="245"
            x2="300"
            y2="245"
            stroke={INK_COLOR}
            strokeWidth="1.5"
          />

          {/* Cross supports */}
          <line
            className="detail-path"
            x1="225"
            y1="260"
            x2="275"
            y2="260"
            stroke={INK_COLOR}
            strokeWidth="1"
          />
          <line
            className="detail-path"
            x1="230"
            y1="180"
            x2="270"
            y2="180"
            stroke={INK_COLOR}
            strokeWidth="1"
          />

          {/* Getter flash mount */}
          <circle
            className="detail-path"
            cx="280"
            cy="130"
            r="8"
            stroke={INK_COLOR}
            strokeWidth="1"
            fill="none"
          />
          <line
            className="detail-path"
            x1="280"
            y1="138"
            x2="280"
            y2="155"
            stroke={INK_COLOR}
            strokeWidth="1"
          />
        </g>
      </g>
    </svg>
  );
}
