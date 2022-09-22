function vacation(people, type, day) {

    let totalPrice = 0

    if (type === "Students") {
        if (day === "Friday") {
            totalPrice=8.45*people
        } else if (day === "Saturday") {
            totalPrice=9.80*people
        } else if (day === "Sunday") {
            totalPrice=10.46*people
        }if(people>=30){
            totalPrice=totalPrice*0.85}
    } else if (type === "Business") {
        if(people>=100){
            people-=10
        if (day === "Friday") {
            totalPrice=10.90*people
        } else if (day === "Saturday") {
            totalPrice=15.60*people
        } else if (day === "Sunday") {
            totalPrice=16*people
        }}
    } else if (type === "Regular") {
        if (day === "Friday") {
            totalPrice=15*people
        } else if (day === "Saturday") {
            totalPrice=20*people
        } else if (day === "Sunday") {
            totalPrice=22.50*people
        }if(people>=10 && people<=20){
            totalPrice*=0.95}
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,"Students","Sunday")
vacation(40,"Regular","Saturday")
vacation(111,"Business","Saturday")