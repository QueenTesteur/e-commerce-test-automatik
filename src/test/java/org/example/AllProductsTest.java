package org.example;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.util.List;

public class AllProductsTest extends BaseTest {

    @Test
    public void testShowAllProducts() {
        test = extent.createTest("Show All Products Test");
        driver.get(BASEURL + "products");
        HomePage homepage = new HomePage(driver);
        homepage.clickProductsButton();

        AllProductsPage allProductsPage = new AllProductsPage(driver, test);
        //List<WebElement> products = allProductsPage.getAllProducts();
        //Assert.assertFalse(products.isEmpty(), "No products are displayed");
    }
}
