export class NumberFormatter {

    thousandSeparator(number:any) {
        if (!number) return 0;
        number = number.toString().split("").reverse();
        const output:string[] = [];
        for (let i in number) {
            let n = number[i];
            output.push(n);
            if ((Number(i)+1)%3 === 0 && Number(i)+1 !== number.length) {
            output.push(',');
            }
        }
        return output.reverse().join("");
    }
}