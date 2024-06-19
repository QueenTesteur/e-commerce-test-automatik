package org.example;

import com.aventstack.extentreports.ExtentTest;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CartPage {
    private WebDriver driver;
    private ExtentTest test;

    @FindBy(id = "cart_items") // Adjust this XPath as per your page structure
    private WebElement cart;

    @FindBy(xpath = "//*[@id=\"product-1\"]/td[6]") // Adjust this XPath as per your page structure
    private List<WebElement> removeButtons;

    @FindBy(xpath = "//*[@class='cart_product']") // Adjust this XPath as per your page structure
    private List<WebElement> cartProducts;

    public CartPage(WebDriver driver, ExtentTest test) {
        this.driver = driver;
        this.test = test;
        PageFactory.initElements(driver, this);
    }

    public boolean isProductInCart() {
        return !cartProducts.isEmpty();
    }

    public void removeProductFromCart(int index) {
        if (index < removeButtons.size()) {
            removeButtons.get(index).click();
        }
    }

    public int getNumberOfProductsInCart() {
        return cartProducts.size();
    }
}
