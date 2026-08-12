/* ==========================================================================
   VAIDEHI MODI PORTFOLIO - FEATURED PROJECTS DATA & MODAL ENGINE
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: 'sales',
    title: 'Sales Performance & Revenue Dashboard',
    category: ['powerbi', 'sql'],
    tools: ['Power BI', 'SQL Server', 'Excel', 'DAX'],
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    iconClass: 'fa-chart-line',
    shortDesc: 'Interactive executive dashboard analyzing cross-regional sales performance, product category margins, revenue trends, and target tracking.',
    overview: 'Designed and deployed an end-to-end sales intelligence solution for a global enterprise. Integrated multi-channel sales streams into a unified SQL repository and created dynamic DAX measures for real-time executive decision-making.',
    businessProblem: 'Sales executives lacked unified visibility across 5 regional sales territories, leading to delayed revenue forecasting and unrecognized product underperformance.',
    datasetInfo: '500,000+ transactional records containing Order ID, Customer ID, Region, Product Category, Unit Price, Cost, and Order Date spanning 3 fiscal years.',
    dataCleaning: [
      'Joined raw ERP transactions with CRM customer lookup tables using SQL stored procedures.',
      'Handled null values and inconsistent regional date formats using T-SQL string functions.',
      'Created standardized star-schema data model with dedicated Date Dimension in Power Query.'
    ],
    sqlSnippet: `SELECT 
  r.RegionName,
  DATETRUNC('month', s.OrderDate) AS OrderMonth,
  SUM(s.SalesAmount) AS TotalRevenue,
  SUM(s.SalesAmount - (s.Quantity * p.UnitCost)) AS GrossProfit,
  ROUND((SUM(s.SalesAmount - (s.Quantity * p.UnitCost)) / SUM(s.SalesAmount)) * 100, 2) AS ProfitMarginPct
FROM FactSales s
JOIN DimProduct p ON s.ProductID = p.ProductID
JOIN DimRegion r ON s.RegionID = r.RegionID
GROUP BY 1, 2
ORDER BY TotalRevenue DESC;`,
    kpis: [
      { label: 'Total Revenue', value: '$1.42M', change: '+18.4% YoY' },
      { label: 'Gross Margin', value: '42.8%', change: '+3.2% vs target' },
      { label: 'Top Product YoY', value: '$340K', change: 'Enterprise Tier' }
    ],
    insights: [
      'Identified a 24% revenue spike in Region C driven by bundled enterprise offerings.',
      'Discovered underperforming product lines accounting for 15% inventory carrying cost.',
      'Automated weekly refresh cycles, reducing manual reporting time by 12 hours/week.'
    ],
    recommendations: 'Shift 15% marketing spend from low-margin consumer items to top 3 enterprise bundles in Region C.',
    results: 'Increased quarterly gross profit margin by 4.2% within 60 days of dashboard adoption.'
  },
  {
    id: 'customer',
    title: 'Customer Segmentation & RFM Analytics',
    category: ['python', 'sql', 'powerbi'],
    tools: ['Python', 'Pandas', 'PostgreSQL', 'Power BI', 'Scikit-Learn'],
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    iconClass: 'fa-users',
    shortDesc: 'Customer behavioral analysis using Recency, Frequency, and Monetary (RFM) modeling & K-Means clustering to optimize retention.',
    overview: 'Built a predictive customer analytics pipeline in Python and PostgreSQL to categorize 50,000+ active customers into distinct behavioral personas.',
    businessProblem: 'High customer churn rate (14.2% annual) due to generic retention marketing campaigns that failed to engage high-value segments.',
    datasetInfo: '250,000 customer transaction records, support tickets, and email campaign interactions over a 24-month timeline.',
    dataCleaning: [
      'Removed outliers and canceled orders using Pandas filter criteria.',
      'Normalized Recency, Frequency, and Monetary scores using StandardScaler.',
      'Exported segmented cluster outputs back to PostgreSQL database via SQLAlchemy.'
    ],
    sqlSnippet: `WITH CustomerRFM AS (
  SELECT 
    CustomerID,
    MAX(OrderDate) AS LastPurchaseDate,
    COUNT(OrderID) AS Frequency,
    SUM(TotalAmount) AS Monetary
  FROM Orders
  GROUP BY CustomerID
)
SELECT 
  CustomerID,
  NTILE(5) OVER (ORDER BY LastPurchaseDate) AS RecencyScore,
  NTILE(5) OVER (ORDER BY Frequency) AS FrequencyScore,
  NTILE(5) OVER (ORDER BY Monetary) AS MonetaryScore
FROM CustomerRFM;`,
    kpis: [
      { label: 'Active Cohort', value: '52,400', change: 'Segmented into 5 Clusters' },
      { label: 'Champions Segment', value: '18.5%', change: 'Generates 58% Revenue' },
      { label: 'Retention Increase', value: '+11.2%', change: 'Post-campaign target' }
    ],
    insights: [
      'Champions segment generated 58% of total gross revenue despite representing only 18.5% of customer base.',
      'Identified "At-Risk High Spend" group (8% of users) showing 45+ days purchase inactivity.',
      'Automated personalized email triggers based on RFM score changes.'
    ],
    recommendations: 'Implement VIP loyalty incentives for Champions and targeted re-engagement campaigns for At-Risk High Spenders.',
    results: 'Reduced overall customer churn rate by 3.8% and increased repeat purchase rate by 14%.'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Funnel & Conversion Analytics',
    category: ['python', 'tableau', 'sql'],
    tools: ['Python', 'SQL', 'Tableau', 'Google Analytics Data', 'Plotly'],
    bgImage: 'https://images.unsplash.com/photo-1556742049-0a670fc8078c?auto=format&fit=crop&w=800&q=80',
    iconClass: 'fa-shopping-cart',
    shortDesc: 'Comprehensive analysis of e-commerce user journeys, checkout conversion funnel bottlenecks, and product drop-off rates.',
    overview: 'Evaluated user web behavioral flows to pinpoint major conversion friction points across mobile vs desktop platforms.',
    businessProblem: 'Mobile web checkout conversion was 40% lower than desktop despite mobile accounting for 65% of overall site traffic.',
    datasetInfo: '1.2M web session clickstream logs including pageviews, add-to-cart events, cart abandons, and payment step completions.',
    dataCleaning: [
      'Parsed JSON session payload logs into flat Pandas DataFrames.',
      'Calculated step-by-step conversion drop-off rates across payment gateways.',
      'Created automated Tableau extract refresh flows via Tableau Bridge.'
    ],
    sqlSnippet: `SELECT 
  DeviceCategory,
  COUNT(DISTINCT SessionID) AS TotalSessions,
  COUNT(DISTINCT CASE WHEN Event = 'add_to_cart' THEN SessionID END) AS CartSessions,
  COUNT(DISTINCT CASE WHEN Event = 'purchase' THEN SessionID END) AS Purchases,
  ROUND(COUNT(DISTINCT CASE WHEN Event = 'purchase' THEN SessionID END) * 100.0 / COUNT(DISTINCT SessionID), 2) AS ConvRatePct
FROM WebClickstream
GROUP BY DeviceCategory;`,
    kpis: [
      { label: 'Total Web Sessions', value: '1.20M', change: '65% Mobile Traffic' },
      { label: 'Overall Conversion', value: '3.42%', change: '+0.85% post-fix' },
      { label: 'Mobile Drop-Off', value: '62%', change: 'Found in Payment Step' }
    ],
    insights: [
      'Discovered that 62% of mobile cart abandonments occurred specifically on the 3rd-party payment gateway redirect step.',
      'Desktop users converted at 4.8% while mobile converted at only 2.1%.',
      'Page load delays over 2.5s directly correlated with a 15% rise in bounce rates.'
    ],
    recommendations: 'Integrate native 1-click mobile checkout (Apple Pay / Google Pay) and optimize checkout JS bundles.',
    results: 'Mobile conversion rate improved from 2.1% to 3.4%, generating an estimated $280K in incremental annual revenue.'
  },
  {
    id: 'finance',
    title: 'Financial Performance & Profitability Analysis',
    category: ['excel', 'powerbi', 'sql'],
    tools: ['Excel Advanced', 'Power BI', 'SQL Server', 'Financial Modeling'],
    bgImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    iconClass: 'fa-coins',
    shortDesc: 'Automated P&L financial dashboard tracking OPEX, CAPEX, EBITDA margins, and variance against budget forecasts.',
    overview: 'Consolidated financial records from ERP and legacy spreadsheet models into an interactive executive P&L statement in Power BI.',
    businessProblem: 'Monthly financial closing process took 8 business days due to manual Excel consolidation across 12 business units.',
    datasetInfo: '5 years of General Ledger transactions, departmental budget worksheets, and currency conversion tables.',
    dataCleaning: [
      'Mapped heterogeneous chart of accounts across 4 international subsidiaries into unified master hierarchy.',
      'Created dynamic DAX measure formulas for YoY Variance, YTD EBITDA, and Constant Currency conversion.',
      'Implemented automated row-level security (RLS) for departmental managers.'
    ],
    sqlSnippet: `SELECT 
  AccountCategory,
  FiscalYear,
  FiscalQuarter,
  SUM(BudgetAmount) AS Budget,
  SUM(ActualAmount) AS Actual,
  SUM(ActualAmount - BudgetAmount) AS Variance,
  ROUND(((SUM(ActualAmount) - SUM(BudgetAmount)) / SUM(BudgetAmount)) * 100, 2) AS VariancePct
FROM GeneralLedger
GROUP BY AccountCategory, FiscalYear, FiscalQuarter;`,
    kpis: [
      { label: 'Annual Revenue', value: '$24.8M', change: '+12.5% vs Forecast' },
      { label: 'EBITDA Margin', value: '26.4%', change: '+1.8% expansion' },
      { label: 'Closing Time', value: '2 Days', change: 'Reduced from 8 days' }
    ],
    insights: [
      'OPEX in Q3 exceeded budget by 8.4% due to unplanned cloud infrastructure scaling costs.',
      'Sub-unit B demonstrated highest profit margin (34%) despite holding lowest sales headcount.',
      'Standardized automated ledger consolidation eliminated spreadsheet formulas error risk.'
    ],
    recommendations: 'Re-negotiate reserved instance cloud contracts to lock in 20% annual OPEX savings.',
    results: 'Accelerated financial month-end closing from 8 days down to 2 days while ensuring zero budget calculation discrepancies.'
  },
  {
    id: 'hr',
    title: 'HR Analytics & Employee Attrition Dashboard',
    category: ['powerbi', 'sql', 'excel'],
    tools: ['Power BI', 'SQL', 'Excel', 'Statistical Testing'],
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    iconClass: 'fa-user-tie',
    shortDesc: 'Workforce analytics tool diagnosing employee turnover drivers, salary equity, department tenure, and satisfaction index.',
    overview: 'Evaluated HR headcount and exit survey data to uncover root causes of voluntary employee attrition across departments.',
    businessProblem: 'Engineering team experienced an unsustainable 18% turnover rate in 2023, causing project delivery delays.',
    datasetInfo: 'Historical HR records for 4,500 current and former employees, performance reviews, and exit survey scores.',
    dataCleaning: [
      'Anonymized employee personally identifiable information (PII).',
      'Calculated tenure in months and categorized age brackets using SQL CASE statements.',
      'Built interactive attrition matrix in Power BI with drill-through detail views.'
    ],
    sqlSnippet: `SELECT 
  Department,
  JobRole,
  COUNT(EmployeeID) AS TotalHeadcount,
  SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) AS TotalExits,
  ROUND(SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) * 100.0 / COUNT(EmployeeID), 2) AS TurnoverRatePct
FROM EmployeeWorkforce
GROUP BY Department, JobRole
HAVING COUNT(EmployeeID) > 10;`,
    kpis: [
      { label: 'Overall Turnover', value: '11.2%', change: '-3.8% target met' },
      { label: 'Eng Turnover', value: '12.4%', change: 'Down from 18%' },
      { label: 'Avg Tenure', value: '3.8 Yrs', change: '+0.5 Yrs increase' }
    ],
    insights: [
      'Employees with commute distances >15 miles and zero remote work flexibility had 2.8x higher attrition risk.',
      'Mid-level software engineers paid 12% below market benchmark exhibited 85% of total voluntary exits.',
      'High performance rating did not correlate with retention when salary growth stagnated.'
    ],
    recommendations: 'Adopt hybrid work schedules for roles with long commutes and adjust compensation mid-point bands for key tech positions.',
    results: 'Engineering voluntary attrition decreased by 31% over 12 months, saving an estimated $420K in hiring/onboarding costs.'
  },
  {
    id: 'marketing',
    title: 'Marketing Campaign ROI & Attribution Model',
    category: ['python', 'powerbi'],
    tools: ['Python', 'Power BI', 'Excel', 'Statsmodels', 'Google Ads API'],
    bgImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    iconClass: 'fa-bullhorn',
    shortDesc: 'Multi-touch attribution model and campaign ROI analyzer measuring CAC, LTV, conversion paths, and ad spend yield.',
    overview: 'Constructed a dynamic marketing analytics pipeline evaluating paid search, social media, email, and organic channel profitability.',
    businessProblem: 'Marketing leadership was allocating ad spend equally across channels without knowing true multi-channel attribution weight.',
    datasetInfo: '800,000 ad impression events, click records, and multi-channel campaign cost metrics spanning 12 months.',
    dataCleaning: [
      'Extracted raw Google Ads and Meta Ads API data using Python REST scripts.',
      'Implemented Markov Chain attribution model in Python to compare against First-Touch and Last-Touch rules.',
      'Built executive ROI comparison view in Power BI.'
    ],
    sqlSnippet: `SELECT 
  CampaignName,
  Channel,
  SUM(AdSpend) AS TotalSpend,
  SUM(Conversions) AS Conversions,
  ROUND(SUM(AdSpend) / NULLIF(SUM(Conversions), 0), 2) AS CostPerAcquisition,
  ROUND(SUM(Revenue) / NULLIF(SUM(AdSpend), 0), 2) AS ReturnOnAdSpend
FROM MarketingPerformance
GROUP BY CampaignName, Channel
ORDER BY ReturnOnAdSpend DESC;`,
    kpis: [
      { label: 'Total Ad Spend', value: '$380K', change: 'Across 4 Channels' },
      { label: 'Blended ROAS', value: '4.85x', change: '+1.2x improvement' },
      { label: 'Avg CAC', value: '$42.50', change: '-18% cost reduction' }
    ],
    insights: [
      'Non-brand Search ad spend had high Last-Touch credit but low Markov attribution value compared to Email nurturing.',
      'LinkedIn ad campaigns yielded 3.2x higher Average Order Value (AOV) for enterprise SaaS clients.',
      'Re-allocating budget away from low-performing display ads increased overall leads by 22%.'
    ],
    recommendations: 'Reallocate 25% of top-of-funnel display budget into LinkedIn targeted mid-funnel content and email sequences.',
    results: 'Lowered overall Customer Acquisition Cost (CAC) by 18% while expanding total qualified enterprise pipeline value by 35%.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderProjectCards(PROJECTS_DATA);
  initProjectFilters();
  initProjectModal();
});

/**
 * Render Project Cards into Grid
 */
