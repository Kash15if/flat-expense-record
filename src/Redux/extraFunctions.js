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

      //console.log(kashVal);
      const newAmount = data[i].piadForBoth ? data[i].amount : data[i].amount;
      // : data[i].amount * 2;

      lineChartDaata[date] = {
        azarul: azVal,
        kashif: kashVal + newAmount,
      };

      pieActual = {
        ...pieActual,
        kashif: pieActual.kashif + newAmount,
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
      const newAmount = data[i].piadForBoth ? data[i].amount : data[i].amount;

      // : data[i].amount * 2;

      lineChartDaata[date] = {
        kashif: kashVal,
        azarul: azVal + newAmount,
      };

      pieActual = {
        ...pieActual,
        azarul: pieActual.azarul + newAmount,
      };
    }
  }

  // console.log(lineChartDaata);
  // console.log(pieActual);
  return {
    lineChartDaata,
    pieActual,
  };
};
