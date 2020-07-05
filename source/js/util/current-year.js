 const currentYear = new Date().getFullYear();
 export const getCurrentYear = () => {
     document.getElementById('year').textContent = currentYear;
 };