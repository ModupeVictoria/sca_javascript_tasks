
// Book Class: Represents a book
class Book{
    constructor(title,genre,author,date){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.date = date;
        
    }
}
   
// BookList Class: Handles BookList Tasks
class BookList{
    static displayBooks(){
        const books = Store.getBooks();

        // loop through the books
        books.forEach(function(book){
            BookList.addBookToList(book)
        })

        
    }
    static addBookToList(book){
        const list = document.getElementById('book-list');

        // create a table row element

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.genre}</td>
        <td>${book.author}</td>
        <td>${book.date}</td>
        <td><input type="checkbox" id="read" name="read" class="completed complete-btn"></td>
        <td><input type="checkbox" id="complete" name="complete" class="completed complete-btn"></td>
        `;

        // Append the row to the list

        list.appendChild(row)

    }


    static readBook(el){
       // const date = Date.now();
        if(el.classList.contains('complete-btn')){
           // el.parentElement.parentElement.classList.toggle('completed')
          // el.parentElement.parentElement.innerHTML = `${book.date}`;
        }
    } 
    
  

    //show alert
    static showAlert(message,className){
        const div =document.createElement('div');
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.getElementById('book-form');
        container.insertBefore(div, form);
        // Make alert vanish after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 3000);

    }

    static clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('author').value = '';
        document.getElementById('date').value = '';
    }
}

//Store class: Handles storage
class Store {
    static getBooks(){
        let books;
        // check if there's a current 'book' item
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            //parse as json to be used as reg JS array of objs
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        // Get currently stored books
        const books = Store.getBooks();

        //Add new book to 'books' array
        books.push(book);

        //Set or save local storage with books array (converted to a string)
        localStorage.setItem('books',JSON.stringify(books));
    }
  
}

//Event: Display Books
document.addEventListener('DOMContentLoaded',BookList.displayBooks)

//Event: Add a Book
document.getElementById('book-form').addEventListener('submit',function(e){
    //Prevent default action

    e.preventDefault();

    //Get form values
    const title = document.getElementById('title').value
    const genre = document.getElementById('genre').value
    const author = document.getElementById('author').value
     const date = document.getElementById('date').value

    // Validate form
    if(title === '' || genre === '' || author === '' ||date === ''){
        BookList.showAlert(`Please fill in all fields`, 'danger');
    }else{
        // Call book class
    const book = new Book(title,genre,author,date);
    //console.log(book);

    // Add book to BookList
    BookList.addBookToList(book);

    //Add book to store
    Store.addBook(book);

    // Clear fields
    BookList.clearFields();
    }
})

//Event: To mark a Book as Read
 document.getElementById('book-list').addEventListener('click',function(e){
    BookList.readBook(e.target)
    BookList.showAlert(`Please fill in all fields`, 'success');
}) 



