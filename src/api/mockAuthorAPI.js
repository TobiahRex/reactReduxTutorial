import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const authors = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House',
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen',
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin',
  },
];


function generateId(author) {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
}

class AuthorApi {
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Object.assign([], authors)), delay);
    });
  }

  static saveAuthor(author) {
    let _author = author;
    _author = Object.assign({}, author);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.id) {
          const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
          authors.splice(existingAuthorIndex, 1, _author);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          author.id = generateId(_author);
          authors.push(_author);
        }

        resolve(author);
      }, delay);
    });
  }

  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = authors.findIndex(author => {
          author.authorId == authorId;
        });
        authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;
