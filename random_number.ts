function min_max() {
    let input_min: HTMLInputElement = <HTMLInputElement>document.getElementById("min");
    let min: number = Number(input_min.value);

    let input_max: HTMLInputElement = <HTMLInputElement>document.getElementById("max");
    let max: number = Number(input_max.value);

    if (min > max) {
        alert('Không hợp lệ. Vui lòng nhập lại Min và Max!');
    }
    else { 
        let random: number = Math.floor(Math.random() * (max - min +1)) + min;

        let p: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
        p.innerHTML = String(random);
    }
}