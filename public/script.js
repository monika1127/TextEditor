
const output = document.getElementById("output");
const buttons = document.querySelectorAll(".edit_button");

const saveButton = document.querySelector("#save_btn");
const importButton = document.querySelector("#import_btn");

const editText = (event) => {
  const editType = event.currentTarget.id;
  document.execCommand(editType, false, null);
};

const saveText = (e) => {
  console.log(e.target.id);
};

const importText = (e) => {

};

buttons.forEach((button) =>
  button.addEventListener("click", (e) => editText(e))
);
saveButton.addEventListener("click", (e) => saveText(e));
importButton.addEventListener("click", (e) => importText(e));
