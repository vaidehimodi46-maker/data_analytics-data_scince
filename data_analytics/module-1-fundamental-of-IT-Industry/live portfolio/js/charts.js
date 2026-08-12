/* ==========================================================================
   VAIDEHI MODI PORTFOLIO - CHART.JS DATA VISUALIZATION ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Wait slightly to ensure Chart.js library is loaded
  setTimeout(() => {
    initHeroCharts();
  }, 100);
});

/**
 * Initialize Hero Section Dashboard Charts
 */
function initHeroCharts() {
  const canvasLine = document.getElementById('hero-line-chart');
  const canvasDonut = document.getElementById('hero-donut-chart');

  if (typeof Chart === 'undefined') return;

  // Chart 1: Revenue vs Target Trend (Line + Gradient)
  if (canvasLine) {
    const ctx = canvasLine.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1 (26)', 'Q2 (26)'],
        datasets: [
          {
            label: 'Actual Revenue ($k)',
            data: [420, 580, 710, 890, 940, 1150],
            borderColor: '#3b82f6',
            borderWidth: 3,
            backgroundColor: gradient,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#60a5fa',
            pointBorderColor: '#0f172a',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          },
          {
            label: 'Target KPI ($k)',
            data: [400, 520, 650, 800, 900, 1050],
            borderColor: '#8b5cf6',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.4,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: { color: '#9ca3af', font: { size: 10, family: 'Inter' }, boxWidth: 12 }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#f3f4f6',
            bodyColor: '#60a5fa',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 10,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#6b7280', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#6b7280', font: { size: 10 } }
          }
        }
      }
    });
  }

  // Chart 2: Analytics Mix (Donut)
  if (canvasDonut) {
    const ctx = canvasDonut.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['BI & Dashboards', 'SQL Analytics', 'Python ETL', 'Predictive Modeling'],
        datasets: [{
          data: [40, 30, 20, 10],
          backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'],
          borderColor: '#0f172a',
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#f3f4f6',
            bodyColor: '#9ca3af'
          }
        }
      }
    });
  }
}

/**
 * Render Project Modal Dynamic Chart based on Project Type
 */
window.renderProjectModalChart = function(canvasId, projectKey) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || typeof Chart === 'undefined') return null;

  const ctx = canvas.getContext('2d');

  let config = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Performance Metric',
        data: [65, 78, 90, 85, 96, 112],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: '#3b82f6',
        borderWidth: 1,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#9ca3af', font: { size: 11 } } }
      },
      scales: {
        x: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } }
      }
    }
  };

  // Specific custom charts per project
  if (projectKey === 'sales') {
    config.type = 'line';
    config.data.labels = ['Region A', 'Region B', 'Region C', 'Region D', 'Region E'];
    config.data.datasets = [
      { label: 'YTD Sales ($K)', data: [340, 520, 480, 610, 750], borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.2)', fill: true, tension: 0.3 },
      { label: 'Target ($K)', data: [300, 450, 450, 550, 700], borderColor: '#f59e0b', borderDash: [4,4], fill: false }
    ];
  } else if (projectKey === 'customer') {
    config.type = 'bar';
    config.data.labels = ['Champions', 'Loyal', 'Potential', 'At-Risk', 'Lost'];
    config.data.datasets = [{
      label: 'Customer Count',
      data: [1240, 2890, 1850, 940, 420],
      backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#f59e0b', '#ef4444'],
      borderRadius: 8
    }];
  } else if (projectKey === 'ecommerce') {
    config.type = 'line';
    config.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
    config.data.datasets = [{
      label: 'Conversion Rate (%)',
      data: [2.1, 2.8, 3.4, 3.2, 4.1, 4.8],
      borderColor: '#38bdf8',
      backgroundColor: 'rgba(56, 189, 248, 0.25)',
      fill: true,
      tension: 0.4
    }];
  } else if (projectKey === 'finance') {
    config.type = 'bar';
    config.data.labels = ['Q1', 'Q2', 'Q3', 'Q4'];
    config.data.datasets = [
      { label: 'Revenue ($M)', data: [4.2, 5.1, 5.8, 6.7], backgroundColor: '#3b82f6' },
      { label: 'Expenses ($M)', data: [2.8, 3.1, 3.4, 3.9], backgroundColor: '#ef4444' },
      { label: 'Net Profit ($M)', data: [1.4, 2.0, 2.4, 2.8], backgroundColor: '#10b981' }
    ];
  } else if (projectKey === 'hr') {
    config.type = 'doughnut';
    config.data.labels = ['Engineering', 'Sales & Marketing', 'Operations', 'Finance', 'HR'];
    config.data.datasets = [{
      data: [35, 25, 20, 12, 8],
      backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'],
      borderColor: '#0f172a',
      borderWidth: 2
    }];
    config.options.cutout = '60%';
  } else if (projectKey === 'marketing') {
    config.type = 'bar';
    config.data.labels = ['Google Ads', 'LinkedIn', 'Email Mktg', 'SEO', 'Events'];
    config.data.datasets = [{
      label: 'ROI Multiplier (x)',
      data: [4.2, 3.8, 6.5, 5.1, 2.4],
      backgroundColor: 'rgba(139, 92, 246, 0.8)',
      borderColor: '#a78bfa',
      borderWidth: 1,
      borderRadius: 6
    }];
  }

  return new Chart(ctx, config);
};
