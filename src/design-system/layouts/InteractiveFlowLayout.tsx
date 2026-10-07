import React, { ReactNode } from 'react';
import { M3Container } from '../m3/components/M3Container.tsx';

export interface InteractiveFlowLayoutProps {
  topBar?: ReactNode;
  stepper?: ReactNode;
  children: ReactNode;
  footerActions?: ReactNode;
  maxWidth?: 'narrow' | 'reading' | 'max';
  className?: string;
}

export const InteractiveFlowLayout: React.FC<InteractiveFlowLayoutProps> = ({
  topBar,
  stepper,
  children,
  footerActions,
  maxWidth = 'reading',
  className = '',
}) => {
  const containerSize = maxWidth === 'max' ? 'max' : maxWidth === 'narrow' ? 'narrow' : 'reading';

  return (
    <div className={`min-h-[80vh] flex flex-col justify-start py-6 sm:py-12 ${className}`}>
      <M3Container size={containerSize} className="w-full space-y-4 sm:space-y-6">
        {/* Top Control Bar (Timer / Exit / Domain) */}
        {topBar && (
          <header className="w-full">
            {topBar}
          </header>
        )}

        {/* Stepper / Progress Bar */}
        {stepper && (
          <nav className="w-full" aria-label="Progress">
            {stepper}
          </nav>
        )}

        {/* Interactive Main Body */}
        <main className="w-full">
          {children}
        </main>

        {/* Footer Actions */}
        {footerActions && (
          <footer className="w-full pt-4">
            {footerActions}
          </footer>
        )}
      </M3Container>
    </div>
  );
};
