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

export class DateFormatter {

    humanDate(timestamp:number) {
        return new Date(timestamp * 1000).toDateString();
    }

    distanceDay(timestamp:number) {
        let difference = Date.now() - (timestamp * 1000);
        if (difference <= 0) return "Now";
        if (difference < 86400) return Math.floor(difference / 3600) + " minute ago";
        return Math.floor(difference / 86400) + " day ago";
    }
}