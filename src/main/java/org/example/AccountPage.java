package org.example;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class AccountPage  {
    private final WebDriver driver;
    private WebDriverWait wait;
    private final ExtentTest test;

    //Locators for SignIn form(connexion)
    @FindBy(name = "email")
    private static WebElement emailField;
    @FindBy (name = "password")
    private static WebElement loginPasswordField;
    @FindBy (xpath = "//*[@data-qa='login-button']")
    private static WebElement loginButton;

    // Locators for the create account form step 1
    @FindBy(name = "name")
    private WebElement nameField;
    @FindBy(xpath = "//*[@data-qa='signup-email']")
    private WebElement emailRegisterField;
    @FindBy(xpath = "//*[@data-qa='signup-button']")
    private WebElement registerButton;
    @FindBy(xpath = "//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[10]")
    private WebElement succesMsg;
    private final By emailError = By.xpath("//*[@id=\"form\"]/div/div/div[3]/div/form/p"); // L'élément qui affiche le message d'erreur d'email

    //locator for create account step 2
    @FindBy(id = "id_gender2")
    private WebElement genderField;
    @FindBy(id = "password")
    private WebElement passwordField;
    @FindBy(id = "days")
    private WebElement dayBirthField;
    @FindBy(id = "months")
    private WebElement monthBirthField;
    @FindBy(id = "years")
    private WebElement yearsBirthField;
    @FindBy(id = "newsletter")
    private WebElement newsletterBox;
    @FindBy(id = "first_name")
    private WebElement firstNameField;
    @FindBy(id = "last_name")
    private WebElement lastNameField;
    @FindBy(id = "address1")
    private WebElement addressField;
    @FindBy(id = "country")
    private WebElement countryField;
    @FindBy(id = "state")
    private WebElement stateField;
    @FindBy(id = "city")
    private WebElement cityField;
    @FindBy(id = "zipcode")
    private WebElement zipcodeField;
    @FindBy(id = "mobile_number")
    private WebElement phoneField;
    @FindBy(xpath = "//*[@data-qa='create-account']")
    private WebElement createAccountButton;

    //initialise constructor
    public AccountPage(WebDriver driver, ExtentTest test){
        this.driver = driver;
        this.test = test;
        PageFactory.initElements(driver, this);
    }

    //Methods for Sign In form
    public void enterEmail(String email){
        emailField.clear();
        emailField.sendKeys(email);
        //test.log(Status.INFO, "enter email: " + email);
    }
    public void enterPassword(String password){
        loginPasswordField.clear();
        loginPasswordField.sendKeys(password);
        // test.log(Status.INFO, "enter password: " + password);
    }
    public void clickLoginButton(){
        loginButton.click();
        //test.log(Status.INFO, "click on login button");
    }

    public void UserConnected() {
        assert succesMsg.isDisplayed(): "Une erreur s'est certainement produite. Veuillez réessayer ou contacter votre administrateur";
        System.out.println("Félicitations et bienvenue sur votre tableau de bord");
    }

    // Methods for create account form step 1
    public void setName(String name){
        nameField.clear();
        nameField.sendKeys(name);
        //test.log(Status.INFO, "enter name: " + name);
    }
    public void setNewEmail(String registeremail){
        emailRegisterField.clear();
        emailRegisterField.sendKeys(registeremail);
        //test.log(Status.INFO, "enter email: " + registeremail);
    }
    public void clickRegisterButton() {
        registerButton.click();
        //test.log(Status.INFO, "click on register button on step 1");
    }

    // Method to create account step 2
    public void setGender() {
        genderField.click();
        // test.log(Status.INFO, "clique in gender box");
    }
    public void setPassword(String pass){
        passwordField.sendKeys(pass);
        // test.log(Status.INFO, "enter pass: " + pass);
    }
    public void setDayOfBirth(String day){
        dayBirthField.sendKeys(day);
        // test.log(Status.INFO, "enter day: " + day);
    }
    public void setMonthOfBirth(String month){
        monthBirthField.sendKeys(month);
        // test.log(Status.INFO, "enter month: " + month);
    }
    public void setYearsOfBirth(String years){
        yearsBirthField.sendKeys(years);
        // test.log(Status.INFO, "enter years: " + years);
    }
    public void setNewsLetterBox(){
        newsletterBox.click();
        // test.log(Status.INFO, "click newsletter box");
    }
    public void setFirstName(String firstname){
        firstNameField.sendKeys(firstname);
        // test.log(Status.INFO, "enter firstname: " + firstname);
    }
    public void setLastName(String lastname){
        lastNameField.sendKeys(lastname);
        // test.log(Status.INFO, "enter lastname: " + lastname);
    }
    public void setAdress(String adresse){
        addressField.sendKeys(adresse);
        //  test.log(Status.INFO, "enter adresse: " + adresse);
    }
    public void setCountry(String country){
        countryField.sendKeys(country);
        // test.log(Status.INFO, "enter country: " + country);
    }
    public void setState(String state){
        stateField.sendKeys(state);
        //test.log(Status.INFO, "enter state: " + state);
    }
    public void setCity(String city){
        cityField.sendKeys(city);
        // test.log(Status.INFO, "enter city: " + city);
    }
    public void setZipcode(String zipcode){
        zipcodeField.sendKeys(zipcode);
        //  test.log(Status.INFO, "enter zipcode: " + zipcode);
    }
    public void setPhone(String phone){
        phoneField.sendKeys(phone);
        // test.log(Status.INFO, "enter phone: " + phone);
    }
    public void clickCreateAccountButton() {
        createAccountButton.click();
        //  test.log(Status.INFO, "click register button step 2");
    }


    public boolean isEmailErrorDisplayed() {
        try {
            return driver.findElement(emailError).isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    public String getEmailErrorMessage() {
        return driver.findElement(emailError).getText();
    }
}
