
create database LibraryManagementSystem
use LibraryManagementSystem
CREATE TABLE Student (
    StudentID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL
);

-- Table for Librarians
CREATE TABLE Librarian (
    LibrarianID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    HireDate DATE DEFAULT GETDATE()
);

CREATE TABLE Authors (
    AuthorID INT IDENTITY(1,1) PRIMARY KEY,
    AuthorName VARCHAR(255) NOT NULL UNIQUE
);
select*from Student
EXEC SEARCH

-- Table for Books
CREATE TABLE Books (
    BookID INT IDENTITY(1,1) PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    ISBN VARCHAR(20) UNIQUE NOT NULL,
    PublishedYear INT CHECK (PublishedYear >= 1000 AND PublishedYear <= YEAR(GETDATE())),
    Quantity INT CHECK (Quantity >= 0) NOT NULL DEFAULT 1,
	Price INT NOT NULL
);

Create Table Authorship
(
	AuthorID INT,
	BookID INT,
	PRIMARY KEY (AuthorID, BookID),
	FOREIGN KEY (AuthorID) References Authors(AuthorID)
	ON DELETE CASCADE,
	Foreign Key (BookID) References Books(BookID)
	ON DELETE CASCADE
);

-- Table for Book Issuance (Including LibrarianID)
CREATE TABLE BookIssuance (
    IssueID INT IDENTITY(1,1) PRIMARY KEY,
    BookID INT FOREIGN KEY REFERENCES Books(BookID) ON DELETE CASCADE,
    StudentID INT FOREIGN KEY REFERENCES Student(StudentID) ON DELETE CASCADE,
    LibrarianID INT FOREIGN KEY REFERENCES Librarian(LibrarianID) ON DELETE SET NULL,
    IssueDate DATE NOT NULL DEFAULT GETDATE(),
    DueDate DATE NOT NULL,
    ReturnDate DATE NULL,
);

-- Table for Fines (Including LibrarianID)
CREATE TABLE Fines (
    FineID INT IDENTITY(1,1) PRIMARY KEY,
	BookIssueID INT NOT NULL,
    FineAmount DECIMAL(10,2) NOT NULL,
    PaymentStatus VARCHAR(10) CHECK (PaymentStatus IN ('Paid', 'Unpaid')) DEFAULT 'Unpaid',
	Foreign Key (BookIssueID) References BookIssuance(IssueID)
	on delete cascade
);

-----------------------------------------------------------------------------
go

-- Queries to Check Data
SELECT * FROM Student;
SELECT * FROM Librarian;
SELECT * FROM Books;
SELECT * FROM BookIssuance;
SELECT * FROM Fines;
SELECT * FROM Authors;
select* from Authorship

-- Librarian Table
INSERT INTO Librarian (Name, Email, Password, HireDate) VALUES
('Sara Malik', 'sara.malik@email.com', '12345678', '2023-06-15'),
('Umar Javed', 'umar.javed@email.com', 'libsecure456', '2022-09-20');

-- Books Table
INSERT INTO Books (Title, ISBN, PublishedYear, Quantity, Price) VALUES
('Updated Book Title', '2345', 1925, 10, 15),
('1984', '9780451524935', 1949, 2, 1200),
('Pride and Prejudice', '9780141439518', 1813, 4, 1000),
('Adventures of Huckleberry Finn', '9780486280615', 1885, 2, 900),
('Hamlet', '9780141013077', 1603, 6, 1100),
('To Kill a Mockingbird', '9780061120084', 1960, 3, 1300),
('Moby Dick', '9781503280786', 1851, 2, 950),
('amabail', '7689236', 2011, 6, 1100);

-- Authors Table
INSERT INTO Authors (AuthorName) VALUES
('George Orwell'),
('J.K. Rowling'),
('Jane Austen'),
('Mark Twain'),
('William Shakespeare');

-- Authorship Table (mapping Authors to Books)
INSERT INTO Authorship (AuthorID, BookID) VALUES
(1, 2),  -- George Orwell -> 1984
(2, 8),  -- J.K. Rowling -> amabail
(3, 3),  -- Jane Austen -> Pride and Prejudice
(4, 4),  -- Mark Twain -> Adventures of Huckleberry Finn
(5, 5);  -- William Shakespeare -> Hamlet

