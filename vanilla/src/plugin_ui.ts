// webf.methodChannel.addMethodCallHandler("helloworld", (args) => {
//   // expect(args).toEqual(['abc', 1234, null, /* undefined will be converted to */ null, [], true, false, {name: 1}]);
//   return "from helloworld" + args[0];
// });

const assetsInput = document.getElementById("assets-input") as HTMLInputElement;
const pvalInput = document.getElementById("pval-input") as HTMLInputElement;
const pricesInput = document.getElementById("prices-input") as HTMLInputElement;
const pricesList = document.getElementById("prices-list") as HTMLInputElement;
const weightsInput = document.getElementById(
  "weights-input"
) as HTMLInputElement;
const weightsList = document.getElementById("weights-list") as HTMLInputElement;
const calculateButton = document.getElementById(
  "calculate-button"
) as HTMLInputElement;
const results = document.getElementById("results") as HTMLInputElement;

let assets;
let pVal;
let prices: string[] = [];
let weights: string[] = [];

const showResults = () => {
  results.innerHTML = JSON.stringify({
    assets,
    assetsPrices: prices,
    assetsWeights: weights,
    portfolioValue: pVal,
  });
};

assetsInput?.addEventListener("change", (e) => {
  assets = assetsInput.value;
  showResults();
});

pvalInput?.addEventListener("change", (e) => {
  pVal = pvalInput.value;
  showResults();
});

pricesInput?.addEventListener("change", (e) => {
  const price = pricesInput.value;
  prices.push(price);
  const span = document.createElement("span");
  span.textContent = price;
  pricesList.appendChild(span);
  showResults();
});

weightsInput?.addEventListener("change", (e) => {
  const weight = weightsInput.value;
  weights.push(weight);
  const span = document.createElement("span");
  span.textContent = weight;
  weightsList.appendChild(span);
  showResults();
});

calculateButton?.addEventListener("click", async () => {
  showResults();
  // //   let result = await webf.methodChannel.invokeMethod(
  // //     "helloworld",
  // //     "abc",
  // //     1234,
  // //     null,
  // //     undefined,
  // //     [],
  // //     true,
  // //     false,
  // //     { name: 1 }
  // //   );
  //   results.innerHTML = JSON.stringify(result);
});
