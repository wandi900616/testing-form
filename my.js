function testGS(){

    const url="https://script.google.com/macros/s/AKfycbxyFMN1OYrsyv8PzCpoCjIScl7-4VXM5uAxpF0kyiDMKxYqsurJ/exec"
    fetch(url).then(
        d=>d.json())
        .then(d=>{
            document.getElementById("app").textContent=d[0].status;
        });
    
}

document.getElementById("btn").addEventListener("click",testGS)