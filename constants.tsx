
import { RoadmapModule, JobRole } from './types';

export const ROADMAP_DATA: RoadmapModule[] = [
  {
    title: "Phase 1: The Artistic Soul (Foundations)",
    skills: [
      {
        id: "12-principles",
        title: "12 Principles of Animation",
        description: "Squash and stretch, timing, anticipation, and the core building blocks of life-like movement.",
        difficulty: "Beginner",
        category: "Foundation",
        completed: false,
        resources: [
          { title: "Alan Becker: 12 Principles of Animation", url: "https://www.youtube.com/watch?v=uDqjIdI4bF4", type: "youtube" },
          { title: "Principles of Animation (Official Guide)", url: "https://vimeo.com/channels/principlesofanimation", type: "youtube" }
        ]
      },
      {
        id: "art-fund",
        title: "Traditional Art Foundations",
        description: "Perspective, anatomy, and color theory. Even for code-based animation, the eye needs training.",
        difficulty: "Beginner",
        category: "Foundation",
        completed: false,
        resources: [
          { title: "Proko: Anatomy for Artists", url: "https://www.youtube.com/user/ProkoTV", type: "youtube" },
          { title: "Draw A Box", url: "https://drawabox.com/", type: "documentation" }
        ]
      }
    ]
  },
  {
    title: "Phase 2: Master the Industry Tools",
    skills: [
      {
        id: "blender-3d",
        title: "3D Mastery (Blender/Maya)",
        description: "Learning the UI, modeling, rigging, and keyframing in modern 3D environments.",
        difficulty: "Intermediate",
        category: "Tools",
        completed: false,
        resources: [
          { title: "Blender Guru: The Donut Series", url: "https://www.youtube.com/watch?v=nIoXOplUvww", type: "youtube" },
          { title: "Autodesk Maya Learning Channel", url: "https://www.youtube.com/user/MayaHowTos", type: "youtube" }
        ]
      },
      {
        id: "vfx-ae",
        title: "2D & Motion Graphics (After Effects)",
        description: "Compositing, vector animation, and procedural effects.",
        difficulty: "Intermediate",
        category: "Tools",
        completed: false,
        resources: [
          { title: "Video Copilot (Andrew Kramer)", url: "https://www.videocopilot.net/tutorials/", type: "documentation" },
          { title: "Ben Marriott: Motion Design Tutorials", url: "https://www.youtube.com/user/benmarriott", type: "youtube" }
        ]
      }
    ]
  },
  {
    title: "Phase 3: The Coder-Animator (Technical Art)",
    skills: [
      {
        id: "maya-python",
        title: "Python for Animation (Maya/Blender API)",
        description: "Scripting tools, custom rigs, and automating boring tasks to save production hours.",
        difficulty: "Advanced",
        category: "Coding",
        completed: false,
        resources: [
          { title: "DICE Maya Python Tutorial", url: "https://www.youtube.com/watch?v=7uKjB46B9l4", type: "youtube" },
          { title: "Blender Scripting (Python)", url: "https://www.youtube.com/watch?v=cyt0O7saU4Q", type: "youtube" }
        ]
      },
      {
        id: "web-gl",
        title: "Web Animation (Three.js / GSAP)",
        description: "Bringing high-end animation to the browser using WebGL and Javascript.",
        difficulty: "Advanced",
        category: "Coding",
        completed: false,
        resources: [
          { title: "Three.js Journey (Bruno Simon)", url: "https://threejs-journey.com/", type: "documentation" },
          { title: "DesignCourse: Three.js for Beginners", url: "https://www.youtube.com/watch?v=xJAfLdUgdc4", type: "youtube" }
        ]
      },
      {
        id: "shaders-glsl",
        title: "Shaders & GLSL",
        description: "The secret sauce of top-tier visuals. Writing code that runs directly on the GPU.",
        difficulty: "Expert",
        category: "Coding",
        completed: false,
        resources: [
          { title: "The Book of Shaders", url: "https://thebookofshaders.com/", type: "documentation" },
          { title: "The Art of Code (Shaders)", url: "https://www.youtube.com/c/TheArtofCodeIsHere", type: "youtube" }
        ]
      }
    ]
  },
  {
    title: "Phase 4: Real-time & Physics",
    skills: [
      {
        id: "unreal-niagara",
        title: "Unreal Engine & Niagara VFX",
        description: "Particle systems and real-time cinematic animation in the world's most powerful engine.",
        difficulty: "Expert",
        category: "Advanced",
        completed: false,
        resources: [
          { title: "Unreal Engine Official Learning", url: "https://dev.epicgames.com/community/learning", type: "documentation" },
          { title: "William Faucher: Unreal Lighting & Tech", url: "https://www.youtube.com/c/WilliamFaucher", type: "youtube" }
        ]
      }
    ]
  }
];

export const JOB_ROLES: JobRole[] = [
  {
    title: "Technical Animator",
    description: "Bridges the gap between artists and coders. Responsible for complex rigging and automation pipelines.",
    salaryRange: "$95,000 - $160,000+",
    requiredSkills: ["Python", "Maya/Blender", "Rigging", "Anatomy"],
    demand: "High"
  },
  {
    title: "R&D Software Engineer (Graphics)",
    description: "Builds the actual tools that animators use (Renderers, Simulators).",
    salaryRange: "$130,000 - $250,000+",
    requiredSkills: ["C++", "OpenGL/Vulkan", "Math", "Physics"],
    demand: "High"
  },
  {
    title: "Lead Character Animator",
    description: "The visionary behind how characters move and emote. Focuses on performance and storytelling.",
    salaryRange: "$110,000 - $180,000+",
    requiredSkills: ["12 Principles", "Acting", "Directing", "Project Management"],
    demand: "Medium"
  },
  {
    title: "Creative Technologist",
    description: "Uses code to create experimental, interactive animation for web and installations.",
    salaryRange: "$100,000 - $170,000+",
    requiredSkills: ["Three.js", "GLSL", "GSAP", "Creative Coding"],
    demand: "Emerging"
  }
];
