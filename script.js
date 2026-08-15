/* FARMER REGISTRATION */

const farmerForm = document.getElementById("farmerForm");


if (farmerForm) {

    farmerForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const farmer = {

            id: document.getElementById("farmerId").value,

            name: document.getElementById("farmerName").value,

            village: document.getElementById("village").value,

            animal: document.getElementById("animalType").value,

            animals: Number(
                document.getElementById("animalCount").value
            ),

            milk: Number(
                document.getElementById("milkProduction").value
            ),

            centre: document.getElementById("collectionCentre").value

        };


        /* Get existing farmers */

        let farmers =
            JSON.parse(localStorage.getItem("farmers")) || [];


        /* Add new farmer */

        farmers.push(farmer);


        /* Save */

        localStorage.setItem(
            "farmers",
            JSON.stringify(farmers)
        );


        document.getElementById(
            "registrationMessage"
        ).innerHTML =

            "<h3>✅ Farmer Registered Successfully!</h3>" +

            "<p>Farmer " +
            farmer.name +
            " has been registered.</p>";


        farmerForm.reset();

    });

}


/* FARMER DASHBOARD */

const farmerTable =
    document.getElementById("farmerTable");


if (farmerTable) {

    const farmers =
        JSON.parse(localStorage.getItem("farmers")) || [];


    let totalAnimals = 0;

    let totalMilk = 0;


    farmers.forEach(function(farmer) {

        totalAnimals += farmer.animals;

        totalMilk += farmer.milk;


        const row =
            document.createElement("tr");


        row.innerHTML =

            "<td>" + farmer.id + "</td>" +

            "<td>" + farmer.name + "</td>" +

            "<td>" + farmer.village + "</td>" +

            "<td>" + farmer.animal + "</td>" +

            "<td>" + farmer.animals + "</td>" +

            "<td>" + farmer.milk + " L</td>" +

            "<td>" + farmer.centre + "</td>";


        farmerTable.appendChild(row);

    });


    document.getElementById(
        "totalFarmers"
    ).textContent = farmers.length;


    document.getElementById(
        "totalAnimals"
    ).textContent = totalAnimals;


    document.getElementById(
        "totalMilk"
    ).textContent = totalMilk + " L";

}