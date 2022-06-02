module.exports = generatehtml =(teamArr)=>{
    let HTML = ""
    for (let i = 0; i < teamArr.length; i++){
        if(teamArr[i].getRole() === "Manager"){
            HTML += `
            <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-white">Name: ${teamArr[i].name}</h2>
                    <h3 class="card-subtitle text-white">Role: ${teamArr[i].getRole()}</h3>
                </div>
                <ul class="card-body list-group">
                    <li class="card-text list-group-item">Id: ${teamArr[i].id}</li>
                    <li class="card-text list-group-item">Email: ${teamArr[i].email}</li>
                    <li class="card-text list-group-item">Office Number: ${teamArr[i].officeNumber}</li>
                </ul>
            </div>`
        } else if (teamArr[i].getRole() === "Engineer"){
            HTML += `
            <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-white">Name: ${teamArr[i].name}</h2>
                    <h3 class="card-subtitle text-white">Role: ${teamArr[i].getRole()}</h3>
                </div>
                    <ul class="card-body list-group">
                    <li class="card-text list-group-item">Id: ${teamArr[i].id}</li>
                    <li class="card-text list-group-item">Email: ${teamArr[i].email}</li>
                    <li class="card-text list-group-item">Github: ${teamArr[i].github}</li>
                </ul>
            </div>`
        } else if (teamArr[i].getRole() === "Intern"){
            HTML += `
            <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <div class="card-header bg-primary">
                    <h2 class="card-title text-white">Name: ${teamArr[i].name}</h2>
                    <h3 class="card-subtitle text-white">Role: ${teamArr[i].getRole()}</h3>
                </div>
                <ul class="card-body list-group">
                    <li class="card-text list-group-item">Id: ${teamArr[i].id}</li>
                    <li class="card-text list-group-item">Email: ${teamArr[i].email}</li>
                    <li class="card-text list-group-item">School: ${teamArr[i].school}</li>
                </ul>
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
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header class="bg-primary text-center text-bg-danger p-3 text-white mb-5">
        <h1>My Team</h1>
    </header>
<main class="container d-flex flex-wrap justify-content-evenly">
${HTML}
</main>
</body>
</html>
    `)   
}