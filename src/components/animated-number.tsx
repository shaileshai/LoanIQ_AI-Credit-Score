'use client';

import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedNumber({
  value,
  duration = 1000,
  className = '',
  prefix = '',
  suffix = '',
}: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    
    if (start === end) {
      setCurrentValue(end);
      return;
    }

    const range = end - start;
    const increment = range / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if ((increment > 0 && start >= end) || (increment < 0 && start <= end)) {
        setCurrentValue(end);
        clearInterval(timer);
      } else {
        setCurrentValue(Math.round(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}{currentValue.toLocaleString()}{suffix}
    </span>
  );
}