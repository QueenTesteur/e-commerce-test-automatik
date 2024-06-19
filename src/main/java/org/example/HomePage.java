package org.example;

import com.aventstack.extentreports.ExtentTest;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class HomePage {
    WebDriver driver;
    WebDriverWait wait;
    private ExtentTest test;
    @FindBy(xpath = "//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[4]")
    WebElement signInBtn;
    @FindBy(xpath = "//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[2]/a")  // Update the XPath as per your button
    private WebElement productsButton;


    public HomePage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }
    //this function is to click on signIn button
    public AccountPage ClickSignInButton(){
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        signInBtn.click();
        return new AccountPage(driver, test);
    }
    public void clickProductsButton() {
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        productsButton.click();

    }

}
