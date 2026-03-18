export function EnergyLines() {
    return (
        <div className="pointer-events-none absolute inset-0 z-1">
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1400 900"
                fill="none"
                preserveAspectRatio="none"
            >
                {/* LINHA SUPERIOR - energia */}
                <path
                    d="M0 50 L435 50 L580 150 L1400 150"
                    className="energy-pulse"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M415 310 L725 310 L865 200 L1400 200"
                    className="energy-pulse"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M0 580 L325 580 L405 520 L550 520"
                    className="energy-pulse"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Linha direita (blog) */}
                <path
                    d="M930 465 L1400 465"
                    className="energy-pulse"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Linha grande */}
                <path
                    d="M0 650 L720 650 L800 600 L1400 600"
                    className="energy-pulse"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}