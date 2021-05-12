const output = document.getElementById('output');
const buttons = document.querySelectorAll('.edit_button');

const editText = (event)=>{
    const editType= event.currentTarget.id
    document.execCommand(editType, false, null)
}

buttons.forEach(button => button.addEventListener('click', (e) => editText(e)))
