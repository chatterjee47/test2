package TestCaseExecution;

import java.io.FileInputStream;
import java.util.Properties;

import org.testng.Assert;

import BaseClass.browsersetup;
import PageObjectory.loginpage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class loginpagetest extends browsersetup{
	
	String filepath = System.getProperty("user.dir")+ "\\config\\file.properties";
	Properties prop;
	FileInputStream file;
	loginpage lp;
	
	@Given("^I am login page$")
	public void i_am_login_page() throws Throwable {
		System.out.println("This is Login Page");
	}

	@Then("^I enter username \"([^\"]*)\"$")
	public void i_enter_username(String arg1) throws Throwable {
		lp= new loginpage(driver);
		Thread.sleep(1000);
		lp.username(prop.getProperty("username"));
	}

	@Then("^I enter password \"([^\"]*)\"$")
	public void i_enter_password(String arg1) throws Throwable {
		Thread.sleep(1000);
		lp.password(prop.getProperty("password"));
	}

	@Then("^I click on login button$")
	public void i_click_on_login_button() throws Throwable {
		Thread.sleep(1000);
		lp.btnLogin();
	}

	@Then("^I verify the title of the page$")
	public void i_verify_the_title_of_the_page() throws Throwable {
	    String expectedtitle = "OrangeHRM";
	    String actualTitle = driver.getTitle();
	    System.out.println("actual Title : " + actualTitle);
	    Assert.assertEquals(actualTitle, expectedtitle);
	    driver.close();
	    Thread.sleep(1000);
	}


	
}
	
	