-- Book Issuance Table
INSERT INTO BookIssuance (BookID, StudentID, LibrarianID, IssueDate, DueDate, ReturnDate) VALUES
(1, 1, 1, '2024-03-01', '2024-03-15', NULL),
(2, 2, 1, '2024-02-25', '2024-03-10', '2024-03-09'),
(3, 2, 2, '2024-02-28', '2024-03-14', NULL),
(4, 4, 2, '2024-03-05', '2024-03-20', NULL),
(5, 2, 1, '2024-03-10', '2024-03-21', '2024-03-19'),
(2, 1, 1, '2025-04-14', '2025-04-15', NULL);

-- Fines Table
INSERT INTO Fines (BookIssueID, FineAmount, PaymentStatus) VALUES
(1, 100.00, 'Unpaid'),
(2, 0.00, 'Paid'),
(3, 50.00, 'Unpaid'),
(4, 0.00, 'Paid'),
(5, 75.00, 'Unpaid');
--------------------------------------------------------------------------------------------------------------------


USE LibraryManagementSystem;
GO


-- 3. Add a New Book (Prevent Duplicates)
--CREATE or alter PROCEDURE AddBook
--    @Title VARCHAR(255),
--    @ISBN VARCHAR(20),
--    @PublishedYear INT,
--    @Quantity INT,
--    @Price INT
--AS
--BEGIN
--    IF EXISTS (SELECT 1 FROM Books WHERE ISBN = @ISBN)
--        PRINT 'Book already exists!';
--    ELSE
--        INSERT INTO Books (Title, ISBN, PublishedYear, Quantity, Price)
--        VALUES (@Title, @ISBN, @PublishedYear, @Quantity, @Price);
--END;
--GO

 
-- 5. Update Book Information (Only Selected Attributes)
CREATE PROCEDURE UpdateBookInfo
    @BookID INT,
    @Title VARCHAR(255) = NULL,
    @ISBN VARCHAR(20) = NULL,
    @PublishedYear INT = NULL,
    @Quantity INT = NULL,
    @Price INT = NULL
AS
BEGIN
    UPDATE Books
    SET 
        Title = COALESCE(@Title, Title),
        ISBN = COALESCE(@ISBN, ISBN),
        PublishedYear = COALESCE(@PublishedYear, PublishedYear),
        Quantity = COALESCE(@Quantity, Quantity),
        Price = COALESCE(@Price, Price)
    WHERE BookID = @BookID;
END;
GO

-- 6. Issue a Book (Check Availability)
--CREATE PROCEDURE IssueBook
--    @BookID INT,
--    @StudentID INT,
--    @LibrarianID INT,
--    @DueDate DATE
--AS
--BEGIN
--    IF EXISTS (SELECT 1 FROM Books WHERE BookID = @BookID AND Quantity > 0)
--    BEGIN
--        INSERT INTO BookIssuance (BookID, StudentID, LibrarianID, IssueDate, DueDate, ReturnDate)
--        VALUES (@BookID, @StudentID, @LibrarianID, GETDATE(), @DueDate, NULL);
--        UPDATE Books SET Quantity = Quantity - 1 WHERE BookID = @BookID;
--    END
--    ELSE
--        PRINT 'Book is not available!';
--END;
--GO

-- 7. Return a Book & Calculate Fine
CREATE PROCEDURE ReturnBook
    @IssueID INT,
    @ReturnDate DATE
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM BookIssuance WHERE IssueID = @IssueID AND ReturnDate IS NULL)
        PRINT 'Invalid Issue ID or Book already returned!';
    ELSE
    BEGIN
        UPDATE BookIssuance SET ReturnDate = @ReturnDate WHERE IssueID = @IssueID;
        DECLARE @DueDate DATE, @FineAmount DECIMAL(10,2);
        SELECT @DueDate = DueDate FROM BookIssuance WHERE IssueID = @IssueID;
        IF @ReturnDate > @DueDate
        BEGIN
            SET @FineAmount = DATEDIFF(DAY, @DueDate, @ReturnDate) * 10;
            INSERT INTO Fines (BookIssueID, FineAmount, PaymentStatus)
            VALUES (@IssueID, @FineAmount, 'Unpaid');
        END
        UPDATE Books SET Quantity = Quantity + 1 WHERE BookID = (SELECT BookID FROM BookIssuance WHERE IssueID = @IssueID);
    END
END;
GO


-- 8. Search for a Book
CREATE PROCEDURE SearchBook
    @Title VARCHAR(255)
