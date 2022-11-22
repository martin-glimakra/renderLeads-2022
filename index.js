let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
//Fångar in HTML element så de går att använda i javascript koden

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value) // Kollar vad som för tillfället står i input rutan och lägger till det i arrayen myLeads
    inputEl.value = "" //Ersätter vad som står i input rutan med en tom sträng
    renderLeads() //Kör renderLeads funktionen
})


function renderLeads() {
    let listItems = "" //skapar en ny variabel som innehåller en tom sträng
    //loopen körs lika många gånger som arrayen myLeads är lång
    // Variabeln i har olika värden beroende på vilket varv loopen är på.
    for (let i = 0; i < myLeads.length; i++) {
        // listItems fylls på med <li> element
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
        // Ett <li> element som innehåller ett <a> element skapas för varje sträng i arrayen. Strängen läggs både till som text och som länk.
        //Läs mer om Template literals här: https://www.w3schools.com/js/js_string_templates.asp
        //Läs mer om target blank här: w3schools.com/tags/att_a_target.asp

        ulEl.innerHTML = listItems // Skickar in alla <li> element i HTML elementet på rad 8 i HTML filen
    }
}
