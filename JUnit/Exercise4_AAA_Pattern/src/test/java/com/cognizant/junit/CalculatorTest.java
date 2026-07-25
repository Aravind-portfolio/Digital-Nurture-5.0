package com.cognizant.junit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up...");
        calculator = new Calculator();
    }

    @Test
    public void testAddition() {
        int a = 10;
        int b = 20;

        int result = calculator.add(a, b);

        assertEquals(30, result);
    }

    @Test
    public void testMultiplication() {
        int a = 5;
        int b = 4;

        int result = calculator.multiply(a, b);

        assertEquals(20, result);
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }
}