/* ==========================================================================
   VAIDEHI MODI PORTFOLIO - 5-STEP DATA ANALYTICS PROCESS ENGINE
   ========================================================================== */

const PROCESS_STEPS_DATA = [
  {
    step: 1,
    title: 'Collect',
    badge: 'Step 01 / Pipeline Data Ingestion',
    icon: 'fa-database',
    shortDesc: 'Gather structured and unstructured data from transactional databases, cloud storage, APIs, and business systems.',
    details: 'Establishes robust automated data extraction pipelines using SQL connectors, REST APIs, Python scraping, and ERP database integrations to aggregate raw business telemetry.',
    inputs: ['SQL Server / PostgreSQL DBs', 'REST APIs & Webhooks', 'ERP & CRM Transaction Logs', 'CSV / Excel Spreadsheets'],
    sampleSnippet: `-- Ingest raw transactions into staging schema
SELECT t.TransactionID, t.CustomerID, t.Amount, t.CreatedAt
FROM RawTransactions t
WHERE t.CreatedAt >= DATEADD(day, -30, GETDATE());`,
    output: 'Consolidated staging tables ready for ELT/ETL transformations.'
  },
  {
    step: 2,
    title: 'Clean',
    badge: 'Step 02 / Data Wrangling & Quality Assurance',
    icon: 'fa-filter',
    shortDesc: 'Eliminate duplicate entries, resolve missing values, standardize data types, and normalize schema structures.',
    details: 'Applies rigorous automated data auditing routines in Python Pandas and Power Query DAX to enforce schema integrity, remove anomalies, and generate clean analytical datasets.',
    inputs: ['Raw Staging Tables', 'Unstandardized Date Formats', 'Duplicate Customer Entries', 'Null & Outlier Values'],
    sampleSnippet: `# Python Data wrangling pipeline
df = df.drop_duplicates(subset=['order_id'])
df['order_date'] = pd.to_datetime(df['order_date'], errors='coerce')
df['sales_amount'].fillna(df['sales_amount'].median(), inplace=True)`,
    output: 'Zero-duplicate, schema-validated analytical Star/Snowflake schemas.'
  },
  {
    step: 3,
    title: 'Analyze',
    badge: 'Step 03 / Exploratory Data Analysis & Modeling',
    icon: 'fa-microscope',
    shortDesc: 'Conduct exploratory data analysis (EDA), statistical testing, RFM segmentation, and trend identification.',
    details: 'Leverages SQL window functions, statistical correlations, customer cohort modeling, and predictive regression to unlock key underlying business growth drivers.',
    inputs: ['Clean Star-Schema DB', 'Customer Cohorts', 'Historical KPIs', 'Segment Parameters'],
    sampleSnippet: `-- Cohort Retention SQL Window Analysis
SELECT 
  CohortMonth,
  PeriodIndex,
  COUNT(DISTINCT UserID) AS ActiveUsers,
  ROUND(COUNT(DISTINCT UserID) * 100.0 / FIRST_VALUE(COUNT(DISTINCT UserID)) OVER (PARTITION BY CohortMonth ORDER BY PeriodIndex), 2) AS RetentionPct
FROM UserActivity
GROUP BY 1, 2;`,
    output: 'Validated statistical hypotheses, growth drivers, and key metric correlations.'
  },
  {
    step: 4,
    title: 'Visualize',
    badge: 'Step 04 / BI Dashboard & Storytelling',
    icon: 'fa-chart-pie',
    shortDesc: 'Design intuitive, interactive dashboards in Power BI and Tableau with dynamic cross-filtering and drill-downs.',
    details: 'Transforms analytical matrices into high-impact visual stories featuring executive summary KPIs, trend line charts, geographic breakdown maps, and scenario sliders.',
    inputs: ['Processed Datasets', 'DAX Measure Libraries', 'UI UX Style Tokens', 'Executive Requirements'],
    sampleSnippet: `// Power BI DAX Measure Example
YoY Revenue Growth % = 
VAR CurrentRevenue = [Total Sales Amount]
VAR PriorYearRevenue = CALCULATE([Total Sales Amount], SAMEPERIODLASTYEAR('Date'[Date]))
RETURN
DIVIDE(CurrentRevenue - PriorYearRevenue, PriorYearRevenue, 0)`,
    output: 'Published interactive executive dashboards with dynamic security RLS.'
  },
  {
    step: 5,
    title: 'Decide',
    badge: 'Step 05 / Actionable Business Recommendations',
    icon: 'fa-lightbulb',
    shortDesc: 'Translate dashboard findings into data-backed executive recommendations that boost margin, retention, and ROI.',
    details: 'Partners with department stakeholders to convert raw dashboard signals into strategic business initiatives—reducing cost leaks, optimizing ad spend, and accelerating profit margin growth.',
    inputs: ['Executive Dashboards', 'Scenario Simulations', 'ROI Models', 'Stakeholder Feedback'],
    sampleSnippet: `Strategic Action Plan:
1. Re-allocate 20% budget to top-converting sales channels (+$140k EBITDA).
2. Launch targeted re-engagement campaign for 8% At-Risk High Value Segment.
3. Automate weekly refresh, saving 12 manual hours per week.`,
    output: 'Measured revenue expansion, cost reduction, and data-driven organizational alignment.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initProcessWidget();
});

