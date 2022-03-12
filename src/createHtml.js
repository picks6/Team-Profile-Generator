//--------------------------------- Html file Creation -------------------------------//

//create head section
const createHeader = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
    `;
};


const BodyTop = () => {
    return `
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <section class="employees">
    `;
};


const BodyBottom = () => {
    return `
        </section>
    </main>
</body>
</html>
    `;
}

const createEmployee = employee => {
    const role = employee.constructor.name; 

    //get different last element for Manager, Engineer, or Intern
    let extension;

    switch (role) {
        case 'Manager':
            extension = `<p class="office"><span>Office:</span><span>${employee.officeNumber}</span></p>`;
            break;
        case 'Engineer':
            extension = `<p class="github">Github:<a href="https://github.com/${employee.github}" target="blank">${employee.github}</a></p>`;
            break;
        default:
            extension = `<p class="school"><span>School:</span><span>${employee.school}</p></span>`;
            break;
    }
    

    return`
           
            <article class="card employee">
                <section class="employee-head ${position.toLowerCase()}">
                    <h2 class="name">${employee.name}</h2>
                    <span class="position">
                        <i class="fa-solid ${icons[position]}"></i>
                        <span>${position}</span>
                    </span>
                </section>
                <section class="employee-body">
                    <p class="id"><span>ID:</span> <span>${employee.id}</span></p>
                    <p>Email:<a href="mailto:${employee.email}">${employee.email}</a></p>
                    ${extension}
                </section>
            </article>
    `;

};

const createHtml = employees => {
    const header = createHeader(); 
    const bodyTop = BodyTop(); 
    const cards = employees.map(employee => {
        return createEmployee(employee);
    });
   const bodyBottom = BodyBottom(); 


    return header + bodyTop + cards.join('') + bodyBottom;
};

module.exports = createHtml;