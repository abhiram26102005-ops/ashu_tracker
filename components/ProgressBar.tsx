
import * as React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

// Progress bar component for showing user mastery
export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
  const percentage = Math.round((current / total) * 100) || 0;

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{label || 'Progress'}</span>
        <span className="text-xs font-bold text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
