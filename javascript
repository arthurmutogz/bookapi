// JavaScript for making API requests
function registerUser() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    // Make API request to register user
}

function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // Make API request to log in user
}

function userQuery() {
    // Make API request for user query
}

function addBook() {
    const title = document.getElementById('book-title').value;
    const status = document.getElementById('book-status').value;
    // Make API request to add a book
}

function deleteBook() {
    const bookId = document.getElementById('delete-book-id').value;
    // Make API request to delete a book
}

function updateToNew() {
    const bookId = document.getElementById('update-new-id').value;
    // Make API request to update a book to "New" status
}

function updateToAvailable() {
    const bookId = document.getElementById('update-available-id').value;
    // Make API request to update a book to "Available" status
}

function listBooks() {
    // Make API request to list books
}