AS
BEGIN
    IF EXISTS (SELECT 1 FROM Books WHERE Title LIKE '%' + @Title + '%')
    BEGIN
        SELECT 
            b.BookID,
            b.Title,
            a.AuthorName AS Author,
            b.ISBN,
            b.PublishedYear,
            CASE 
                WHEN b.Quantity > 0 THEN 'Available'
                ELSE 'Not Available'
            END AS Status
        FROM 
            Books b
        LEFT JOIN 
            Authorship au ON b.BookID = au.BookID
        LEFT JOIN 
            Authors a ON au.AuthorID = a.AuthorID
        WHERE 
            b.Title LIKE '%' + @Title + '%';
    END
    ELSE
        PRINT 'No book found with this title!';
END;
-- 9. Search for a Student
CREATE PROCEDURE SearchStudent
    @StudentName VARCHAR(100)
AS
BEGIN
    SELECT * FROM Student WHERE Name LIKE '%' + @StudentName + '%';
END;
GO

-- 10. Calculate Fine for a Student
CREATE PROCEDURE CalculateFine
    @StudentID INT
AS
BEGIN
    SELECT SUM(FineAmount) AS TotalFine FROM Fines
    WHERE BookIssueID IN (SELECT IssueID FROM BookIssuance WHERE StudentID = @StudentID) AND PaymentStatus = 'Unpaid';
END;
GO

--11 changingPasswords
CREATE PROCEDURE ChangingPasswords
    @Email VARCHAR(255),
    @OldPassword VARCHAR(255),
    @NewPassword VARCHAR(255),
    @UserType VARCHAR(10)
AS
BEGIN
    IF @UserType NOT IN ('Student', 'Librarian')  -- ✅ Invalid userType check
    BEGIN
        PRINT 'Invalid UserType!';
        RETURN;
    END

    IF LEN(@NewPassword) < 6
    BEGIN
        PRINT 'New password must be at least 6 characters!';
        RETURN;
    END

    IF @UserType = 'Student'
    BEGIN
        IF EXISTS (SELECT 1 FROM Student WHERE Email = @Email AND Password = @OldPassword)
        BEGIN
            UPDATE Student SET Password = @NewPassword WHERE Email = @Email;
            PRINT 'Password updated successfully!';
        END
        ELSE
            PRINT 'Incorrect old password!';
    END
    ELSE IF @UserType = 'Librarian'
    BEGIN
        IF EXISTS (SELECT 1 FROM Librarian WHERE Email = @Email AND Password = @OldPassword)
        BEGIN
            UPDATE Librarian SET Password = @NewPassword WHERE Email = @Email;
            PRINT 'Password updated successfully!';
        END
        ELSE
            PRINT 'Incorrect old password!';
    END
END;
---------------------------------------------------- extra cheez ha ignore maro
go



-- Procedure to view only currently issued books by a specific student
CREATE PROCEDURE ViewStudentCurrentBooks
    @StudentID INT
AS
BEGIN
    -- Check if student exists
    IF NOT EXISTS (SELECT 1 FROM Student WHERE StudentID = @StudentID)
    BEGIN
        PRINT 'Student not found!';
        RETURN;
    END

    -- Get student name for display
    DECLARE @StudentName VARCHAR(100);
    SELECT @StudentName = Name FROM Student WHERE StudentID = @StudentID;
    
    -- Get count of currently issued books
    DECLARE @CurrentlyIssued INT;
    SELECT @CurrentlyIssued = COUNT(*) 
    FROM BookIssuance 
    WHERE StudentID = @StudentID AND ReturnDate IS NULL;
    
    PRINT 'Student: ' + @StudentName;
    PRINT 'Currently issued books: ' + CAST(@CurrentlyIssued AS VARCHAR);
    
    -- Get today's date to calculate days remaining
    DECLARE @Today DATE = CAST(GETDATE() AS DATE);
    
    -- Get only currently issued books (not returned)
    SELECT 
        b.Title,
        b.ISBN,
        bi.IssueDate,
        bi.DueDate,
        DATEDIFF(DAY, @Today, bi.DueDate) AS DaysRemaining
    FROM BookIssuance bi
    JOIN Books b ON bi.BookID = b.BookID
    WHERE bi.StudentID = @StudentID AND bi.ReturnDate IS NULL
    ORDER BY bi.DueDate ASC;
END;
GO

-- Example of how to use this procedure:
EXEC ViewStudentCurrentBooks @StudentID = 1
drop procedure ViewStudentCurrentBooks
go

