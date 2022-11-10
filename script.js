const formYear = document.getElementById('form-year');
const containerYear = document.getElementById('container-year');
const date = new Date();
const getYear = date.getFullYear();

formYear.innerHTML = getYear;
containerYear.innerHTML = getYear;