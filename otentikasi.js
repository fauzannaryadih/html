function validate() {
  var username = document.getElementById("username").value; 
  var password = document.getElementById("password").value;
  if (username == "kreasinurulfikri.fauzanaryadih" && password == "nurulfikri") {
      location.href = "success.html";
  }
  else if (username == null || username == "" && password == null || password == "") {
    alert("Masukkan username dan password.");
  }
  else {
      alert ("Username atau password yang anda masukkan salah");
  }

}
