function min_max() {
    var input_min = document.getElementById("min");
    var min = Number(input_min.value);
    var input_max = document.getElementById("max");
    var max = Number(input_max.value);
    if (min > max) {
        alert('Không hợp lệ. Vui lòng nhập lại Min và Max!');
    }
    else {
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        var p = document.getElementById("result");
        p.innerHTML = String(random);
    }
}
