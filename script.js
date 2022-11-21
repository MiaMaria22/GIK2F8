'use strict' ;

const bookList = [
    {
        id: 1,
        author: 'Charles Dickens',
        title: 'Oliver Twist',
    },
    
    {
        id: 2,
        author: 'William Shakespeare',
        title: 'Hamlet'
    }
];

/*const searchInput = document.children[0].children[1].children[1].children[1];*/
const searchField = document.getElementById('searchField');


/* keydown, keyup */
searchField.addEventListener('keyup', handleKeyPress);



function handleKeyPress (e) {
    searchBooks(e.target.value);
}

function searchBooks (searchTerm) {
    const filteredList = [];
    for (let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
            filteredList.push(bookList[i]);
        }
    }

    renderBookList(filteredList); 

}



function renderBookList (bookList) {
    /* Element i HTML-listan visas/döljs beroende på listans innehåll */
    let html = `<ul class="book-list rounded-md border-2 border-cyan-800 bg-white w-full mx-auto">`;
    for (let i = 0; i < bookList.length; i++){
        
        html += `<li 
                    class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-cyan-900 last:border-b-0 border-b
                    border-cyan-700 cursor-pointer">
                ${bookList[i].author} - ${bookList[i].title}
                </li>`;
    }               
                    
    html +=  `</ul>`;

    const existingElement = document.querySelector('.book-list');
    console.log(existingElement);
    
    const root = document.getElementById('root');
    if(existingElement){
        root.removeChild(existingElement);
    }
    
    root.insertAdjacentHTML('beforeend', html);

    
    
    
    



}


