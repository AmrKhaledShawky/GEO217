const $ = (id) => document.getElementById(id);

const menuToggle = $("menuToggle");
const mainNav = $("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

function calculate() {
  const watts = Number($("power").value);
  const hours = Number($("hours").value);
  const days = Number($("days").value);
  const reduction = Number($("reduction").value);
  const error = $("calcError");
  if (!Number.isFinite(watts) || watts <= 0 || watts > 100000 ||
      !Number.isFinite(hours) || hours < 0 || hours > 24 ||
      !Number.isFinite(days) || days < 1 || days > 366 ||
      !Number.isFinite(reduction) || reduction < 0 || reduction > 100) {
    error.textContent = "Please enter valid values within the indicated limits.";
    return;
  }
  error.textContent = "";
  const energy = (watts / 1000) * hours * days;
  const reduced = energy * (1 - reduction / 100);
  const saved = energy - reduced;
  $("energyResult").textContent = energy.toFixed(2);
  $("reducedResult").innerHTML = `${reduced.toFixed(2)} <small>kWh</small>`;
  $("savedResult").innerHTML = `${saved.toFixed(2)} <small>kWh</small>`;
  const appliance = $("appliance").value.trim() || "Appliance";
  $("applianceResult").textContent = `${appliance} · over ${days} day${days === 1 ? "" : "s"}`;
  const max = Math.max(energy, 0.01);
  $("currentBar").style.width = "100%";
  $("reducedBar").style.width = `${Math.max(0, (reduced / max) * 100)}%`;
}
$("calculateBtn").addEventListener("click", calculate);
["power", "hours", "days", "reduction", "appliance"].forEach(id => {
  $(id).addEventListener("input", () => { if (!$("calcError").textContent) calculate(); });
});
calculate();

const surveyForm = $("surveyForm");
const surveyFields = [...surveyForm.querySelectorAll("fieldset")];
function updateSurveyProgress() {
  const answered = surveyFields.filter(field => field.querySelector("input:checked")).length;
  $("surveyProgress").style.width = `${Math.max(1, answered) / 3 * 100}%`;
  $("progressText").textContent = `QUESTION ${Math.min(answered + 1, 3)} OF 3${answered === 3 ? " · READY TO SUBMIT" : ""}`;
}
surveyForm.addEventListener("change", updateSurveyProgress);
surveyForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!surveyForm.reportValidity()) return;
  const answers = Object.fromEntries(new FormData(surveyForm).entries());
  $("surveyMessage").textContent = "Thanks for sharing! This demo does not send or store answers. Connect a Google Form to collect real responses.";
  console.info("PowerWise Campus demo survey answers (local only):", answers);
  updateSurveyProgress();
});
