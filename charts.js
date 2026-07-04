const registrationCtx = document.getElementById('registrationChart');
new Chart(registrationCtx, {
  type: 'pie',
  data: {
    labels: ['Open', 'Closed', 'Full'],
    datasets: [{
      label: 'Registration Status',
      data: [14, 6, 5],
      backgroundColor: ['#4CAF50', '#F44336', '#FFC107']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

const formatCtx = document.getElementById('formatChart');
new Chart(formatCtx, {
  type: 'doughnut',
  data: {
    labels: ['In-person', 'Online', 'Hybrid'],
    datasets: [{
      label: 'Event Format',
      data: [12, 5, 8],
      backgroundColor: ['#3B82F6', '#A855F7', '#22C55E']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

const attendanceCtx = document.getElementById('attendanceChart');
new Chart(attendanceCtx, {
  type: 'bar',
  data: {
    labels: ['Animusika', 'TechTalks', 'Career Fair', 'Sportsfest', 'Org Bazaar'],
    datasets: [
      {
        label: 'Interested',
        data: [120, 80, 95, 150, 60],
        backgroundColor: '#1E7145'
      },
      {
        label: 'Attended',
        data: [90, 55, 70, 130, 40],
        backgroundColor: '#F4B400'
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true }
    },
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});