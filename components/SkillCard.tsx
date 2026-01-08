
import * as React from 'react';
import { Skill } from '../types';
import { Youtube, BookOpen, CheckCircle, Circle } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  onToggle: (id: string) => void;
}

// Component for individual skill display and management
export const SkillCard: React.FC<SkillCardProps> = ({ skill, onToggle }) => {
  const difficultyColors = {
    Beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
    Intermediate: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    Advanced: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    Expert: 'bg-red-500/10 text-red-500 border-red-500/20',
  };

  return (
    <div className={`relative group p-5 rounded-xl border transition-all duration-300 ${
      skill.completed 
        ? 'bg-slate-800/40 border-slate-700/50 grayscale-[0.5]' 
        : 'bg-slate-900 border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
    }`}>
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${difficultyColors[skill.difficulty]}`}>
          {skill.difficulty.toUpperCase()}
        </span>
        <button 
          onClick={() => onToggle(skill.id)}
          className={`transition-colors duration-200 ${skill.completed ? 'text-blue-500' : 'text-slate-600 hover:text-blue-400'}`}
        >
          {skill.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
        </button>
      </div>

      <h3 className={`text-lg font-bold mb-2 ${skill.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
        {skill.title}
      </h3>
      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
        {skill.description}
      </p>

      <div className="space-y-2">
        {skill.resources.map((res, idx) => (
          <a 
            key={idx} 
            href={res.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded transition-colors"
          >
            {res.type === 'youtube' ? <Youtube size={14} className="text-red-500" /> : <BookOpen size={14} className="text-blue-400" />}
            {res.title}
          </a>
        ))}
      </div>

      {skill.completed && (
        <div className="absolute inset-0 bg-blue-500/5 pointer-events-none rounded-xl" />
      )}
    </div>
  );
};
