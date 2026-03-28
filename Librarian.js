const { sql, poolPromise } = require('../config/db');

class Book {
   
    static async getAllBooks() {
        try {
            const pool = await poolPromise;
            const result = await pool.request() .execute('GetAllBooksWithAuthors');
            return result.recordset;
        } catch (error) {
            console.error('Database error in getAllBooks:', error);
            throw error;
        }
    }

    // Add a new book
  static async addBook(bookData) {
    try {
        const { Title, Author, ISBN, PublishedYear, Quantity, Price } = bookData;
        const pool = await poolPromise;
        
        const request = pool.request()
            .input('Title', sql.VarChar, Title)
            .input('ISBN', sql.VarChar, ISBN)
            .input('PublishedYear', sql.Int, PublishedYear)
            .input('Quantity', sql.Int, Quantity)
            .input('Price', sql.Int, Price)
            .input('AuthorName', sql.VarChar, Author); // Add the missing Author parameter
        
        let errorMessage = null;
        
        // Capture the print output from the stored procedure
        request.on('info', (info) => {
            if (info.message.includes('Book already exists')) {
                errorMessage = 'Book already exists!';
            }
        });
        
        const result = await request.execute('AddBook');
        
        // Check if error was caught and throw it
        if (errorMessage) {
            throw new Error(errorMessage);
        }
        
        return { success: true };
    } catch (error) {
        throw error;
    }
}

  // Update book information
     static async updateBook(bookData) {
         try {
             const { BookID, Title, ISBN, PublishedYear, Quantity, Price } = bookData;
             const pool = await poolPromise;
 
             await pool.request()
                 .input('BookID', sql.Int, BookID)
                 .input('Title', sql.VarChar, Title || null)
                 .input('ISBN', sql.VarChar, ISBN || null)
                 .input('PublishedYear', sql.Int, PublishedYear || null)
                 .input('Quantity', sql.Int, Quantity || null)
                 .input('Price', sql.Int, Price || null)
                 .execute('UpdateBookInfo');
 
             return { success: true };
         } catch (error) {
             throw error;
         }
     }
    // Delete a book
    static async deleteBook(bookData) {
    try {
        if (!bookData.BookID) {
            throw new Error('Book ID is required to delete a book');
        }
        
        const pool = await poolPromise;
        const request = pool.request()
            .input('BookID', sql.Int, bookData.BookID)
            .output('Message', sql.NVarChar(255))
            .output('Success', sql.Bit);
            
        const result = await request.execute('DeleteBook');
        
        // Get output parameters
        const success = result.output.Success;
        const message = result.output.Message;
        
        // Return both success status and message
        return {
            success: success === true,
            message: message
        };
    } catch (error) {
        console.error('Database error in deleteBook:', error);
        throw error;
    }
}
    // Return a book
    static async returnBook(returnData) {
        try {
            const pool = await poolPromise;
            const result = await pool.request()
                .input('StudentID', sql.Int, returnData.StudentID)
                .input('BookID', sql.Int, returnData.BookID)
                .input('ReturnDate', sql.Date, returnData.ReturnDate)
                .execute('ReturnBook');
                
            return result;
        } catch (error) {
            console.error('Database error in returnBook:', error);
            throw error;
        }
    }

    // Issue a book
    // static async issueBook(issueData) {
    //     try {
    //         const pool = await poolPromise;
    //         const result = await pool.request()
    //             .input('StudentID', sql.Int, issueData.StudentID)
    //             .input('BookID', sql.Int, issueData.BookID)
    //             .execute('IssueBook');
                
    //         return result;
    //     } catch (error) {
    //         console.error('Database error in issueBook:', error);
    //         throw error;
    //     }
    // }



    // implmenting triggers 
    static async issueBook(issueData) {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('StudentID', sql.Int, issueData.StudentID)
            .input('BookID', sql.Int, issueData.BookID)
            .execute('IssueBook');
                
        return { success: true };
    } catch (error) {
        // Check if error message contains our trigger error message
        if (error.message && error.message.includes('Cannot issue book: Book is out of stock')) {
            return { success: false, error: 'Book is out of stock' };
        }
        console.error('Database error in issueBook:', error);
        throw error;
    }
}
    // Search books by title
    static async searchBooks(title) {
        try {
            const pool = await poolPromise;
            const result = await pool.request()
                .input('Title', sql.NVarChar, title.trim())
                .execute('SearchBook');
                
            return result.recordset;
        } catch (error) {
            console.error('Database error in searchBooks:', error);
            throw error;
        }
    }

    // Get all books with authors
    static async getBooksByAuthorName(authorName) {
    try {
        const pool = await poolPromise;
        const request = pool.request();
        request.input('AuthorName', sql.NVarChar, authorName);
        
        const result = await request.execute('GetBooksByAuthorName');
        return result.recordset;
    } catch (error) {
        console.error('Database error in getBooksByAuthorName:', error);
        throw error;
    }
}
}

module.exports = Book;