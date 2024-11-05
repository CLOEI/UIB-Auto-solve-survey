const start = async () => {
  while (true) {
    const surveyOptions = document.querySelectorAll("div.lin > label:nth-child(5)");
    if (surveyOptions.length > 0) {
      const nxtButton = document.querySelector("#btnnxt");
      const fnshButton = document.querySelector("#btnfinish");
      for (surveyOption of surveyOptions) {
        surveyOption.click();
      }
      if (fnshButton) {
        fnshButton.click();
        break;
      } else {
        nxtButton.click();
      }
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}

start()