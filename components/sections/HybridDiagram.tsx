const nodeStyle = "fill-white/5 stroke-white/15";
const textStyle = "fill-white text-[13px] font-medium";
const subTextStyle = "fill-white/50 text-[10px]";

export default function HybridDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 920 420"
        className="mx-auto h-auto w-full min-w-[640px] max-w-3xl"
        role="img"
        aria-label="Diagram: sun powers solar panels, which feed the hybrid inverter; the inverter supplies home or business load, and exchanges energy with the lithium battery and the grid."
      >
        {/* Sun */}
        <g>
          <circle cx="460" cy="50" r="30" className="fill-green/20 stroke-green" strokeWidth="1.5" />
          <circle cx="460" cy="50" r="12" fill="#68A72F" />
          <text x="460" y="98" textAnchor="middle" className={textStyle}>
            Sun
          </text>
        </g>

        {/* line sun -> panels */}
        <line x1="460" y1="80" x2="460" y2="140" stroke="#68A72F" strokeWidth="2" className="energy-line" />

        {/* Solar Panels */}
        <g>
          <rect x="390" y="140" width="140" height="60" rx="6" className={nodeStyle} strokeWidth="1.5" />
          <text x="460" y="175" textAnchor="middle" className={textStyle}>
            Solar Panels
          </text>
        </g>

        <line x1="460" y1="200" x2="460" y2="250" stroke="#68A72F" strokeWidth="2" className="energy-line" />

        {/* Hybrid Inverter */}
        <g>
          <rect x="370" y="250" width="180" height="60" rx="6" className="fill-green/10 stroke-green" strokeWidth="1.5" />
          <text x="460" y="285" textAnchor="middle" className={textStyle}>
            Hybrid Inverter
          </text>
        </g>

        {/* Inverter -> Load */}
        <line x1="460" y1="310" x2="460" y2="350" stroke="#68A72F" strokeWidth="2" className="energy-line" />
        <g>
          <rect x="350" y="350" width="220" height="55" rx="6" className={nodeStyle} strokeWidth="1.5" />
          <text x="460" y="382" textAnchor="middle" className={textStyle}>
            Home / Business Load
          </text>
        </g>

        {/* Inverter <-> Battery */}
        <line x1="370" y1="280" x2="150" y2="280" stroke="#68A72F" strokeWidth="2" className="energy-line" />
        <g>
          <rect x="20" y="250" width="150" height="60" rx="6" className={nodeStyle} strokeWidth="1.5" />
          <text x="95" y="278" textAnchor="middle" className={textStyle}>
            Lithium Battery
          </text>
          <text x="95" y="296" textAnchor="middle" className={subTextStyle}>
            Stores &amp; supplies energy
          </text>
        </g>

        {/* Inverter <-> Grid */}
        <line x1="550" y1="280" x2="770" y2="280" stroke="#68A72F" strokeWidth="2" className="energy-line" />
        <g>
          <rect x="770" y="250" width="130" height="60" rx="6" className={nodeStyle} strokeWidth="1.5" />
          <text x="835" y="278" textAnchor="middle" className={textStyle}>
            Grid
          </text>
          <text x="835" y="296" textAnchor="middle" className={subTextStyle}>
            Available supply
          </text>
        </g>
      </svg>
    </div>
  );
}
