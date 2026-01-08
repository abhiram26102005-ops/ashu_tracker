import React from 'react';
import { ROADMAP_DATA, JOB_ROLES } from './constants';
import { SkillCard } from './components/SkillCard';
import { ProgressBar } from './components/ProgressBar';
import {
  Trophy,
  Map,
  Briefcase,
  Zap,
  Layout,
  Code
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'roadmap' | 'jobs'>('roadmap');
  const [roadmap, setRoadmap] = React.useState(ROADMAP_DATA);

  // Dashboard statistics
  const stats = React.useMemo(() => {
    let total = 0;
    let completed = 0;

    roadmap.forEach(mod => {
      mod.skills.forEach(skill => {
        total++;
        if (skill.completed) completed++;
      });
    });

    return { total, completed };
  }, [roadmap]);

  const toggleSkill = (id: string) => {
    setRoadmap(prev =>
      prev.map(mod => ({
        ...mod,
        skills: mod.skills.map(skill =>
          skill.id === id
            ? { ...skill, completed: !skill.completed }
            : skill
        )
      }))
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold">AnimatePath Elite</h1>
              <p className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold">
                The 1% Animator Protocol
              </p>
            </div>
          </div>

          <nav className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
            {[
              { id: 'roadmap', icon: <Map size={18} />, label: 'Roadmap' },
              { id: 'jobs', icon: <Briefcase size={18} />, label: 'Market' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'roadmap' | 'jobs')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition
                  ${activeTab === tab.id
                    ? 'bg-slate-800 text-blue-400'
                    : 'text-slate-400 hover:text-white'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">

        {/* STATS */}
        <div className="mb-10 flex flex-col md:flex-row gap-8 justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              Your Journey to Mastery <Trophy className="text-yellow-500" />
            </h2>
            <p className="text-slate-400 mb-6">
              Track your progress from fundamentals to elite technical animation.
            </p>
            <ProgressBar
              current={stats.completed}
              total={stats.total}
              label="Mastery Progress"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Rank</div>
              <div className="text-xl font-bold">Apprentice</div>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Market Ready</div>
              <div className="text-xl font-bold text-blue-400">20%</div>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hidden md:block">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Elite XP</div>
              <div className="text-xl font-bold text-purple-400">
                {stats.completed * 250}
              </div>
            </div>
          </div>
        </div>

        {/* ROADMAP */}
        {activeTab === 'roadmap' && (
          <div className="space-y-12 pb-24">
            {roadmap.map((module, idx) => (
              <section key={idx}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold">{module.title}</h3>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {module.skills.map(skill => (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      onToggle={toggleSkill}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* JOBS */}
        {activeTab === 'jobs' && (
          <div className="space-y-6 max-w-4xl mx-auto pb-24">
            {JOB_ROLES.map((job, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl"
              >
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-slate-400 text-sm">{job.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black">{job.salaryRange}</div>
                    <div className="text-xs text-slate-500 uppercase">
                      Annual
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {job.requiredSkills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="fixed bottom-0 w-full bg-slate-950/90 backdrop-blur border-t border-slate-800 py-3 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Layout size={14} /> Auto-saving Progress
          </span>
          <button className="bg-white text-slate-950 px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2">
            Demo Reel Plan <Code size={14} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
