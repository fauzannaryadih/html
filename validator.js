function validname() {
    let errname = document.getElementById("error_name");
    errname.setAttribute('class', 'invalid-tooltip');

    let ok=true;
    regname = /^[a-zA-Z]{3,20}$/;
    if (!regname.test(document.getElementById("name").value))
    {
        ok=false;
        errname.setAttribute('class', 'invalid-tooltip was-validated'); 
        errname.innerHTML = "Tolong masukkan nama yang benar.";
    }
    return ok;

}
function validmail() {
    let erremail = document.getElementById("error_email");
    erremail.setAttribute('class', 'invalid-tooltip');
    regemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let ok=true;
    if (!regemail.test(document.getElementById("email").value))
    {
        ok=false;
        erremail.setAttribute('class', 'invalid-tooltip was-validated');
        erremail.innerHTML = "Tolong masukkan valid email.";
    }
    return ok;
}
function validtime() {
    let errtime = document.getElementById("error_time");
    errtime.setAttribute('class', 'invalid-tooltip');
    let ok=true;
    if (document.getElementById("time").value == " ") 
    {
    ok=false;
    errtime.setAttribute('class', 'invalid-tooltip was-validated');
    errtime.innerHTML = "Tolong ketik waktu keberangkatan.";
    }
    return ok;
}
function validdest() {
    let errdest = document.getElementById("error_dest");
    errdest.setAttribute('class', 'invalid-tooltip');
    let ok=true;
    regdest = /^[A-Za-z]+$/;
    if (!regdest.test(document.getElementById("dest").value)){
        ok=false;
        errdest.setAttribute('class', 'invalid-tooltip was-validated');
        errdest.innerHTML = "Tolong masukkan tujuan.";
    }
    return ok;
}
function validsum() {
    let errsum = document.getElementById("error_sum");
    errsum.setAttribute('class', 'invalid-tooltip');
    regsum = /^([1-9]|10)$/;
    let ok=true;
    if (!regsum.test(document.getElementById("sum-tkt").value)) 
    {
        ok=false;
        errsum.setAttribute('class', 'invalid-tooltip was-validated');
        errsum.innerHTML = "Tolong masukkan jumlah tiket 1-10.";
    }
    return ok;

}
function printing() {
    var vn = validname();
    var vm = validmail();
    var vt = validtime();
    var vd = validdest();
    var vs = validsum();
    var valname = document.getElementById("name").value;
    var valmail = document.getElementById("email").value;
    var valtime = document.getElementById("time").value;
    var valdest = document.getElementById("dest").value;
    var valsum = document.getElementById("sum-tkt").value;
    if ((valname && valmail && valtime && valdest && valsum) == null || (valname && valmail && valtime && valdest && valsum) == '') {
        vn;
        vm;
        vt;
        vd;
        vs;
        alert("Formulir tidak boleh kosong");
        return false;
    }
    else {
        document.getElementById("hehehe").innerHTML = ("<p>Nama Pelanggan</p>"+"<p>Email</p>"+"<p>Waktu keberangkatan</p>"+"<p>Tujuan</p>"+"<p>Jml Tiket</p>");
        document.getElementById("hahaha").innerHTML = ("<p>: "+valname+"</p>"+"<p>: "+valmail+"</p>"+"<p>: "+valtime+"</p>"+"<p>: "+valdest+"</p>"+"<p>: "+valsum+"</p>");
    }
}
