package org.example;

import org.testng.Assert;
import org.testng.annotations.Test;

public class RemoveFromCartTest extends BaseTest {

    @Test
    public void testRemoveFromCart() {
        test = extent.createTest("Remove from Cart Test");
        // Navigate to Cart Page
        driver.get(BASEURL + "view_cart");
        CartPage cartPage = new CartPage(driver, test);
        Assert.assertTrue(cartPage.isProductInCart(), "No product found in the cart");

        // Remove the product from cart
        int initialProductCount = cartPage.getNumberOfProductsInCart();
        cartPage.removeProductFromCart(0);
        int finalProductCount = cartPage.getNumberOfProductsInCart();

        // Verify the product is removed from the cart
        Assert.assertEquals(finalProductCount, initialProductCount - 1, "Product is not removed from the cart");
    }
}
