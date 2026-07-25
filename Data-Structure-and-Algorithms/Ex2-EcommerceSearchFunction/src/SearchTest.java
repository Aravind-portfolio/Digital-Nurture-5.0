public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Watch", "Accessories"),
                new Product(104, "Phone", "Electronics"),
                new Product(105, "Bag", "Fashion")

        };

        System.out.println("Linear Search:");

        Product result1 = Search.linearSearch(products, 103);

        if (result1 != null)
            result1.display();
        else
            System.out.println("Product Not Found");

        System.out.println();

        System.out.println("Binary Search:");

        Product result2 = Search.binarySearch(products, 103);

        if (result2 != null)
            result2.display();
        else
            System.out.println("Product Not Found");

    }

}