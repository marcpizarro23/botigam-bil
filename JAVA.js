document.addEventListener("DOMContentLoaded", function() {


  let contador = 0;
  let carrito = document.getElementById("carrito");
  let botons = document.querySelectorAll("button");


  botons.forEach(function(boto) {


    if (boto.textContent === "AFEGIR A LA CISTELLA") {
      boto.addEventListener("click", function() {
        contador++;
        carrito.textContent = contador;
        alert("Producte afegit a la cistella");
        boto.textContent = "AFEGIT ✔";
        boto.style.backgroundColor = "green";
      });
    }


    if (boto.textContent === "VEURE CATÀLEG") {
      boto.addEventListener("click", function() {
        window.scrollTo({ top: 500, behavior: "smooth" });
      });
    }


    if (boto.textContent === "INFORMACIÓ EXTRA") {
      boto.addEventListener("click", function() {


        let titol = document.createElement("h2");
        titol.textContent = "Informació extra sobre la botiga";


        let text = document.createElement("p");
        text.textContent = "A la nostra botiga trobaràs els mòbils més moderns del mercat amb les millors garanties i servei professional.";


        let garantia = document.createElement("h3");
        garantia.textContent = "Garantia i servei";


        let llista1 = document.createElement("ul");
        llista1.innerHTML = `
          <li>2 anys de garantia oficial</li>
          <li>Servei tècnic especialitzat</li>
          <li>Assistència personalitzada</li>
        `;


        document.body.appendChild(titol);
        document.body.appendChild(text);
        document.body.appendChild(garantia);
        document.body.appendChild(llista1);


        llista1.scrollIntoView({ behavior: "smooth" });
      });
    }


    if (boto.textContent === "CONTACTE") {
      boto.addEventListener("click", function() {


        let titolContacte = document.createElement("h2");
        titolContacte.textContent = "Contacta amb nosaltres";


        let email = document.createElement("p");
        email.textContent = "Email: contacte@botigamobil.cat";


        let telefon = document.createElement("p");
        telefon.textContent = "Telèfon: 623 611 240";


        document.body.appendChild(titolContacte);
        document.body.appendChild(email);
        document.body.appendChild(telefon);


        telefon.scrollIntoView({ behavior: "smooth" });
      });
    }


  });


});


