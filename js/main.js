let dasht = document.getElementsByTagName("table")[0];
let tr;
let td;
let xaxacox = "X";
let haxtox;

for (let i = 0; i < 3; i++) {
    tr = document.createElement("tr");
    dasht.appendChild(tr);
    for (let j = 0; j < 3; j++) {
        td = document.createElement("td");
        tr.appendChild(td);
        td.onclick = function(e) {
            if (e.target.textContent === "") { 
                e.target.textContent = xaxacox;
                if (xaxacox === "X") {
                    xaxacox = "O";  
                } else {
                    xaxacox = "X";  
                }
                haxtoxXaxacox();
            }
        };
    }
}

function haxtoxXaxacox() {
    let stugmanTox = dasht.getElementsByTagName("td");
    
    for (let i = 0; i < 3; i++) {
        if (stugmanTox[i * 3].textContent !== "" && 
            stugmanTox[i * 3].textContent === stugmanTox[i * 3 + 1].textContent &&
            stugmanTox[i * 3].textContent === stugmanTox[i * 3 + 2].textContent) {
            haxtox = stugmanTox[i * 3].textContent;
            alert(haxtox + " հաղթանակ");
            return;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (stugmanTox[i].textContent !== "" &&
            stugmanTox[i].textContent === stugmanTox[i + 3].textContent &&
            stugmanTox[i].textContent === stugmanTox[i + 6].textContent) {
            haxtox = stugmanTox[i].textContent;
            alert(haxtox + " հաղթանակ");
            return;
        }
    }

    if (stugmanTox[0].textContent !== "" && 
        stugmanTox[0].textContent === stugmanTox[4].textContent &&
        stugmanTox[0].textContent === stugmanTox[8].textContent) {
        haxtox = stugmanTox[0].textContent;
        alert(haxtox + " հաղթանակ");
        return;
    }

    if (stugmanTox[2].textContent !== "" && 
        stugmanTox[2].textContent === stugmanTox[4].textContent &&
        stugmanTox[2].textContent === stugmanTox[6].textContent) {
        haxtox = stugmanTox[2].textContent;
        alert(haxtox + " հաթտանակ");
        return;
    }
}