function initProcessWidget() {
  const stepContainer = document.getElementById('process-steps-buttons');
  const detailsBox = document.getElementById('process-details-content');

  if (!stepContainer || !detailsBox) return;

  let activeStepNum = 1;

  const renderDetails = (stepNum) => {
    const data = PROCESS_STEPS_DATA.find(s => s.step === stepNum);
    if (!data) return;

    detailsBox.innerHTML = `
      <div class="glass-card rounded-2xl p-6 lg:p-8 border border-blue-500/30 bg-slate-900/90 shadow-2xl relative overflow-hidden" data-aos="fade-left">
        <div class="absolute -right-10 -bottom-10 text-white/5 text-9xl font-black pointer-events-none select-none">
          <i class="fas ${data.icon}"></i>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-xl font-bold">
              0${data.step}
            </div>
            <div>
              <span class="text-xs font-mono text-blue-400 uppercase tracking-widest block">${data.badge}</span>
              <h3 class="text-2xl font-bold text-white">${data.title} Phase</h3>
            </div>
          </div>
          <span class="glass-badge px-3 py-1 rounded-full text-xs font-mono">Process Step ${data.step} of 5</span>
        </div>

        <p class="text-gray-300 text-base leading-relaxed mb-6">${data.details}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-slate-950/70 p-4 rounded-xl border border-white/5 space-y-2">
            <h4 class="text-xs font-mono text-blue-400 uppercase tracking-wider flex items-center gap-2">
              <i class="fas fa-sign-in-alt"></i> Primary Inputs & Tools
            </h4>
            <ul class="space-y-1.5">
              ${data.inputs.map(inp => `<li class="text-xs text-gray-300 flex items-center gap-2"><i class="fas fa-check text-blue-400 text-[10px]"></i> ${inp}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-slate-950/70 p-4 rounded-xl border border-white/5 space-y-2">
            <h4 class="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <i class="fas fa-sign-out-alt"></i> Value Output & Deliverable
            </h4>
            <p class="text-xs text-gray-300 leading-relaxed">${data.output}</p>
          </div>
        </div>

        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div class="flex items-center justify-between text-xs text-gray-400 font-mono mb-2">
            <span>Transformation Logic Snippet</span>
            <span class="text-blue-400">${data.title.toLowerCase()}_pipeline.sql</span>
          </div>
          <pre class="text-xs text-blue-300 font-mono overflow-x-auto p-2 bg-slate-900 rounded border border-white/5"><code>${escapeHtml(data.sampleSnippet)}</code></pre>
        </div>
      </div>
    `;
  };

  // Render initial step 1
  renderDetails(1);

  // Setup click listeners on step cards
  const stepBtns = stepContainer.querySelectorAll('.process-step-btn');
  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepNum = parseInt(btn.getAttribute('data-step'), 10);
      stepBtns.forEach(b => {
        b.classList.remove('active', 'border-blue-500', 'bg-blue-600/20');
        b.classList.add('border-white/10', 'bg-slate-900/60');
      });
      btn.classList.add('active', 'border-blue-500', 'bg-blue-600/20');
      btn.classList.remove('border-white/10', 'bg-slate-900/60');
      
      activeStepNum = stepNum;
      renderDetails(stepNum);
    });
  });
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
