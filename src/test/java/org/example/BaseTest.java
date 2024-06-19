package org.example;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;

import java.time.Duration;

public class BaseTest {
    public final String BASEURL = "https://automationexercise.com/";
    protected static WebDriver driver; //Static to share between all classes
    protected static ExtentReports extent; //Static to share between all classes
    protected ExtentTest test;
    protected static ExtentSparkReporter sparkReporter; //Static to share between all classes

    @BeforeSuite
    public void setUpSuite() {
        sparkReporter = new ExtentSparkReporter("spark.html");
        sparkReporter.config().setDocumentTitle("Automation Test Report");
        sparkReporter.config().setReportName("Functional Test Report");
        sparkReporter.config().setTheme(Theme.STANDARD);

        extent = new ExtentReports();
        extent.attachReporter(sparkReporter);
        extent.setSystemInfo("Host Name", "Localhost");
        extent.setSystemInfo("Environment", "QA");
        extent.setSystemInfo("User Name", "Marie Bernadette Adou");

        // Initialize browser
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        // Implicit wait
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // Maximize browser window
        driver.manage().window().maximize();
    }

    @BeforeClass
    public void setUpClass() {
        // Open the exercise site at the beginning of each class
        driver.get(BASEURL);
    }

    @BeforeMethod
    public void setUpMethod() {
        // Initialize ExtentTest for each test method
        test = extent.createTest(getClass().getSimpleName() + " - " + "Test Method", "Test Method Description");
    }

    @AfterSuite
    public void tearDownSuite() {
        if (driver != null) {
            driver.quit();
        }
        if (extent != null) {
            extent.flush();
        }
    }
}