Create PROCEDURE ViewStudentCurrentBooks
    @StudentID INT
AS
BEGIN
    -- Check if student exists
    IF NOT EXISTS (SELECT 1 FROM Student WHERE StudentID = @StudentID)
    BEGIN
        PRINT 'Student not found!';
        RETURN;
    END

    -- Get student name
    DECLARE @StudentName VARCHAR(100);
    SELECT @StudentName = Name FROM Student WHERE StudentID = @StudentID;
    
    -- Get count of currently issued books
    DECLARE @CurrentlyIssued INT;
    SELECT @CurrentlyIssued = COUNT(*) 
    FROM BookIssuance 
    WHERE StudentID = @StudentID AND ReturnDate IS NULL;
    
    PRINT 'Student: ' + @StudentName;
    PRINT 'Currently issued books: ' + CAST(@CurrentlyIssued AS VARCHAR);
    
    -- Get today's date
    DECLARE @Today DATE = CAST(GETDATE() AS DATE);
    
    -- Get only currently issued books (not returned)
    SELECT 
        b.Title,
        b.ISBN,
        bi.IssueDate,
        bi.DueDate,
        CASE 
            WHEN bi.DueDate < @Today THEN 
                'Overdue by ' + CAST(DATEDIFF(DAY, bi.DueDate, @Today) AS VARCHAR) + ' days'
            ELSE 
                CAST(DATEDIFF(DAY, @Today, bi.DueDate) AS VARCHAR) + ' days remaining'
        END AS DaysRemaining
    FROM BookIssuance bi
    JOIN Books b ON bi.BookID = b.BookID
    WHERE bi.StudentID = @StudentID AND bi.ReturnDate IS NULL
    ORDER BY bi.DueDate ASC;
END;
GO

EXEC ViewStudentCurrentBooks @StudentID = 1;



--yahan ab login user and libarian noor modify kr rhi
-- 1. Update Student Login Procedure to return name
CREATE OR ALTER PROCEDURE StudentLogin
    @Email VARCHAR(255),
    @Password VARCHAR(255)
AS
BEGIN
    SELECT StudentID AS UserID, Name, Email
    FROM Student 
    WHERE Email = @Email AND Password = @Password;
END;
GO

-- 2. Update Librarian Login Procedure to return name
CREATE OR ALTER PROCEDURE LibrarianLogin
    @Email VARCHAR(255),
    @Password VARCHAR(255)
AS
BEGIN
    SELECT LibrarianID AS UserID, Name, Email
    FROM Librarian 
    WHERE Email = @Email AND Password = @Password;
END;
GO


--naya kam ajka
drop procedure IssueBook
go
--CREATE PROCEDURE IssueBook
--    @BookID INT,
--    @StudentID INT
--AS
--BEGIN
--    DECLARE @CurrentDate DATE = GETDATE();
--    DECLARE @DueDate DATE = DATEADD(MONTH, 1, @CurrentDate);
    
--    IF EXISTS (SELECT 1 FROM Books WHERE BookID = @BookID AND Quantity > 0)
--    BEGIN
--        INSERT INTO BookIssuance (BookID, StudentID, IssueDate, DueDate, ReturnDate)
--        VALUES (@BookID, @StudentID, @CurrentDate, @DueDate, NULL);
        
--        UPDATE Books SET Quantity = Quantity - 1 WHERE BookID = @BookID;
--        PRINT 'Book issued successfully!';
--    END
--    ELSE
--        PRINT 'Book is not available!';
--END;

SELECT name 
FROM sys.foreign_keys
WHERE parent_object_id = OBJECT_ID('BookIssuance') 
AND referenced_object_id = OBJECT_ID('Librarian');

ALTER TABLE BookIssuance
DROP CONSTRAINT FK__BookIssua__Libra__5EBF139D

ALTER TABLE BookIssuance
DROP COLUMN LibrarianID;


delete from BookIssuance

INSERT INTO BookIssuance (BookID, StudentID, IssueDate, DueDate, ReturnDate) VALUES
(1, 1, '2024-03-01', '2024-03-15', NULL),
(2, 2, '2024-02-25', '2024-03-10', '2024-03-09'),
(3, 2, '2024-02-28', '2024-03-14', NULL),
(4, 4, '2024-03-05', '2024-03-20', NULL),
(5, 2, '2024-03-10', '2024-03-21', '2024-03-19'),
(2, 1, '2025-04-14', '2025-04-15', NULL)




