class BookStoreApi {
    listBooks() {
      return cy.api({
        method: 'GET',
        url: '/BookStore/v1/Books'
      }).then((res) => {
        expect(res.status).to.eq(200);
        return res.body.books;
      });
    }
  
    rentBooks(userID, token, isbnList) {
      return cy.api({
        method: 'POST',
        url: '/BookStore/v1/Books',
        headers: { Authorization: `Bearer ${token}` },
        body: {
          userId: userID,
          collectionOfIsbns: isbnList.map(isbn => ({ isbn }))
        }
      }).then((res) => {
        expect(res.status).to.eq(201);
      });
    }
  }
  
  export default new BookStoreApi();
  