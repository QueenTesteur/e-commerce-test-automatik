package org.example;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DetailsProductPage {
    private WebDriver driver;
    private ExtentTest test;

    // Locators for product details
    @FindBy(xpath = "/html/body/section/div/div/div[2]/div[2]")
    private WebElement productInformation;
    @FindBy(id = "quantity")
    private WebElement quantityField;
    @FindBy(xpath = "/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/button")
    private WebElement addToCartButton;

    public DetailsProductPage(WebDriver driver, ExtentTest test){
        this.driver = driver;
        this.test = test;
        PageFactory.initElements(driver, this);
    }

    public boolean isProductInformationDisplayed() {
        return productInformation.isDisplayed();
    }

     public void setQuantity(String quantity){
        quantityField.clear();
        quantityField.sendKeys(quantity);
     }
      public void clickAddToCart(){
        addToCartButton.click();
        test.log(Status.INFO, "clicked on add to cart ");
    }
}
