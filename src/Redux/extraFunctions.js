export const getChartData = (dataFromDb) => {
  let lineChartDaata = {};
  let pieActual = {
    kashif: 0,
    azarul: 0,
  };

  let data = dataFromDb;

  for (let i = 0; i < data.length; i++) {
    const date = data[i].date;
    const innerData = lineChartDaata[date];

    if (data[i].paidBy === "kashif") {
      let azVal =
        date in lineChartDaata && "azarul" in lineChartDaata[date]
          ? innerData.azarul
          : 0;
      let kashVal =
        date in lineChartDaata && "kashif" in lineChartDaata[date]
          ? innerData.kashif
          : 0;

      lineChartDaata[date] = {
        azarul: azVal,
        kashif: kashVal + data[i].amount,
      };

      pieActual = {
        ...pieActual,
        kashif: pieActual.kashif + data[i].amount,
      };
    } else {
      let azVal =
        date in lineChartDaata && "azarul" in lineChartDaata[date]
          ? innerData.azarul
          : 0;
      let kashVal =
        date in lineChartDaata && "kashif" in lineChartDaata[date]
          ? innerData.kashif
          : 0;

      lineChartDaata[date] = {
        kashif: kashVal,
        azarul: azVal + data[i].amount,
      };

      pieActual = {
        ...pieActual,
        azarul: pieActual.azarul + data[i].amount,
      };
    }

    return {
      lineChartDaata,
      pieActual,
    };
  }
};