function renderProjectCards(projects) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-12 text-gray-400">No projects found matching the selected filter.</div>`;
    return;
  }

  container.innerHTML = projects.map((p, idx) => `
    <div class="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl"
         data-aos="fade-up" 
         data-aos-delay="${(idx % 3) * 100}">
      
      <!-- Card Banner Visual -->
      <div class="h-52 relative p-6 flex flex-col justify-between overflow-hidden group">
        <!-- Background Image with Dark Overlay -->
        <img src="${p.bgImage}" alt="${p.title}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30 group-hover:opacity-40">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>

        <div class="flex justify-between items-start z-10 relative">
          <span class="glass-badge px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide backdrop-blur-md">
            ${p.tools[0]}
          </span>
          <div class="w-10 h-10 rounded-full bg-slate-900/90 border border-white/15 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
            <i class="fas ${p.iconClass}"></i>
          </div>
        </div>
        
        <div class="z-10 relative">
          <span class="text-xs text-blue-300 font-mono tracking-wider uppercase block mb-1">Analytics Case Study</span>
          <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">${p.title}</h3>
        </div>
      </div>

      <!-- Card Content -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <p class="text-gray-300 text-sm leading-relaxed font-light">${p.shortDesc}</p>
        
        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 pt-2">
          ${p.tools.map(tool => `<span class="bg-slate-800/80 text-gray-300 text-xs px-2.5 py-1 rounded-md border border-slate-700/60 font-mono">${tool}</span>`).join('')}
        </div>

        <!-- Quick Insights Preview -->
        <div class="bg-slate-900/60 p-3 rounded-xl border border-white/5 space-y-1">
          <div class="text-xs text-blue-400 font-semibold uppercase font-mono">Key Impact</div>
          <div class="text-xs text-gray-300 flex items-center gap-2">
            <i class="fas fa-check-circle text-emerald-400"></i>
            <span>${p.kpis[0].label}: <strong class="text-white">${p.kpis[0].value}</strong></span>
          </div>
        </div>

        <!-- Card Actions -->
        <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
          <button onclick="openProjectModal('${p.id}')" 
                  class="w-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-500 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/20">
            <span>Explore Full Case Study</span>
            <i class="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Filter Tabs Handler
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');
      if (cat === 'all') {
        renderProjectCards(PROJECTS_DATA);
      } else {
        const filtered = PROJECTS_DATA.filter(p => p.category.includes(cat));
        renderProjectCards(filtered);
      }
    });
  });
}

/**
 * Project Detail Modal Handler
 */
let currentModalChart = null;

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-project-modal');
  const overlay = document.getElementById('project-modal-overlay');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (currentModalChart) {
      currentModalChart.destroy();
      currentModalChart = null;
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  // Expose global open modal function
  window.openProjectModal = function(id) {
    const project = PROJECTS_DATA.find(p => p.id === id);
    if (!project) return;

    // Populate modal elements
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-tools').innerHTML = project.tools.map(t => `<span class="bg-blue-900/40 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-700/50 font-mono">${t}</span>`).join('');
    document.getElementById('modal-overview').textContent = project.overview;
    document.getElementById('modal-problem').textContent = project.businessProblem;
    document.getElementById('modal-dataset').textContent = project.datasetInfo;
    
    // Cleaning steps list
    document.getElementById('modal-cleaning').innerHTML = project.dataCleaning.map(step => `
      <li class="flex items-start gap-2.5 text-gray-300 text-sm">
        <i class="fas fa-check text-blue-400 mt-1 text-xs"></i>
        <span>${step}</span>
      </li>
    `).join('');

    // SQL / Python Code snippet
    document.getElementById('modal-code-snippet').textContent = project.sqlSnippet;

    // KPIs list
    document.getElementById('modal-kpis').innerHTML = project.kpis.map(k => `
      <div class="bg-slate-900/80 p-4 rounded-xl border border-white/10 text-center">
        <div class="text-xs text-gray-400 uppercase font-mono">${k.label}</div>
        <div class="text-2xl font-bold text-white mt-1">${k.value}</div>
        <div class="text-xs text-emerald-400 mt-0.5">${k.change}</div>
      </div>
    `).join('');

    // Insights list
    document.getElementById('modal-insights').innerHTML = project.insights.map(i => `
      <li class="flex items-start gap-2.5 text-gray-300 text-sm">
        <i class="fas fa-lightbulb text-amber-400 mt-1"></i>
        <span>${i}</span>
      </li>
    `).join('');

    document.getElementById('modal-recommendations').textContent = project.recommendations;
    document.getElementById('modal-results').textContent = project.results;

    // Open modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Destroy previous chart if exists
    if (currentModalChart) {
      currentModalChart.destroy();
    }

    // Render interactive chart inside modal
    setTimeout(() => {
      if (typeof window.renderProjectModalChart === 'function') {
        currentModalChart = window.renderProjectModalChart('modal-chart-canvas', project.id);
      }
    }, 150);
  };
}
