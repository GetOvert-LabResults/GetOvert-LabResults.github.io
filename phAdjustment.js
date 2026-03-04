const btnEl = document.getElementById("btn");
const lacticInputEl = document.getElementById("lactic-result");

function calculateAddition() {
  const currentPhValue = document.getElementById("currentPh").value;
  const targetPhValue = document.getElementById("targetPh").value;
  const grainKgValue = document.getElementById("grainLbs").value * 0.45359237;
  const molarContentValue = document.getElementById("molarContent").value;
  // protons required to move a wort made with 1 kg of malt 1.0 pH
  const protons = 30.262;
  const pHdiff = currentPhValue - targetPhValue;
  const mLValue = (grainKgValue * protons) * pHdiff / molarContentValue;
  const roundedValue = Math.round(mLValue);

  lacticInputEl.value = roundedValue;
}
btnEl.addEventListener("click", calculateAddition);