--finall
-- Modified AddBook procedure to require author name
CREATE OR ALTER PROCEDURE AddBook
    @Title VARCHAR(255),
    @ISBN VARCHAR(20),
    @PublishedYear INT,
    @Quantity INT,
    @Price INT,
    @AuthorName VARCHAR(255)
AS
BEGIN
    -- Begin transaction for consistency
    BEGIN TRANSACTION;
    
    BEGIN TRY
        -- Check if book already exists
        IF EXISTS (SELECT 1 FROM Books WHERE ISBN = @ISBN)
        BEGIN
            PRINT 'Book already exists!';
            ROLLBACK TRANSACTION;
            RETURN;
        END
        
        -- Add the book
        INSERT INTO Books (Title, ISBN, PublishedYear, Quantity, Price)
        VALUES (@Title, @ISBN, @PublishedYear, @Quantity, @Price);
        
        DECLARE @BookID INT = SCOPE_IDENTITY();
        
        -- Check if author exists
        DECLARE @AuthorID INT;
        
        IF EXISTS (SELECT 1 FROM Authors WHERE AuthorName = @AuthorName)
            SELECT @AuthorID = AuthorID FROM Authors WHERE AuthorName = @AuthorName;
        ELSE
        BEGIN
            -- Create new author
            INSERT INTO Authors (AuthorName) VALUES (@AuthorName);
            SET @AuthorID = SCOPE_IDENTITY();
        END
        
        -- Create relationship in Authorship table
        INSERT INTO Authorship (AuthorID, BookID) VALUES (@AuthorID, @BookID);
        
        PRINT 'Book and author relationship added successfully!';
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        PRINT 'Error occurred: ' + ERROR_MESSAGE();
    END CATCH;
END;
GO
select*from Books
-- Add a new book with author
EXEC AddBook 'jannat ky patty', '292929', 2023, 5, 1500, 'nemrah ahmed';


GO

select* from Student
select* from Books




--final deletefunction using triggers

CREATE OR ALTER TRIGGER trg_PreventIssuedBookDeletion
ON Books
INSTEAD OF DELETE
AS
BEGIN
    SET NOCOUNT ON;
    -- Check if any of the books to be deleted are currently issued and not returned
    IF EXISTS (
        SELECT 1
        FROM deleted d
        JOIN BookIssuance bi ON d.BookID = bi.BookID
        WHERE bi.ReturnDate IS NULL
    )
    BEGIN
        RAISERROR('Cannot delete the book. It is currently issued.', 16, 1);
        RETURN;
    END
    -- Proceed with deletion
    DELETE FROM Books
    WHERE BookID IN (SELECT BookID FROM deleted);
END;
GO

CREATE OR ALTER PROCEDURE DeleteBook
    @BookID INT,
    @Message NVARCHAR(255) OUTPUT,
    @Success BIT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    
    SET @Success = 0; -- Default to failure
    SET @Message = '';
    
    BEGIN TRY
        DELETE FROM Books WHERE BookID = @BookID;
        
        IF @@ROWCOUNT > 0
        BEGIN
            SET @Message = 'Book deleted successfully.';
            SET @Success = 1;
        END
        ELSE
        BEGIN
            SET @Message = 'Book not found.';
            SET @Success = 0;
        END
    END TRY
    BEGIN CATCH
        SET @Message = ERROR_MESSAGE();
        SET @Success = 0;
    END CATCH
END;
GO




exec GetAllBooksWithAuthors
exec GetIssuedBooksByStudent @studentId=1
exec GetIssuedBooks @studentid=1
exec ViewStudentCurrentBooks @studentid =1

CREATE OR ALTER PROCEDURE SearchBook
    @Title NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        b.BookID, 
        b.Title, 
        b.PublishedYear, 
        b.Quantity, 
        b.Price, 
        a.AuthorName
    FROM 
        Books b
    LEFT JOIN 
        Authors a ON b.AuthorID = a.AuthorID
    WHERE 
        b.Title LIKE '%' + @Title + '%'
    ORDER BY 
        b.Title;
END;
GO

--5may 
--get stuentId
CREATE OR ALTER PROCEDURE GetStudentById
    @StudentID INT
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT StudentID, Name, Email 
    FROM Student 
    WHERE StudentID = @StudentID;
