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
        let d: any, h: any, m: any = undefined; 
        let leftover: number = 0; 

        if (difference <= 0) return "Now";

        if (difference >= 8.64e+7) {
            d = Math.floor(difference/8.64e+7);
            leftover = difference%8.64e+7;
        } else leftover = difference;
        
        if (leftover >= 3.6e+6) {
            h = Math.floor(leftover/3.6e+6);
            leftover %= 3.6e+6;
        } else leftover = leftover > 0 ? leftover : difference;
        
        m = Math.floor(leftover/60000);

        if (d) {
            if (h) return d + " day " + h + " hour ago";
            else return d + " day ago";
        } else {
            if (h && m) return h + " hour " + m + " min ago";
            else if (h) return h + " hour ago";
            else return m + " min ago";
        }
        
    }
}