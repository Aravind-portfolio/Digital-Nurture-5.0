package com.cognizant.junit;

public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public boolean isPositive(int number) {
        return number > 0;
    }

    public Object getObject() {
        return new Object();
    }

    public Object getNullObject() {
        return null;
    }
}