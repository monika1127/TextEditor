const output = document.getElementById("output");
const buttons = document.querySelectorAll(".edit_button");

const saveButton = document.querySelector("#save_btn");
const importButton = document.querySelector("#import_btn");

const editText = (event) => {
  const editType = event.currentTarget.id;
  document.execCommand(editType, false, null);
};

const saveText = () => {
  fetch("http://localhost:3000/export", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ html: output.innerHTML }),
  });
};

const importText = () => {
  fetch("http://localhost:3000/import")
    .then((response) => response.json())
    .then((data) => {
      output.innerHTML = data.html;
    });
};

buttons.forEach((button) =>
  button.addEventListener("click", (e) => editText(e))
);
saveButton.addEventListener("click", saveText);
importButton.addEventListener("click", importText);
