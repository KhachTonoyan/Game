export const getDate = () =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let d = today.getDate();
    let mo = today.getMonth();
    const time = (h >= 10 ? h : "0" + h)
        + ":" + (m >= 10 ? m : "0" + m)
        + "; " + (d >= 10 ? d : "0" + d)
        + " " + monthNames[mo]
        + " " + today.getFullYear();
    return time
}

export const myFetch = (name) => (
    fetch("https://starnavi-frontend-test-task.herokuapp.com/winners",{
        method:"POST",
        headers:{'Content-Type': 'application/json;charset=utf-8'},
        body:JSON.stringify({winner:name || "Computer",date:getDate()})
    })
        .then(winnersData => winnersData.json())
)