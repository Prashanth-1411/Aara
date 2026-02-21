import React from 'react';

const WaveBackground = () => {
    return (
        <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
            <svg
                viewBox="0 0 1440 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="w-100 h-100"
            >
                {/* Blue Left Side */}
                <path d="M0 0H400C400 0 550 250 450 512C350 774 500 1024 500 1024H0V0Z" fill="#0B3D91" />

                {/* Grey Accent Curve */}
                <path d="M400 0C400 0 550 250 450 512C350 774 500 1024 500 1024H520C520 1024 370 774 470 512C570 250 420 0 420 0H400Z" fill="#E5E7EB" fillOpacity="0.5" />
            </svg>
        </div>
    );
};

export default WaveBackground;
