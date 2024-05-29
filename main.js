// Función para calcular y guardar la personalidad

    document.getElementById('guardar').onsubmit = function(event) {
    event.preventDefault();
    var formElements = document.getElementById('personality-form').elements;
    var totalScore = 0;
    
    // Calcular el puntaje total
    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'radio' && formElements[i].checked) {
            totalScore += parseInt(formElements[i].value);
        }
    }

    // Determinar el resultado de la personalidad
    var personalityResult;
    if (totalScore >= 7) {
        personalityResult = "Introvertido";
    } else if (totalScore >= 4) {
        personalityResult = "Ambivertido (una mezcla de ambas características)";
    } else {
        personalityResult = "Extrovertido";
    }

    localStorage.setItem('personalityResult', personalityResult);
    window.location.href = 'resultados.html';

    //INTELIGENCIA

    var formElements = document.getElementById('intelligence-form').elements;
    var scores = { logical: 0, kinesthetic: 0, musical: 0 };


    
    // Calcular las puntuaciones
    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'radio' && formElements[i].checked) {
            if (formElements[i].value === "1") {
                scores.logical++;
            } else if (formElements[i].value === "2") {
                scores.kinesthetic++;
            } else if (formElements[i].value === "3") {
                scores.musical++;
            }
        }
    }
    console.log("Hola papu, qué haces aquí?");
    // Determinar el resultado de la inteligencia
    var highestScore = Math.max(scores.logical, scores.kinesthetic, scores.musical);
    var intelligenceResult;

    if (highestScore === scores.logical) {
        intelligenceResult = "Lógica/Matemática";
    } else if (highestScore === scores.kinesthetic) {
        intelligenceResult = "Kinestésica/Corporal";
    } else if (highestScore === scores.musical) {
        intelligenceResult = "Musical";
    }

    localStorage.setItem('intelligenceResult', intelligenceResult);
    window.location.href = 'resultados.html';

    
};

