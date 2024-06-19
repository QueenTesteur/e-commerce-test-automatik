package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class LoginPage {
    public final WebDriver driver;
    private final WebDriverWait wait;

    //Locators for SignIn form(connexion)
    @FindBy(name = "email")
    private static WebElement emailField;
    @FindBy (name = "password")
    private static WebElement passwordField;
    @FindBy (xpath = "//*[@data-qa='login-button']")
    private static WebElement loginButton;
    @FindBy(xpath = "//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[10]")
    private WebElement succesMsg;

    //locators
   @FindBy (xpath = "//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[4]")
   private  WebElement logOutButton;

    //constructor
    public  LoginPage(WebDriver driver){

        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));  // 10 seconds timeout
        PageFactory.initElements(driver, this);
    }

    public void enterEmail(String email){
        emailField.clear();
        emailField.sendKeys(email);
    }
    public void enterPassword(String password){
        passwordField.clear();
        passwordField.sendKeys(password);
    }
    public void clickLoginButton(){
        loginButton.click();
    }

    public void UserConnected() {
        assert succesMsg.isDisplayed(): "Une erreur s'est certainement produite. Veuillez réessayer ou contacter votre administrateur";
        System.out.println("Félicitations et bienvenue sur votre tableau de bord");

    }
    //page action
    public boolean isLogoutButtonDisplayed() {
        try {
            wait.until(ExpectedConditions.visibilityOf(logOutButton));
            return logOutButton.isDisplayed();
        } catch (Exception e) {
            return false;
        }

    }

}
