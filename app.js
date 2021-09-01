let billAmount = document.querySelector("#bill-input").value;
const billAmountValue = document.querySelector("#bill-input");
const tip5 = document.querySelector(".tip5");
const tip10 = document.querySelector(".tip10");
const tip15 = document.querySelector(".tip15");
const tip25 = document.querySelector(".tip25");
const tip50 = document.querySelector(".tip50");

const tipCustom = document.querySelector(".custom");
let peopleNum = document.querySelector("#people-num").value;
const peopleNumValue = document.querySelector("#people-num");

const tipAmount = document.querySelector(".tip");
const TipTotal = document.querySelector(".amount");

const resetBtn = document.querySelector(".reset");

console.log(peopleNumValue.value);

function showBillPerson() {
  let totalValuePerson = Math.round(
    billAmountValue.value / peopleNumValue.value
  ).toFixed(2);
  TipTotal.innerHTML = totalValuePerson;
}

tip5.addEventListener("click", () => {
  let tipAmountPerson =
    parseInt(billAmountValue.value * 0.05) / peopleNumValue.value;
  tipAmount.innerHTML = tipAmountPerson.toFixed(2);
  console.log(tipAmountPerson);
});
tip10.addEventListener("click", () => {
  let tipAmountPerson =
    parseInt(billAmountValue.value * 0.1) / peopleNumValue.value;
  tipAmount.innerHTML = tipAmountPerson.toFixed(2);
  console.log(tipAmountPerson);
});
tip15.addEventListener("click", () => {
  let tipAmountPerson =
    parseInt(billAmountValue.value * 0.15) / peopleNumValue.value;
  tipAmount.innerHTML = tipAmountPerson.toFixed(2);
  console.log(tipAmountPerson);
});
tip25.addEventListener("click", () => {
  let tipAmountPerson =
    parseInt(billAmountValue.value * 0.25) / peopleNumValue.value;
  tipAmount.innerHTML = tipAmountPerson.toFixed(2);
  console.log(tipAmountPerson);
});
tip50.addEventListener("click", () => {
  let tipAmountPerson =
    parseInt(billAmountValue.value * 0.5) / peopleNumValue.value;
  tipAmount.innerHTML = tipAmountPerson.toFixed(2);
  console.log(tipAmountPerson);
});

tipCustom.addEventListener("change", () => {
  let tipAmountPerson =
    parseInt(billAmountValue.value * (tipCustom.value / 100)) /
    peopleNumValue.value;
  tipAmount.innerHTML = tipAmountPerson.toFixed(2);
});

billAmountValue.addEventListener("change", () => {
  let totalValuePerson = (billAmountValue.value / peopleNumValue.value).toFixed(
    2
  );
  TipTotal.innerHTML = totalValuePerson;
});
peopleNumValue.addEventListener("change", () => {
  let totalValuePerson = (billAmountValue.value / peopleNumValue.value).toFixed(
    2
  );
  TipTotal.innerHTML = totalValuePerson;
});

resetBtn.addEventListener("click", () => {
  TipTotal.innerHTML = 0;
  tipAmount.innerHTML = 0;
  document.querySelector("#bill-input").value = "";
  document.querySelector("#people-num").value = "";
  document.querySelector(".custom").value = "";
});