END
EXEC GetStudentById @StudentID = 1;
select* from Student
go

-- getStudentBooks.
CREATE OR ALTER PROCEDURE GetStudentBooks
    @StudentID INT
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT b.Title, b.ISBN, bi.IssueDate, bi.DueDate, bi.ReturnDate
    FROM BookIssuance bi
    JOIN Books b ON bi.BookID = b.BookID  
    WHERE bi.StudentID = @StudentID
    ORDER BY bi.IssueDate DESC;
END
EXEC GetStudentBooks @StudentID = 1;
go
--getIssuedBooks
CREATE OR ALTER PROCEDURE GetIssuedBooks
    @StudentID INT
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT b.BookID, b.Title, b.ISBN, bi.IssueDate, bi.DueDate,
        CASE
            WHEN bi.ReturnDate IS NOT NULL THEN 'Returned'
            WHEN GETDATE() > bi.DueDate THEN 'Overdue by ' + CAST(DATEDIFF(day, bi.DueDate, GETDATE()) AS VARCHAR) + ' days'
            ELSE CAST(DATEDIFF(day, GETDATE(), bi.DueDate) AS VARCHAR) + ' days remaining'
        END AS DaysRemaining
    FROM BookIssuance bi
    JOIN Books b ON bi.BookID = b.BookID
    WHERE bi.StudentID = @StudentID
    ORDER BY bi.IssueDate DESC;
END
EXEC GetIssuedBooks @StudentID = 1;
go
---final
--getfines
CREATE OR ALTER PROCEDURE GetStudentFineDetails
    @StudentID INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Get fine details
    SELECT 
        b.Title,
        b.ISBN,
        bi.IssueDate,
        bi.DueDate,
        bi.ReturnDate,
        CASE
            WHEN bi.ReturnDate IS NULL THEN
                CASE
                    WHEN GETDATE() > bi.DueDate THEN DATEDIFF(day, bi.DueDate, GETDATE())
                    ELSE 0
                END
            ELSE
                CASE
                    WHEN bi.ReturnDate > bi.DueDate THEN DATEDIFF(day, bi.DueDate, bi.ReturnDate)
                    ELSE 0
                END
        END AS DaysOverdue,
        CASE
            WHEN bi.ReturnDate IS NULL THEN
                CASE
                    WHEN GETDATE() > bi.DueDate THEN DATEDIFF(day, bi.DueDate, GETDATE()) * 10
                    ELSE 0
                END
            ELSE
                CASE
                    WHEN bi.ReturnDate > bi.DueDate THEN DATEDIFF(day, bi.DueDate, bi.ReturnDate) * 10
                    ELSE 0
                END
        END AS FineAmount
    FROM BookIssuance bi
    JOIN Books b ON bi.BookID = b.BookID
    WHERE bi.StudentID = @StudentID AND 
        ((bi.ReturnDate IS NULL AND GETDATE() > bi.DueDate) OR 
         (bi.ReturnDate IS NOT NULL AND bi.ReturnDate > bi.DueDate))
    ORDER BY DaysOverdue DESC;
END

EXEC GetStudentFineDetails @StudentID = 1;
go

CREATE or alter PROCEDURE ReturnBook
    @StudentID INT,
    @BookID INT,
    @ReturnDate DATE
AS
BEGIN
    DECLARE @IssueID INT;
    
    -- Get the IssueID from StudentID and BookID
    SELECT @IssueID = IssueID 
    FROM BookIssuance 
    WHERE StudentID = @StudentID 
    AND BookID = @BookID
    AND ReturnDate IS NULL;
    
    IF @IssueID IS NULL
        PRINT 'Invalid Student ID or Book ID or Book already returned!';
    ELSE
    BEGIN
        UPDATE BookIssuance SET ReturnDate = @ReturnDate WHERE IssueID = @IssueID;
        DECLARE @DueDate DATE, @FineAmount DECIMAL(10,2);
        SELECT @DueDate = DueDate FROM BookIssuance WHERE IssueID = @IssueID;
        IF @ReturnDate > @DueDate
        BEGIN
            SET @FineAmount = DATEDIFF(DAY, @DueDate, @ReturnDate) * 10;
            INSERT INTO Fines (BookIssueID, FineAmount, PaymentStatus)
            VALUES (@IssueID, @FineAmount, 'Unpaid');
        END
        UPDATE Books SET Quantity = Quantity + 1 WHERE BookID = (SELECT BookID FROM BookIssuance WHERE IssueID = @IssueID);
    END
