// charts

// import { ChartDataLabels } from "chartjs-plugin-datalabels";
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// function to get color HEX value
const getColorHexValue = (className) => {
  const trimmedClassName = className.trim();
  const element = document.createElement('div');
  element.classList.add('hidden', trimmedClassName);
  document.body.appendChild(element);

  const computedStyle = window.getComputedStyle(element);
  const color = computedStyle.color;

  document.body.removeChild(element);

  return color;
};

if (document.querySelector("#chart-doughnut-1")) {
  const ctxs = document.querySelectorAll("#chart-doughnut-1");

  ctxs.forEach((ctx) => {
    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Sedan", "Sports Car", "SUV"],
        datasets: [
          {
            data: [15, 40,5],
            backgroundColor: [colors[0], colors[1], colors[2]],
            borderColor: "transparent",
            borderRadius: 10,
            spacing: -20,
            rotation: 0,
            weight: 10,
          },
        ],
      },
      options: {
        cutout: "75%",
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 13,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-line-1")) {
  const ctxs = document.querySelectorAll("#chart-line-1");

  ctxs.forEach((ctx) => {

    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["10.05 ", "10.06", "10.07", "10.08", "10.09", "10.10", "10.11"],
        datasets: [
          {
            label: "Phone Sales",
            data: [18, 22, 24, 19, 20, 25, 17],
            fill: 1,
            borderColor: colors[1],
            backgroundColor: colors[1],
            pointHoverBorderColor: colors[1],
            pointHoverBackgroundColor: colors[1],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
          },
          {
            label: "Phone Revenue",
            data: [8, 10, 12, 9, 14, 18, 8],
            fill: "origin",
            borderColor: colors[0],
            backgroundColor: colors[0],
            pointHoverBorderColor: colors[0],
            pointHoverBackgroundColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
          },
        ],

      },
      options: {
        elements: {
          point: {
            pointStyle: false,
          },
        },
        responsive: true,
        scales: {
          y: {
            ticks: {
              padding: 13,
              color: "#b5b0a1",
            },
            max: 35,
            grid: {
              drawTicks: false,
              color: "#eaeaea",
            },
            border: {
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            ticks: {
              color: "#b5b0a1",
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 13,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-line-2")) {
  const ctxs = document.querySelectorAll("#chart-line-2");

  ctxs.forEach((ctx) => {

    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    var gradientStroke1 = ctx.getContext("2d").createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(" + colors[0].slice(4, -1) + ", 0.1)");
    gradientStroke1.addColorStop(0.3, "rgba(" + colors[0].slice(4, -1) + ", 0.01)");
    gradientStroke1.addColorStop(0, "rgba(" + colors[0].slice(4, -1) + ", 0.05)");


    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07", "01.08", "01.09", "01.10", "01.11", "01.12"],
        datasets: [
          {
            label: "Revenue",
            data: [17500, 18800, 18100, 18200, 19500, 19300, 20500, 20000, 19200, 20100, 19800, 20400],
            fill: "origin",
            borderColor: colors[0],
            backgroundColor: gradientStroke1,
            pointBackgroundColor: colors[0],
            pointHoverBackgroundColor: colors[0],
            pointHoverBorderColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
          },
        ],
      },
      options: {
        elements: {
          point: {
            pointStyle: false,
          },
        },
        responsive: true,
        scales: {
          y: {
            ticks: {
              callback: function (value, index, ticks) {
                return "$" + value / 1000 + (value == 0 ? "" : "K");
              },
              padding: 13,
              color: "#b5b0a1",
            },
            max: 23000,
            grid: {
              drawTicks: false,
              color: "#eaeaea",
            },
            border: {
              showLine: false,
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            ticks: {
              callback: function (value, index, ticks) {
                return index % 3 === 0 ? this.getLabelForValue(value) : "";
              },
              padding: 13,
              color: "#b5b0a1",
            },
            border: {
              display: false,
              dash: [4, 4],
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 13,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-bar-1")) {
  const ctxs = document.querySelectorAll("#chart-bar-1");

  ctxs.forEach((ctx) => {

    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["10.01", "10.02", "10.03", "10.04", "10.05", "10.06", "10.07", "10.08", "10.09", "10.10", "10.11", "10.12"],
        datasets: [
          {
            label: "Subscribers",
            data: [20000, 23456, 26912, 30368, 33824, 37280, 40736, 44192, 47648, 51104, 54560, 58016],
            borderRadius: 4,
            borderColor: colors[0],
            backgroundColor: colors[0],
            pointBackgroundColor: "transparent",
            pointHoverBorderColor: "#4FC9DA",
            hoverBackgroundColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
          },
          {
            label: "Revenue",
            data: [90800, 99900, 109700, 119600, 129600, 139700, 149900, 160200, 170600, 181100, 191700, 202400],
            borderRadius: 4,
            borderColor: colors[1],
            backgroundColor: colors[1],
            pointBackgroundColor: "transparent",
            pointHoverBorderColor: "#968e7e33",
            hoverBackgroundColor: colors[1],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            stacked: true,
            ticks: {
              callback: function (value, index, ticks) {
                return "$" + value / 1000 + (value == 0 ? "" : "K");
              },
              padding: 13,
              color: "#b5b0a1",
            },
            grid: {
              drawTicks: false,
              color: "#eaeaea",
            },
            border: {
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            stacked: true,
            ticks: {
              color: "#b5b0a1",
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 13,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-bar-2")) {
  const ctxs = document.querySelectorAll("#chart-bar-2");

  ctxs.forEach((ctx) => {

    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07"],
        datasets: [
          {
            label: "AOV",
            data: [240, 260, 253, 245, 260, 345, 390],
            borderRadius: 6,
            barThickness: 12,
            borderColor: colors[0],
            backgroundColor: colors[0],
            pointBackgroundColor: "transparent",
            pointHoverBorderColor: colors[0],
            hoverBackgroundColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: -10,
          // autoPadding: false,
        },
        scales: {
          y: {
            stacked: true,
            ticks: {
              callback: function (value, index, ticks) {
                return value / 1000 + (value == 0 ? "" : "K");
              },
              display: false,
            },
            grid: {
              drawTicks: false,
              color: "#eaeaea",
              display: false,
            },
            border: {
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            stacked: true,
            ticks: {
              color: "#b5b0a1",
              display: false,
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 13,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-bar-3")) {
  const ctxs = document.querySelectorAll("#chart-bar-3");

  ctxs.forEach((ctx) => {

    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["10.01", "10.02", "10.03", "10.04", "10.05", "10.06", "10.07", "10.08"],
        datasets: [
          {
            label: "Sales",
            data: [42, 88, 61, 33, 27, 68, 92, 54],
            borderRadius: 6,
            barThickness: 12,
            borderColor: colors[0],
            backgroundColor: colors[0],
            pointBackgroundColor: "transparent",
            pointHoverBorderColor: colors[0],
            hoverBackgroundColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: -10,
          // autoPadding: false,
        },
        scales: {
          y: {
            stacked: true,
            ticks: {
              callback: function (value, index, ticks) {
                return value / 1000 + (value == 0 ? "" : "K");
              },
              display: false,
            },
            grid: {
              drawTicks: false,
              color: "#eaeaea",
              display: false,
            },
            border: {
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            stacked: true,
            ticks: {
              color: "#b5b0a1",
              display: false,
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 13,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-bar-sent")) {
  const ctxs = document.querySelectorAll("#chart-bar-sent");

  ctxs.forEach((ctx) => {

    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["10.01", "15.02", "20.02", "05.03", "26.03", "07.04", "16.04", "24.04", "15.05"],
        datasets: [
          {
            label: "Total Emails Sent",
            data: [75378, 71950, 74278, 68376, 68076, 62329, 65567, 64663, 68175],
            borderRadius: 6,
            barThickness: 20,
            fontSize: 8,
            borderColor: colors[0],
            backgroundColor: colors[0],
            pointBackgroundColor: "transparent",
            pointHoverBorderColor: "#968e7e33",
            hoverBackgroundColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            ticks: {
              callback: function (value, index, ticks) {
                return value / 1000 + (value == 0 ? "" : "K");
              },
              padding: 13,
              font: {
                size: 13,
                weight: 400,
              },
              color: "#b5b0a1",
            },
            grid: {
              drawTicks: false,
              color: "#eaeaea",
            },
            border: {
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            ticks: {
              color: "#b5b0a1",
              font: {
                size: 13,
                weight: 400,
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          datalabels: {
            align: "end",
            anchor: "end",
            color: "#211F1C",
            font: {
              size: 10,
              lineHeight: 1.2,
              weight: 400,
              family: "Inter, Helvetica, sans-serif",
            },
            formatter: function (value) {
              return value / 1000 + "K";
            },
          },
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 11,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
            callbacks: {
              label: function (context) {
                return context.dataset.label + ": " + context.parsed.y / 1000 + "K";
              },
            },
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-bar-open")) {
  const ctxs = document.querySelectorAll("#chart-bar-open");

  ctxs.forEach((ctx) => {

    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["10.01", "15.02", "20.02", "05.03", "26.03", "07.04", "16.04", "24.04", "15.05"],
        datasets: [
          {
            label: "Opened Emails",
            data: [16816, 13407, 20111, 20610, 18988, 16814, 14719, 13902, 14120],
            borderRadius: 6,
            barThickness: 20,
            borderColor: colors[0],
            backgroundColor: colors[0],
            pointBackgroundColor: "transparent",
            pointHoverBorderColor: "#968e7e33",
            hoverBackgroundColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
            datalabels: {
              align: "end",
              anchor: "end",
              color: "#211F1C",
              font: {
                size: 10,
                lineHeight: 1.2,
                weight: 400,
                family: "Inter, Helvetica, sans-serif",
              },
              formatter: function (value) {
                return value / 1000 + "K";
              },
            },
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            ticks: {
              callback: function (value, index, ticks) {
                return value / 1000 + (value == 0 ? "" : "K");
              },
              padding: 13,
              font: {
                size: 13,
                weight: 400,
              },
              color: "#b5b0a1",
            },
            grid: {
              drawTicks: false,
              color: "#eaeaea",
            },
            border: {
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            ticks: {
              color: "#b5b0a1",
              font: {
                size: 13,
                weight: 400,
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 11,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
            callbacks: {
              label: function (context) {
                return context.dataset.label + ": " + context.parsed.y / 1000 + "K";
              },
            },
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-bar-click")) {
  const ctxs = document.querySelectorAll("#chart-bar-click");

  ctxs.forEach((ctx) => {
    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["10.01", "15.02", "20.02", "05.03", "26.03", "07.04", "16.04", "24.04", "15.05"],
        datasets: [
          {
            label: "Emails Click",
            data: [4816, 4225, 3839, 4491, 3877, 4189, 4014, 3385, 3021],
            borderRadius: 6,
            barThickness: 20,
            borderColor: colors[0],
            backgroundColor: colors[0],
            pointBackgroundColor: "transparent",
            pointHoverBorderColor: "#968e7e33",
            hoverBackgroundColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
            datalabels: {
              align: "end",
              anchor: "end",
              color: "#211F1C",
              font: {
                size: 10,
                lineHeight: 1.2,
                weight: 400,
                family: "Inter, Helvetica, sans-serif",
              },
              formatter: function (value) {
                return value / 1000 + "K";
              },
            },
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            ticks: {
              callback: function (value, index, ticks) {
                return value / 1000 + (value == 0 ? "" : "K");
              },
              padding: 13,
              font: {
                size: 13,
                weight: 400,
              },
              color: "#b5b0a1",
            },
            min: 0,
            grid: {
              drawTicks: false,
              color: "#eaeaea",
            },
            border: {
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            ticks: {
              color: "#b5b0a1",
              font: {
                size: 13,
                weight: 400,
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 11,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
            callbacks: {
              label: function (context) {
                return context.dataset.label + ": " + context.parsed.y / 1000 + "K";
              },
            },
          },
        },
      },
    });
  });
}

if (document.querySelector("#chart-bar-bounce")) {
  const ctxs = document.querySelectorAll("#chart-bar-bounce");

  ctxs.forEach((ctx) => {

    const dataColor = ctx.getAttribute('data-color');
    const classes = dataColor.split(',');

    const colors = classes.map((className) => getColorHexValue(className));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["10.01", "15.02", "20.02", "05.03", "26.03", "07.04", "16.04", "24.04", "15.05"],
        datasets: [
          {
            label: "Emails Bounce",
            data: [5772, 5304, 5061, 5173, 4593, 4733, 4235, 4133, 3947],
            borderRadius: 6,
            barThickness: 20,
            borderColor: colors[0],
            backgroundColor: colors[0],
            pointBackgroundColor: "transparent",
            pointHoverBorderColor: "#968e7e33",
            hoverBackgroundColor: colors[0],
            pointBorderWidth: 8,
            pointBorderColor: "transparent",
            cubicInterpolationMode: "monotone",
            datalabels: {
              align: "end",
              anchor: "end",
              color: "#211F1C",
              font: {
                size: 10,
                lineHeight: 1.2,
                weight: 400,
                family: "Inter, Helvetica, sans-serif",
              },
              formatter: function (value) {
                return value / 1000 + "K";
              },
            },
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            ticks: {
              callback: function (value, index, ticks) {
                return value / 1000 + (value == 0 ? "" : "K");
              },
              padding: 13,
              font: {
                size: 13,
                weight: 400,
              },
              color: "#b5b0a1",
            },
            min: 0,
            grid: {
              drawTicks: false,
              color: "#eaeaea",
            },
            border: {
              display: false,
              dash: [4, 4],
            },
          },
          x: {
            ticks: {
              color: "#b5b0a1",
              font: {
                size: 13,
                weight: 400,
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Doughnut Chart",
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#211F1C",
            bodyColor: "#211F1C",
            titleFont: {
              size: 13,
              weight: 400,
              lineHeight: 1.5,
            },
            bodyFont: {
              size: 11,
            },
            padding: 13,
            cornerRadius: 12,
            boxPadding: 6,
            callbacks: {
              label: function (context) {
                return context.dataset.label + ": " + context.parsed.y / 1000 + "K";
              },
            },
          },
        },
      },
    });
  });
}
// end charts

// close dropdown on click event outside of it
function closeDropdownMenus(event) {
  const dropdownButtons = document.querySelectorAll("[dropdown-trigger]");
  const dropdownMenus = document.querySelectorAll("[dropdown-menu]");

  for (let i = 0; i < dropdownButtons.length; i++) {
    const dropdownButton = dropdownButtons[i];
    const dropdownMenu = dropdownMenus[i];

    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownButton.classList.remove("open");
    }
  }
}
document.addEventListener("click", closeDropdownMenus);
// end dropdown close on click event outside of it

// countTo plugin initialization
if (document.querySelector("[countTo]")) {
  let numbers = document.querySelectorAll("[countTo]");

  numbers.forEach((number) => {
    let ID = number.getAttribute("id");
    let value = number.getAttribute("countTo");
    const countUp = new CountUp(ID, value);

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
      number.innerHTML = value;
    }
  });
}
// end count to plugin initialization

// nav-tabs init
if (document.querySelector("[nav-tabs]")) {
  let navTabs = document.querySelectorAll("[nav-tabs]");

  navTabs.forEach((navTab) => {
    let tabs = navTab.querySelectorAll("[aria-controls]");
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        let aria = tab.getAttribute("aria-controls");
        let group = tab.closest("[nav-tabs]");
        group.classList.forEach((className) => {
          if (className.startsWith("active-")) {
            group.classList.remove(className);
          }
        });
        group.classList.add("active-" + aria);
      });
    });
  });
}

// navbar active
if (document.querySelector(".group\\/sidebar")) {
  let sidebars = document.querySelectorAll(".group\\/sidebar");
  sidebars.forEach((sidebar) => {
    let links = sidebar.querySelectorAll("a[aria-controls]");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        let thisMenuGroup = link.closest("[menuItem].group");
        let menuGroups = sidebar.querySelectorAll("[menuItem].group");
        menuGroups.forEach((menuGroup) => {
          menuGroup.classList.remove("here");
        });

        thisMenuGroup.classList.add("here");

        let submenuGroups = sidebar.querySelectorAll("[submenuItem].group\\/submenu");
        submenuGroups.forEach((submenuGroup) => {
          submenuGroup.classList.remove("here");
        });
        let subsubmenuGroups = sidebar.querySelectorAll("[subsubmenuItem].group\\/subsubmenu");
        subsubmenuGroups.forEach((subsubmenuGroup) => {
          subsubmenuGroup.classList.remove("here");
        });

        if (link.classList.contains("group/submenu2")) {
          let thisSubMenuGroup = link.closest("[submenuItem].group\\/submenu");
          thisSubMenuGroup.classList.add("here");
        }
        if (link.classList.contains("group/submenu3")) {
          let thisSubMenuGroup = link.closest("[submenuItem].group\\/submenu");
          thisSubMenuGroup.classList.add("here");
          let thisSubsubMenuGroup = link.closest("[subsubmenuItem].group\\/subsubmenu");
          thisSubsubMenuGroup.classList.add("here");
        }

        let aria = link.getAttribute("aria-controls");
        sidebar.classList.forEach((className) => {
          if (className.startsWith("active-")) {
            sidebar.classList.remove(className);
          }
        });
        sidebar.classList.add("active-" + aria);
      });
    });
  });
}

// check for sidebar duplicate aria-controls values

// if (document.querySelector(".group\\/sidebar [aria-controls]")) {
//   const elements = document.querySelectorAll("[aria-controls]");
//   const ariaControlsValues = [];
//   const duplicateValues = [];

//   elements.forEach((element) => {
//     const ariaControlsValue = element.getAttribute("aria-controls");

//     if (ariaControlsValues.includes(ariaControlsValue)) {
//       if (!duplicateValues.includes(ariaControlsValue)) {
//         duplicateValues.push(ariaControlsValue);
//       }
//     } else {
//       ariaControlsValues.push(ariaControlsValue);
//     }
//   });

//   if (duplicateValues.length > 0) {
//     console.log("Duplicate aria-controls values found:");
//     duplicateValues.forEach((value) => {
//       console.log(value);
//     });
//   } else {
//     console.log("No duplicate aria-controls values found.");
//   }
// }

// sidebar open/close nested menus
function toggleSidebarMenu(event) {
  let selectedItem = event.target.closest("[menuItem].group");
  let items = selectedItem.closest(".group\\/sidebar").querySelectorAll("[menuItem].group");
  if (selectedItem.classList.contains("open")) {
    selectedItem.classList.remove("open");
  } else {
    items.forEach((item) => {
      item.classList.remove("open");
    });
    selectedItem.classList.add("open");
  }
}
// sidebar open/close nested2 menus
function toggleSidebarSubmenu(event) {
  let selectedItem = event.target.closest("[submenuItem].group\\/submenu");
  let items = selectedItem.closest("[menuItem].group").querySelectorAll("[submenuItem].group\\/submenu");
  if (selectedItem.classList.contains("open")) {
    selectedItem.classList.remove("open");
  } else {
    items.forEach((item) => {
      item.classList.remove("open");
    });
    selectedItem.classList.add("open");
  }
}
// sidebar open/close nested3 menus
function toggleSidebarSubsubmenu(event) {
  let selectedItem = event.target.closest("[subsubmenuItem].group\\/subsubmenu");
  let items = selectedItem.closest("[submenuItem].group\\/submenu").querySelectorAll("[subsubmenuItem].group\\/subsubmenu");
  if (selectedItem.classList.contains("open")) {
    selectedItem.classList.remove("open");
  } else {
    items.forEach((item) => {
      item.classList.remove("open");
    });
    selectedItem.classList.add("open");
  }
}

window.toggleSidebarMenu = toggleSidebarMenu;
window.toggleSidebarSubmenu = toggleSidebarSubmenu;
window.toggleSidebarSubsubmenu = toggleSidebarSubsubmenu;

// table filter
if (document.querySelector("[choices-filter-table]")) {
  let choicesFilterTables = document.querySelectorAll("[choices-filter-table]");
  choicesFilterTables.forEach((choicesFilterTable) => {
    let table = document.querySelector('[aria-describedby="' + choicesFilterTable.getAttribute("choices-filter-table") + '"]');
    let filter = choicesFilterTable.getAttribute("filter");
    choicesFilterTable.addEventListener("change", function (event) {
      table.classList.forEach((className) => {
        if (className.startsWith(filter + "-")) {
          table.classList.remove(className);
        }
      });
      table.classList.add(filter + "-" + event.target.value);
      if (table.hasAttribute("nested-table")) {
        let rows = table.querySelectorAll("tr[aria-controls]");
        rows.forEach((row) => {
          row.classList.remove("open");
        });
      }
    });
  });
}

// floating UI

if (document.querySelector(".group\\/sidebar-menu")) {
  let sidebarMenus = document.querySelectorAll("[sidebar-trigger]");
  sidebarMenus.forEach((sidebarMenu) => {
    let trigger = sidebarMenu;
    let menu = sidebarMenu.querySelector("[sidebar-menu=" + sidebarMenu.getAttribute("sidebar-trigger") + "]");

    autoUpdate(trigger, menu, () => {
      computePosition(trigger, menu, {
        strategy: 'fixed',
        placement: "right-start",
        middleware: [
          shift({
            padding: 5,
          }),
        ],
      }).then(({ x, y }) => {
        Object.assign(menu.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    });
  });
}
