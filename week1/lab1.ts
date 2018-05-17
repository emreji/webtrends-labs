function dateToString() : string{
    return Date.now().toLocaleString();
}



function dateString() : string {
    let datenow : string = Date.now().toLocaleString();
    return datenow;
}

console.log(dateString());