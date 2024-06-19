package org.example;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class AllProductsPage {
    private WebDriver driver;
    private ExtentTest test;

    @FindBy(xpath = "/html/body/section[2]/div/div/div[2]/div")
    private List<WebElement> allProducts;

    public AllProductsPage(WebDriver driver, ExtentTest test) {
        this.driver = driver;
        this.test = test;
        PageFactory.initElements(driver, this);
    }

    public List<WebElement> getAllProducts() {
        return allProducts;
    }

    public DetailsProductPage clickOnProduct(int index) {
        allProducts.get(index).click();
        test.log(Status.INFO, "Clicked on product at index: " + index);
        return new DetailsProductPage(driver, test);
    }
}

