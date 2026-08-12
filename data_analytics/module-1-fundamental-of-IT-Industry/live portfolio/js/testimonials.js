/* ==========================================================================
   VAIDEHI MODI PORTFOLIO - TESTIMONIALS CAROUSEL SLIDER
   ========================================================================== */

const TESTIMONIALS_DATA = [
  {
    name: 'Rajesh Sharma',
    role: 'VP of Business Intelligence & Strategy',
    company: 'Enterprise Solutions Group',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    quote: 'Vaidehi transformed our raw transaction logs into an executive dashboard that completely revolutionized our weekly sales reviews. Her deep mastery of SQL query tuning and Power BI storytelling enabled us to cut reporting prep time by over 80%.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Director of Marketing Analytics',
    company: 'GrowthMetrics Global',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    quote: 'Working with Vaidehi was an absolute game changer. Her customer RFM segmentation modeling identified high-value buyer cohorts that had been completely overlooked, directly boosting our quarterly campaign ROI by 35%.'
  },
  {
    name: 'Anish Verma',
    role: 'Head of Data Operations & Engineering',
    company: 'FinTech Analytics Corp',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    quote: 'Vaidehi brings rare dual strength in technical data cleaning (Python/Pandas) and senior executive communication. She delivers clean, scalable pipelines with intuitive dashboards that stakeholders actually love using.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialsSlider();
});

function initTestimonialsSlider() {
  const container = document.getElementById('testimonials-container');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const dotsContainer = document.getElementById('testimonial-dots');

  if (!container) return;

  let currentIndex = 0;

  const render = () => {
    const item = TESTIMONIALS_DATA[currentIndex];
    container.innerHTML = `
      <div class="glass-card rounded-2xl p-8 lg:p-10 border border-white/10 relative overflow-hidden bg-slate-900/80 shadow-2xl transition-all duration-500" data-aos="zoom-in">
        <div class="absolute top-6 right-8 text-blue-500/10 text-8xl font-serif pointer-events-none select-none">“</div>
        
        <div class="flex items-center gap-1 text-amber-400 mb-6">
          ${Array(item.stars).fill('<i class="fas fa-star text-sm"></i>').join('')}
        </div>

        <p class="text-gray-200 text-lg lg:text-xl leading-relaxed italic mb-8 relative z-10 font-light">
          "${item.quote}"
        </p>

        <div class="flex items-center gap-4 pt-6 border-t border-slate-800">
          <img src="${item.avatarUrl}" alt="${item.name}" class="w-14 h-14 rounded-full object-cover border-2 border-blue-500/40 shadow-lg">
          <div>
            <h4 class="text-base font-bold text-white">${item.name}</h4>
            <p class="text-xs text-blue-400 font-mono">${item.role}</p>
            <p class="text-xs text-gray-400">${item.company}</p>
          </div>
        </div>
      </div>
    `;

    // Render pagination dots
    if (dotsContainer) {
      dotsContainer.innerHTML = TESTIMONIALS_DATA.map((_, idx) => `
        <button class="w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-500 w-8' : 'bg-slate-700 hover:bg-slate-500'}" 
                onclick="setTestimonialIndex(${idx})"></button>
      `).join('');
    }
  };

  window.setTestimonialIndex = function(idx) {
    currentIndex = idx;
    render();
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length;
      render();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % TESTIMONIALS_DATA.length;
      render();
    });
  }

  render();
}
