module.exports = generatehtml =(teamArr)=>{
    let HTML = ""
    for (let i=0;i<teamArr.length;i++){
        if(teamArr[i].getRole() === "Manager"){
            HTML += `
            <div class="card" style="width: 18rem;">
            <h2 class="card-title">Name:${teamArr[i].name}</h2>
            <h3 class="card-subtitle">Role:${teamArr[i].getRole()}</h3>
            <p class="card-text">Id:${teamArr[i].ID}</p>
            <p class="card-text">Email:${teamArr[i].email}</p>
            <p class="card-text">Office Number:${teamArr[i].officeNumber}</p>
            </div>`
        } else if (teamArr[i].getRole() === "Engineer"){
            HTML += `
            <div class="card" style="width: 18rem;">
            <h2 class="card-title">Name:${teamArr[i].name}</h2>
            <h3 class="card-subtitle">Role:${teamArr[i].getRole()}</h3>
            <p class="card-text">Id:${teamArr[i].ID}</p>
            <p class="card-text">Email:${teamArr[i].email}</p>
            <p class="card-text">Github:${teamArr[i].github}</p>
            </div>`
        } else if (teamArr[i].getRole() === "Intern"){
            HTML += `
            <div class="card" style="width: 18rem;">
            <h2 class="card-title">Name:${teamArr[i].name}</h2>
            <h3 class="card-subtitle">Role:${teamArr[i].getRole()}</h3>
            <p class="card-text">Id:${teamArr[i].ID}</p>
            <p class="card-text">Email:${teamArr[i].email}</p>
            <p class="card-text">School:${teamArr[i].school}</p>
            </div>`
        }
    }
    return(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
</head>
<body>
    <header class="bg-primary">
        <h1>My Team</h1>
    </header>
<main class="cotainer d-flex flex-wrap justify-content-evenly">
${HTML}
</main>
</body>
</html>
    `)   
}