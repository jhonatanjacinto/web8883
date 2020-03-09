var tdTotalCursos = document.querySelector('.js-total-de-cursos');
var tdTotalHoras = document.querySelector('.js-total-de-horas');
var btnConfirmar = document.querySelector('button.btn');
var checkboxes = document.querySelectorAll('input[type=checkbox]');
var totalHoras = 0;
var totalCursos = 0;

btnConfirmar.onclick = function() {
    if (totalCursos === 0)  {
        alert('Por favor, selecione ao menos 1 curso!');
    }
    else {
        alert('Matricula confirmada com sucesso!');
        window.location = 'index.html';
    }
}

checkboxes.forEach(function(checkboxCurso) {
    checkboxCurso.onchange = function() {
        if (this.checked) {
            totalCursos++;
            totalHoras += parseInt(this.value);
        }
        else {
            totalCursos--;
            totalHoras -= parseInt(this.value);
        }

        tdTotalHoras.textContent = totalHoras + 'h';
        tdTotalCursos.textContent = totalCursos + ' curso(s)';
    }
});