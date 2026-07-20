export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
  quote?: string;
};

export type Article = {
  slug: string;
  category: string;
  date: string;
  time: string;
  title: string;
  summary: string;
  image: string;
  accent: "violet" | "cyan" | "lime";
  dek: string;
  author: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "ai-assistants-to-ai-teammates",
    category: "Artificial Intelligence",
    date: "July 18, 2026",
    time: "8 min read",
    title: "The quiet shift from AI assistants to AI teammates",
    summary: "A practical look at how autonomous workflows are changing the way modern teams build, research, and ship.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=88",
    accent: "violet",
    dek: "The most consequential change in AI is not a smarter chat box. It is software that can hold context, coordinate work, and move a project forward alongside us.",
    author: "Maya Chen",
    sections: [
      { paragraphs: ["For the first years of generative AI, the dominant interaction was simple: ask a question and receive an answer. That model was powerful, but it kept the human firmly in the role of operator—breaking work into prompts, moving information between tools, and checking every intermediate step.", "A new generation of systems is changing that rhythm. These tools do not merely respond. They maintain a working memory, use software, divide goals into steps, and return with completed work. The shift sounds subtle, but it changes what people can reasonably delegate."] },
      { heading: "From response to responsibility", paragraphs: ["A teammate is useful because it owns a meaningful slice of the problem. The same standard is beginning to apply to AI. Instead of asking for ten headline ideas, a marketer can ask for a campaign brief grounded in recent customer research. Instead of requesting a code snippet, an engineer can hand over a bug, its failing test, and the boundaries of an acceptable fix.", "The best implementations keep responsibility legible. They show what the system understood, which tools it used, what changed, and where human judgment is still required."], quote: "The breakthrough is not autonomy for its own sake. It is useful delegation with a clear trail of evidence." },
      { heading: "The new management skill", paragraphs: ["Working well with AI teammates rewards the same habits that make human teams effective: clear outcomes, useful context, defined constraints, and thoughtful review. Vague requests produce vague work. Good briefs create leverage.", "That means AI fluency will look less like memorizing prompt tricks and more like learning to design work. People who can frame a problem, identify its risks, and recognize a strong result will benefit most." ] },
      { heading: "What remains human", paragraphs: ["Judgment, taste, accountability, and trust do not disappear when execution gets faster. If anything, they become more visible. When the cost of producing an option approaches zero, choosing the right option becomes the work.", "The teams pulling ahead are not replacing people with agents. They are redesigning the boundary between human judgment and machine execution—and treating that boundary as a product in its own right."] },
    ],
  },
  {
    slug: "security-as-a-product-feature",
    category: "Cybersecurity",
    date: "July 15, 2026",
    time: "6 min read",
    title: "Security is becoming a product feature",
    summary: "Why the best engineering teams are moving trust, privacy, and resilience to the center of the roadmap.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1800&q=88",
    accent: "cyan",
    dek: "Security used to live behind the product. Today, users can feel it—and they increasingly choose tools that make trust obvious.",
    author: "Noah Williams",
    sections: [
      { paragraphs: ["For years, security was treated as infrastructure: essential, expensive, and mostly invisible. It entered the conversation during compliance reviews or after something went wrong. That separation is breaking down.", "Passkeys, privacy controls, activity histories, device management, and recovery flows now shape the everyday product experience. Done well, they reduce anxiety and make software feel considered. Done poorly, they create friction at the exact moment a user needs confidence."] },
      { heading: "Trust has an interface", paragraphs: ["People rarely inspect a security architecture, but they constantly interpret signals. A clear login alert, a reversible permission, and a plain-language explanation all communicate that a company has anticipated risk.", "This is why security can no longer be bolted on after design. The strongest teams bring product, security, and support into the same room early—before an implementation hardens into a confusing experience."], quote: "A secure product should not merely protect the user. It should help the user understand that protection." },
      { heading: "Designing for recovery", paragraphs: ["Prevention gets attention, but recovery is where trust is tested. Lost devices, compromised credentials, accidental deletions, and vendor outages are inevitable. A thoughtful recovery path turns a crisis into a manageable sequence.", "Resilient products provide useful checkpoints, explain consequences before destructive actions, and give people a way back whenever possible."] },
      { heading: "A competitive advantage", paragraphs: ["As products converge in capability, trust becomes a differentiator. Organizations that explain their safeguards clearly and respect the user’s attention are easier to recommend, easier to adopt, and harder to leave."] },
    ],
  },
  {
    slug: "new-economics-of-open-source",
    category: "Open Source",
    date: "July 11, 2026",
    time: "5 min read",
    title: "The new economics of open source",
    summary: "Maintainers are rewriting the playbook for sustainable software—and the ecosystem is better for it.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=88",
    accent: "lime",
    dek: "The software economy runs on public code. A new generation of maintainers is finding better ways to fund the invisible work beneath it.",
    author: "Ari Patel",
    sections: [
      { paragraphs: ["Open-source software has always contained a productive contradiction: it can be free to use while remaining costly to sustain. A library maintained at night by two volunteers may sit inside products used by millions of people. The value is obvious; the business model often is not.", "That imbalance is finally producing new experiments. Maintainers are combining sponsorship, hosted services, dual licensing, support contracts, and foundations instead of waiting for a single universal answer."] },
      { heading: "Maintenance is the product", paragraphs: ["The visible feature is only a fraction of the work. Reviewing contributions, triaging vulnerabilities, writing migration guides, and making cautious releases are what turn a repository into dependable infrastructure.", "The most promising funding models recognize that reliability—not merely access to source code—is what organizations are willing to support."], quote: "Open source does not need one business model. It needs honest models that match the work being done." },
      { heading: "Companies are growing up", paragraphs: ["Engineering leaders are becoming more deliberate about the projects they depend on. Some now budget for sponsorship alongside cloud infrastructure. Others let employees contribute during work hours or fund dedicated maintainers.", "These actions are not charity. They are supply-chain investment, aimed at keeping critical software healthy and responsive."] },
      { heading: "A more resilient commons", paragraphs: ["Sustainability will remain uneven, but the conversation has changed. Maintainers are more willing to set boundaries, companies are more aware of their dependencies, and users increasingly understand that free software still requires paid labor."] },
    ],
  },
  {
    slug: "ambient-computing-is-ready",
    category: "Hardware",
    date: "July 9, 2026",
    time: "4 min read",
    title: "Why ambient computing is finally ready",
    summary: "Smarter sensors and quieter interfaces are moving computing out of the foreground.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=88",
    accent: "cyan",
    dek: "The next useful computer may be the one that asks for the least attention.",
    author: "Elena Torres",
    sections: [
      { paragraphs: ["Ambient computing has spent decades as a demo of the future: rooms that respond, objects that understand context, and interfaces that recede when they are not needed. The vision was compelling; the hardware was clumsy.", "That gap is narrowing. Low-power chips, better local models, interoperable home standards, and cheaper sensors are making context-aware devices more practical—and less dependent on a constant trip to the cloud."] },
      { heading: "Quiet by design", paragraphs: ["The challenge is not adding intelligence to every object. It is deciding when that intelligence deserves a user’s attention. The best ambient systems communicate through small, glanceable cues and stay silent when confidence is low."], quote: "A truly smart environment should reduce decisions, not manufacture more notifications." },
      { heading: "Privacy at the edge", paragraphs: ["Local processing matters because ambient devices observe intimate spaces. Keeping more audio, video, and presence data on-device lowers latency and limits exposure. Clear physical controls matter too: a visible shutter or hardware mute switch can convey more trust than a page of policy text."] },
    ],
  },
  {
    slug: "frontend-stack-simplifying",
    category: "Development",
    date: "July 6, 2026",
    time: "7 min read",
    title: "The frontend stack is simplifying again",
    summary: "After years of expanding complexity, web teams are rediscovering the value of fewer layers.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=88",
    accent: "violet",
    dek: "The modern web is not becoming simple, but its best tools are learning to hide complexity in the right places.",
    author: "Sam Okafor",
    sections: [
      { paragraphs: ["Frontend development expanded quickly because the web asked more of it. Teams added build tools, state libraries, rendering strategies, data layers, and deployment adapters—often for good reasons. Eventually, the cost of choosing and maintaining those layers became a problem of its own.", "The pendulum is shifting. Frameworks are absorbing common decisions, browsers are gaining long-requested capabilities, and teams are questioning abstractions that do not produce visible user value."] },
      { heading: "Less glue, more product", paragraphs: ["A simpler stack does not mean returning to a nostalgic version of the web. It means selecting a cohesive path and resisting unnecessary escape hatches. The goal is fewer seams for a team to understand and debug."], quote: "The best abstraction is not the cleverest one. It is the one a team can confidently remove, replace, or ignore." },
      { heading: "The platform keeps winning", paragraphs: ["Container queries, view transitions, native form controls, and stronger browser APIs remove entire categories of custom code. Each improvement lets frameworks focus on orchestration while the platform handles presentation and interaction.", "That division creates more portable skills and more durable products—two benefits that rarely appear on a feature checklist but compound for years."] },
    ],
  },
  {
    slug: "smaller-models-faster-infrastructure",
    category: "Cloud",
    date: "July 2, 2026",
    time: "5 min read",
    title: "Smaller models, faster infrastructure",
    summary: "Compact AI systems are changing the economics of latency, privacy, and deployment.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=88",
    accent: "lime",
    dek: "In the race for bigger models, the industry nearly missed a second story: small models are getting remarkably capable.",
    author: "Jon Bell",
    sections: [
      { paragraphs: ["Large frontier models define the edge of what AI can do, but most product interactions do not require the edge. They require a fast, affordable, predictable answer to a narrow problem.", "That realization is pushing teams toward compact models tuned for a specific domain. These systems can run closer to users, respond quickly, and operate within a clearer cost envelope."] },
      { heading: "Latency changes behavior", paragraphs: ["When an intelligent feature responds instantly, people use it differently. Suggestions feel interactive instead of asynchronous. Voice interfaces become conversational. Automated checks can run continuously rather than at the end of a workflow."], quote: "Speed is not merely an infrastructure metric. It determines which experiences feel natural." },
      { heading: "A portfolio, not a winner", paragraphs: ["The future stack will likely use many models. A small local system can classify intent, a specialized model can handle routine work, and a frontier model can step in for ambiguous or high-value tasks.", "That routing layer turns model choice into product design. The winning architecture will not always call the smartest model—it will call the right one."] },
    ],
  },
];

