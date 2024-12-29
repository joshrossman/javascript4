let books = [];

function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages
}

Book.prototype.display = function(){
    console.log(`${this.title} was written by ${this.author} and has ${this.pages} pages.`)
}

function addBook(title,author,pages){
    books.push(new Book(title,author,pages));   
}

Book.prototype.searchBook = function(title){
    books.push(new Book(title,author,pages));   
}


function search(authorOrTitle) {
    let bookFound = false;
    for(book in books){
        
        if(books[book]["title"] == authorOrTitle){
            console.log(books[book]);
            bookFound = true;
        }
        else if(books[book]["author"] == authorOrTitle){
            console.log(books[book]);
            bookFound = true;
        }
    }
    if(bookFound ==false){
        console.log("Book Not Found.")
    }
}

function filterBooks(x){
    let shortBooks= books.filter(book => book.pages<=100);
    return shortBooks;
    
}

function printAllBooks(theBooks){
    for(book in theBooks){
        console.log(theBooks[book]);
    }

}

addBook("Jimmy","Tom",6);
addBook("Harry Potter","JK Rolling", 504);
printAllBooks(books);
books[1].display();
search("JK Rolling");
search("1984");

console.log("books:");
printAllBooks(books);
books= filterBooks(100);

console.log("filtered books");
printAllBooks(books);

let titleBooks=[];
let authorBooks=[];
function addTitle(){
    titleBooks=books.map(book => ({
        ...book,
        title: "Title:" + book.title
    }));
}
function addAuthor(){
    authorBooks=books.map(book => ({
        ...book,
        author: "Author:" + book.author
    }));
}
addTitle();
addAuthor();
printAllBooks(titleBooks);
printAllBooks(authorBooks);











