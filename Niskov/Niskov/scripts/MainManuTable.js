let tables = [document.querySelector('.tablanketa_1'), document.querySelector('.tablanketa_2')];
tables.forEach(table => 
{
   table.querySelectorAll('tr').forEach((el) => 
    {
        const my_color = el.style.backgroundColor;
        el.addEventListener('mouseenter', () => { el.style.backgroundColor = "#F08080";});
        el.addEventListener('mouseout', () =>  { el.style.backgroundColor = my_color; });
    });
});
