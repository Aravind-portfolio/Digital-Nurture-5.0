package com.cognizant.junit;

import org.junit.Test;

import static org.junit.Assert.*;

public class AssertionsTest {

    Calculator calculator = new Calculator();

    @Test
    public void testAssertions() {
        assertEquals(5, calculator.add(2, 3));
        assertTrue(calculator.isPositive(10));
        assertFalse(calculator.isPositive(-5));
        assertNull(calculator.getNullObject());
        assertNotNull(calculator.getObject());
    }
}