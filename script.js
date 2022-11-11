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

const searchInput = null;



function handleKeyPress (input) {
    searchBooks(input);
}

function searchBooks (searchTerm) {
    const filteredList = [];
    for(let i = 0; i < bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        
       
        if (title.indexOf(searchTerm.toLowerCase >= 0)) {
            filteredList.push(bookList[0]);
        }

    }
  renderBookList(filteredList); 

}
searchBooks('oliver')

function renderBookList (list) {
    console.log(list);

}