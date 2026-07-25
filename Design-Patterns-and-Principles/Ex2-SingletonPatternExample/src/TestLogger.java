public class TestLogger {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();

        Logger logger2 = Logger.getInstance();

        Logger logger3 = Logger.getInstance();

        logger1.log("Application Started");

        logger2.log("Loading Data");

        logger3.log("Application Closed");

        System.out.println();

        System.out.println("Logger 1 HashCode : " + logger1.hashCode());

        System.out.println("Logger 2 HashCode : " + logger2.hashCode());

        System.out.println("Logger 3 HashCode : " + logger3.hashCode());

        System.out.println();

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("Only one Logger instance exists.");
        } else {
            System.out.println("Multiple Logger instances exist.");
        }

    }

}