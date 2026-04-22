function toggleAdditionalPlan() {
    const additionalPlanSection = document.getElementById('AdditionalPlan');
    if (additionalPlanSection.style.display === 'none') {
        additionalPlanSection.style.display = 'block';
    } else {
        additionalPlanSection.style.display = 'none';
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    function showCards() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show'); 
            }, index * 200); 
        });
    }

  
    showCards();
});

document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const moreContent = document.querySelector('.more-content');

    readMoreBtn.addEventListener('click', function() {
        if (moreContent.style.display === "none") {
            moreContent.style.display = "block"; 
            readMoreBtn.textContent = "Read Less"; 
        } else {
            moreContent.style.display = "none"; 
            readMoreBtn.textContent = "Read More"; 
        }
    });
});
