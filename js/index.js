const sendBtn = document.getElementById('sendBtn');
const massageIn = document.getElementById('massageIn');
const massageOut = document.getElementById('massageOut');

sendBtn.addEventListener('click', () => {
  let content = massageIn.value;
  // console.log(content);
  if (content === '') {
    swal("Oops!", "Double Check Your Massage.", "error");
  } else {
    massageOut.innerHTML = content;
    massageIn.value = '';
  }
});