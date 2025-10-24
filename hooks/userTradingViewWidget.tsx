'use client';
import { useEffect, useRef } from 'react';

interface TradingViewWidgetHookProps {
    scriptUrl: string;
    config: Record<string, unknown>;
    height?: number;
}

const useTradingViewWidget = ({ scriptUrl, config, height = 600 }: TradingViewWidgetHookProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (containerRef.current.dataset.loaded) return;

        // ✅ FIX 2: className → class, innerHTML syntax correction
        containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width:100%;height:${height}px;"></div>`;

        const script = document.createElement("script");
        script.src = scriptUrl;
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify(config);
        containerRef.current.appendChild(script);
        containerRef.current.dataset.loaded = 'true';

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = ''; // ✅ FIX 3: innerHtml → innerHTML
                delete containerRef.current.dataset.loaded;
            }
        };
    }, [scriptUrl, config, height]);

    return containerRef;
};

export default useTradingViewWidget;
