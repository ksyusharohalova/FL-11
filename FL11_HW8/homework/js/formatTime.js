function formatTime(result) {
    let day = parseInt(result/1440);
    let hour = parseInt(result/60%24);
    let minute = parseInt(result%60 );
    return day + ` day(s) ` + hour + ` hour(s) ` + minute + ` minute(s) `;
}
formatTime(3601);
