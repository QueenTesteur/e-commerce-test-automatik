package org.example;

import org.testng.annotations.Test;

public class SignInTest extends BaseTest {

    @Test
    public void testLogin() throws Exception {
        test = extent.createTest("login successfully");
        driver.get(BASEURL + "login");

        // Create an instance of HomePage
        HomePage homepage = new HomePage(driver);
        AccountPage accountPage = homepage.ClickSignInButton();
        // Fill in the form
        accountPage.enterEmail("marybernadette592@gmail.com");
        accountPage.enterPassword("admin1234");
        accountPage.clickLoginButton();
        // Check that the user is logged in
        accountPage.UserConnected();
    }
}
