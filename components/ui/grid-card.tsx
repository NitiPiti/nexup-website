import * as React from 'react';
import { cn } from '@/lib/utils';

export interface GridCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GridCard({ children, className, ...props }: GridCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all hover:shadow-md',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}




