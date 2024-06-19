package org.example;

import org.testng.Assert;
import org.testng.annotations.Test;

public class AddCartTest extends BaseTest {

    @Test
    public void testAddToCart() {
        test = extent.createTest("Add to Cart Test");
        driver.get(BASEURL + "products");

        // Navigate to AllProductsPage
        AllProductsPage allProductsPage = new AllProductsPage(driver, test);
        Assert.assertFalse(allProductsPage.getAllProducts().isEmpty(), "No products are displayed");

        // Click on a product
        allProductsPage.clickOnProduct(0);

        // Verify Product Details and Add to Cart
        DetailsProductPage detailProductPage = new DetailsProductPage(driver, test);
        Assert.assertTrue(detailProductPage.isProductInformationDisplayed(), "Product information is not displayed");

        // Set quantity and add to cart
        detailProductPage.setQuantity("1");
        detailProductPage.clickAddToCart();

        // Verify the product is added to cart
        AddCartPage addCartPage = new AddCartPage(driver, test);
        Assert.assertTrue(addCartPage.isProductInCart(), "Product is not added to the cart");
    }
}

