package org.example;

import org.testng.Assert;
import org.testng.annotations.Test;

public class SignUpTest extends BaseTest {
    @Test
    public void testCreateAccount() {
        test = extent.createTest("Create a new account");
        driver.get(BASEURL + "login");

        // Access the homepage
        HomePage homepage = new HomePage(driver);
        // Navigate to the authentication page
        AccountPage accountPage = homepage.ClickSignInButton();
        // Perform the first part of the signup
        accountPage.setName("New User");
        accountPage.setNewEmail("judicaelsika@example.com");
        // Click the create account button
        accountPage.clickRegisterButton();
        // Check if the error message appears
        if (accountPage.isEmailErrorDisplayed()) {
            String errorMessage = accountPage.getEmailErrorMessage();
            System.out.println("Error message displayed: " + errorMessage);
            Assert.fail("Email already exists: " + errorMessage);
        } else {
            // Perform the second part of the signup
            accountPage.setGender();
            accountPage.setPassword("maryberny");
            accountPage.setDayOfBirth("19");
            accountPage.setMonthOfBirth("Mars");
            accountPage.setYearsOfBirth("1976");
            accountPage.setNewsLetterBox();
            accountPage.setFirstName("isaac");
            accountPage.setLastName("Moché");
            accountPage.setAdress("abidjan cocody rue 12");
            accountPage.setCountry("Canada");
            accountPage.setState("canada");
            accountPage.setCity("fermont");
            accountPage.setZipcode("+1 908 435");
            accountPage.setPhone("0907080605");
            accountPage.clickCreateAccountButton();
        }
    }
}
