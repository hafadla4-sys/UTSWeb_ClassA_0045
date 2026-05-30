const faqQuestion =
document.querySelectorAll(".faq-question");

faqQuestion.forEach(item => {

    item.addEventListener("click", () => {

        const answer =
        item.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }else{

            answer.style.display = "block";

        }

    });

});


const form =
document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Pesan berhasil dikirim!");

    form.reset();

});