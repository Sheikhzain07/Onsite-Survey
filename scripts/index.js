document.getElementById("form").addEventListener("submit", userDetail);

function userDetail() {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let code = document.getElementById("code").value;
  console.log(email);
  localStorage.setItem("emailKey", email);
  localStorage.setItem("numberKey", number);
  localStorage.setItem("codeKey", code);
  //   <a href="./description/description.html"></a>;
  window.location.href = "./description/description.html";
}
