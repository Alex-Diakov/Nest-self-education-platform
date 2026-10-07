import React, { ReactNode } from 'react';

export type M3ContainerSize = 'max' | 'reading' | 'narrow' | 'full';

export interface M3ContainerProps {
  children: ReactNode;
  size?: M3ContainerSize;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
}

export const M3Container: React.FC<M3ContainerProps> = ({
  children,
  size = 'max',
  className = '',
  as: Component = 'div',
}) => {
  const sizeClasses = {
    max: 'max-w-7xl',
    reading: 'max-w-[720px]',
    narrow: 'max-w-2xl',
    full: 'w-full',
  }[size];

  return (
    <Component className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses} ${className}`}>
      {children}
    </Component>
  );
};
