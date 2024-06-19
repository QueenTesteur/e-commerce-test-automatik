package org.example;

import com.aventstack.extentreports.ExtentTest;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddCartPage {
    private final WebDriver driver;
    private final ExtentTest test;

    //locators for cart
@FindBy(id = "cart_items")
    private WebElement cartItem;
@FindBy(xpath = "//*[@id=\"product-1\"]/td[4]")
    private WebElement cartQuantity;


public AddCartPage(WebDriver driver, ExtentTest test){
    this.driver = driver;
    this.test = test;
    PageFactory.initElements(driver, this);
}
public boolean isProductInCart(){
    return cartItem.isDisplayed();
}

public String getCartQuantity(){
    return cartQuantity.getText();
}
}
