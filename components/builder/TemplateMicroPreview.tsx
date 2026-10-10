'use client';

import React, { memo, useRef, useState, useEffect } from 'react';
import { ResumeTemplateRenderer, TemplateId, MOCK_PERSONA } from './ResumeTemplates';

interface TemplateMicroPreviewProps {
  templateId: TemplateId | string;
  className?: string;
}

export const TemplateMicroPreview: React.FC<TemplateMicroPreviewProps> = memo(({
  templateId,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Default scale for typical card width (~360px / 794px ~ 0.46)
  const [scale, setScale] = useState<number>(0.46);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateScale = () => {
      if (containerRef.current) {
        const cw = containerRef.current.clientWidth;
        const ch = containerRef.current.clientHeight;
        if (cw > 0 && ch > 0) {
          // Exactly cover the card container width and height edge-to-edge (no margins, no empty borders)
          const targetScale = Math.max(cw / 794, ch / 1123);
          setScale(targetScale);
        } else if (cw > 0) {
          setScale(cw / 794);
        }
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden bg-white select-none pointer-events-none flex justify-center items-start ${className}`}
    >
      <div
        style={{
          width: '794px',
          minHeight: '1123px',
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          flexShrink: 0,
        }}
        className="bg-white shadow-none"
      >
        <ResumeTemplateRenderer
          templateId={templateId as TemplateId}
          data={MOCK_PERSONA as any}
          zoomLevel={100}
          isMicroPreview={true}
        />
      </div>
    </div>
  );
});

TemplateMicroPreview.displayName = 'TemplateMicroPreview';
