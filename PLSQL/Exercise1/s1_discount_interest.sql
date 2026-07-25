SET SERVEROUTPUT ON;

BEGIN

    FOR rec IN
    (
        SELECT
            l.LoanID,
            c.Name,
            c.DOB,
            l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
    )
    LOOP

        IF FLOOR(MONTHS_BETWEEN(SYSDATE, rec.DOB)/12) > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer: ' || rec.Name ||
                ' | Loan ID: ' || rec.LoanID ||
                ' | New Interest Rate: ' || (rec.InterestRate - 1) || '%'
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/

SELECT LoanID,
       CustomerID,
       InterestRate
FROM Loans
ORDER BY LoanID;