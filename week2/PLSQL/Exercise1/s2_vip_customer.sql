-- Promote customers to VIP if Balance > 10000

SET SERVEROUTPUT ON;

BEGIN

    FOR rec IN
    (
        SELECT CustomerID,
               Name,
               Balance
        FROM Customers
    )
    LOOP

        IF rec.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                rec.Name || ' promoted to VIP.'
            );

        ELSE

            UPDATE Customers
            SET IsVIP = 'N'
            WHERE CustomerID = rec.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

END;
/

-- Verify Result

SELECT CustomerID,
       Name,
       Balance,
       IsVIP
FROM Customers
ORDER BY CustomerID;