END;
GO

CREATE OR ALTER PROCEDURE GetIssuedBooksByStudent
    @StudentID INT
AS
BEGIN
    SELECT 
        i.IssueID,  -- Make sure to include IssueID
        b.BookID,
        b.Title,
        b.ISBN,
       
        i.IssueDate,
        i.DueDate,
        i.ReturnDate,
        CASE
            WHEN i.ReturnDate IS NOT NULL THEN 'Returned'
            WHEN GETDATE() > i.DueDate THEN 'Overdue by ' + CAST(DATEDIFF(DAY, i.DueDate, GETDATE()) AS VARCHAR) + ' days'
            ELSE CAST(DATEDIFF(DAY, GETDATE(), i.DueDate) AS VARCHAR) + ' days remaining'
        END AS DaysRemaining
    FROM 
        BookIssuance i
    JOIN 
        Books b ON i.BookID = b.BookID
    WHERE 
        i.StudentID = @StudentID
    ORDER BY 
        i.IssueDate DESC;
END;
GO


--(final functionlity)views for the display book

CREATE OR ALTER VIEW vw_BooksWithAuthors
AS
    SELECT 
        b.BookID, 
        b.Title, 
        a.AuthorName, 
        b.ISBN, 
        b.PublishedYear, 
        b.Quantity, 
        b.Price,
        CASE 
            WHEN b.Quantity > 0 THEN 'Available'
            ELSE 'Not Available'
        END AS Status
    FROM 
        Books b
    LEFT JOIN 
        Authorship au ON b.BookID = au.BookID
    LEFT JOIN 
        Authors a ON au.AuthorID = a.AuthorID;
GO
CREATE OR ALTER PROCEDURE GetAllBooksWithAuthors
AS
BEGIN
   SELECT * FROM vw_BooksWithAuthors order by Quantity asc;
END;
GO

exec GetAllBooksWithAuthors


CREATE OR ALTER VIEW vw_AuthorBooks
AS
    SELECT 
        b.BookID, 
        b.Title, 
        a.AuthorName, 
        b.ISBN, 
        b.PublishedYear, 
        b.Quantity, 
        b.Price,
        CASE 
            WHEN b.Quantity > 0 THEN 'Available'
            ELSE 'Not Available'
        END AS Status
    FROM 
        Books b
    INNER JOIN 
        Authorship au ON b.BookID = au.BookID
    INNER JOIN 
        Authors a ON au.AuthorID = a.AuthorID;
GO
CREATE OR ALTER PROCEDURE GetBooksByAuthorName
    @AuthorName NVARCHAR(100)
AS
BEGIN
    SELECT * FROM vw_AuthorBooks 
    WHERE AuthorName LIKE '%' + @AuthorName + '%'
    ORDER BY Title;
END;
GO
exec GetBooksByAuthorName @AuthorName = 'abeeha rasheed'
go

---trigger wala kam for issueBook
CREATE OR ALTER TRIGGER trg_PreventBookIssueIfOutOfStock
ON BookIssuance
INSTEAD OF INSERT
AS
BEGIN
    DECLARE @BookID INT;
    -- Assume only one row is inserted at a time
    SELECT @BookID = BookID FROM inserted;
    -- Check quantity
    IF EXISTS (SELECT 1 FROM Books WHERE BookID = @BookID AND Quantity > 0)
    BEGIN
        -- Allow the insert
        INSERT INTO BookIssuance (BookID, StudentID, IssueDate, DueDate, ReturnDate)
        SELECT BookID, StudentID, IssueDate, DueDate, ReturnDate FROM inserted;
        -- Decrease quantity
        UPDATE Books SET Quantity = Quantity - 1 WHERE BookID = @BookID;
    END
    ELSE
    BEGIN
        -- Replace PRINT with THROW to ensure error is captured by the application
        THROW 50001, 'Cannot issue book: Book is out of stock.', 1;
    END
END;
CREATE OR ALTER PROCEDURE IssueBook
    @StudentID INT,
    @BookID INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- This simple insert will trigger the INSTEAD OF INSERT trigger
    INSERT INTO BookIssuance (BookID, StudentID, IssueDate, DueDate)
    VALUES (@BookID, @StudentID, GETDATE(), DATEADD(day, 14, GETDATE()));
END

exec IssueBook @studentId=4, @BookID=21