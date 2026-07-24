-- Update employee bonus based on department

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_department IN VARCHAR2,
    p_bonus IN NUMBER
)
IS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus / 100)
    WHERE Department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus updated successfully.');

END;
/

-- Execute Procedure

BEGIN

    UpdateEmployeeBonus('IT',10);

END;
/

-- Verify Result

SELECT
    EmployeeID,
    Name,
    Department,
    Salary
FROM Employees
ORDER BY EmployeeID;