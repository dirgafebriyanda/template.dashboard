document.addEventListener("DOMContentLoaded", function () {
  // 📈 Line chart: Monthly sales (USD)
  var options = {
    chart: {
      type: "line",
      foreColor: "#9CA3AF",
    },
    series: [
      {
        name: "Sales",
        data: [1250, 980, 3100, 2450, 860, 5200, 1430, 670, 3580, 2950],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  // 🍩 Donut chart: Order status summary
  var options = {
    series: [5, 3, 1, 1],
    labels: ["Paid", "Pending", "Overdue", "Canceled"],
    chart: {
      type: "donut",
      foreColor: "#9CA3AF",
    },
    colors: ["#10B981", "#F59E0B", "#EF4444", "#9CA3AF"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(document.querySelector("#chart-donut"), options);
  chart.render();

  // 💰 Sparkline: Earnings growth
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#49BEFF",
        data: [670, 460, 510, 490, 560, 610, 400],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };

  new ApexCharts(document.querySelector("#earning"), earning).render();
});
