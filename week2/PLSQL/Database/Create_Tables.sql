DROP TABLE Transactions;
DROP TABLE Accounts;
DROP TABLE Loans;
DROP TABLE Employees;
DROP TABLE Customers;

CREATE TABLE Customers
(
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE,
    IsVIP CHAR(1)
);

CREATE TABLE Accounts
(
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,

    CONSTRAINT FK_ACC_CUSTOMER
    FOREIGN KEY(CustomerID)
    REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions
(
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(20),

    CONSTRAINT FK_TRANS_ACCOUNT
    FOREIGN KEY(AccountID)
    REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans
(
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,

    CONSTRAINT FK_LOAN_CUSTOMER
    FOREIGN KEY(CustomerID)
    REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees
(
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);