export const featuredArticles = articles.slice(0, 3);
export const quickReadArticles = articles.slice(3);

export const topics = [
  { slug: "artificial-intelligence", name: "Artificial Intelligence", description: "Agents, models, and the changing relationship between people and intelligent software.", articleSlugs: ["ai-assistants-to-ai-teammates", "smaller-models-faster-infrastructure"] },
  { slug: "cybersecurity", name: "Cybersecurity", description: "Practical reporting on digital trust, resilient products, privacy, and the evolving threat landscape.", articleSlugs: ["security-as-a-product-feature", "ambient-computing-is-ready"] },
  { slug: "web-development", name: "Web Development", description: "Tools, patterns, and ideas helping teams build a faster, simpler, and more durable web.", articleSlugs: ["frontend-stack-simplifying", "new-economics-of-open-source"] },
  { slug: "cloud", name: "Cloud", description: "The infrastructure shifts changing how modern software is deployed, scaled, and experienced.", articleSlugs: ["smaller-models-faster-infrastructure", "security-as-a-product-feature"] },
  { slug: "open-source", name: "Open Source", description: "The maintainers, communities, and economic models behind the software commons.", articleSlugs: ["new-economics-of-open-source", "frontend-stack-simplifying"] },
  { slug: "hardware", name: "Hardware", description: "New devices, chips, sensors, and interfaces moving computing into the world around us.", articleSlugs: ["ambient-computing-is-ready", "smaller-models-faster-infrastructure"] },
  { slug: "future-of-work", name: "Future of Work", description: "How AI, automation, and better tools are reshaping teams, skills, and creative work.", articleSlugs: ["ai-assistants-to-ai-teammates", "frontend-stack-simplifying"] },
] as const;

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getTopicArticles(slug: string) {
  const topic = getTopic(slug);
  return topic ? topic.articleSlugs.map((articleSlug) => getArticle(articleSlug)).filter((article): article is Article => Boolean(article)) : [];
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
