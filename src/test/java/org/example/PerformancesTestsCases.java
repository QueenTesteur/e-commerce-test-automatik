package org.example;

import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.time.Duration;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class PerformancesTestsCases extends Simulation {
    HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://automationexercise.com/")
            .inferHtmlResources()
            .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
            .acceptEncodingHeader("gzip, deflate")
            .acceptLanguageHeader("en-US,en;q=0.5")
            .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.142");

    //Add Scenario
    ScenarioBuilder login = scenario("LoginTest")
            .exec(http("Load Login Page")
                    .get("/")
                    .check(status().is(200))
            )
            .pause(Duration.ofSeconds(5))
            .exec(http("submit login")
                    .post("/login")
                    .formParam("email", "marybernadette592@gmail.com")
                    .formParam("password", "admin1234")
                    .check(status().is(200))
            );

    //Simulation
    {
        setUp(
                login.injectOpen(constantUsersPerSec(250).during(Duration.ofSeconds(5)))
        ).protocols(httpProtocol);
    }




}

