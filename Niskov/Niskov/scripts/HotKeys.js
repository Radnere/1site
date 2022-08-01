function Ctrl(event){
    id = event.keyCode-48;
    if (event.ctrlKey) {
        url = '';
        switch(id) {
            case 1:    
                url = 'index.html';
                break;
            case 2:    
                url = 'index1.html';
                break;
            case 3:    
                url = 'index2.html';
                break;
            case 4:    
                url = 'index3.html';
                break;
            case 5:    
                url = 'index4.html';
                break;
            case 6:    
                url = 'index5.html';
                break;
            case 7:    
                url = 'index6.html';
                break;
            case 8:    
                url = 'index7.html';
                break;    
            case 9:    
                url = 'index11.html';
                break;      
        }
        if (url) window.location.href=url;
    }
}

window.addEventListener('keydown', function(event) {
    if (event.code == 'KeyB' && (event.ctrlKey || event.metaKey)) {
        if(confirm("Перейти на Почту Нискова А.Н.?"))
        {
            window.open('https://mail.google.com/mail/u/1/?ogbl#inbox');
        }
    }
});