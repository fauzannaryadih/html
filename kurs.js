function convert() {
    y = document.getElementById("select").value;
    return y;
}
function kurs() {
    y = convert();
    x = document.getElementById("input").value;
    if (x == "") {
        document.getElementById("output").value = "";
    }
    else {
        switch(y) {
            case "none" :
                document.getElementById("output").value = 0;
                break;
            case "USD" :
                var ubah = x * 9915;
                var format = ubah.toString().split('').reverse().join('');
                var konv = format.match(/\d{1,3}/g);
                var rupiah = 'Rp ' + konv.join('.').split('').reverse().join('');
                document.getElementById("output").value = rupiah;
                break;
            case "SGD" :
                var ubah = x * 13472;
                var format = ubah.toString().split('').reverse().join('');
                var konv = format.match(/\d{1,3}/g);
                var rupiah = 'Rp ' + konv.join('.').split('').reverse().join('');
                document.getElementById("output").value = rupiah;
                break;
            case "MYR" :
                var ubah = x * 874;
                var format = ubah.toString().split('').reverse().join('');
                var konv = format.match(/\d{1,3}/g);
                var rupiah = 'Rp ' + konv.join('.').split('').reverse().join('');
                document.getElementById("output").value = rupiah;
                break;
            case "JPY" :
                var ubah = x * 120;
                var format = ubah.toString().split('').reverse().join('');
                var konv = format.match(/\d{1,3}/g);
                var rupiah = 'Rp ' + konv.join('.').split('').reverse().join('');
                document.getElementById("output").value = rupiah;
                break;
            case "EUR" :
                var ubah = x * 15888;
                var format = ubah.toString().split('').reverse().join('');
                var konv = format.match(/\d{1,3}/g);
                var rupiah = 'Rp ' + konv.join('.').split('').reverse().join('');
                document.getElementById("output").value = rupiah;
                break;
            case "SAR" :
                var ubah = x * 3592;
                var format = ubah.toString().split('').reverse().join('');
                var konv = format.match(/\d{1,3}/g);
                var rupiah = 'Rp ' + konv.join('.').split('').reverse().join('');
                document.getElementById("output").value = rupiah;
                break;
        }
    }
}