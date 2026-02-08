const copyButton = document.getElementById("copy");
const promptField = document.getElementById("prompt");
const status = document.getElementById("status");

const showStatus = (message) => {
  status.textContent = message;
  window.setTimeout(() => {
    status.textContent = "";
  }, 2000);
};

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(promptField.value.trim());
    showStatus("Prompt copied. Paste it into Perchance.");
  } catch (error) {
    showStatus("Copy failed. Select the text manually.");
  }
});
