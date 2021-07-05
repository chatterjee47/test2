package TestCaseExecution;

import BaseClass.browsersetup;
import PageObjectory.PIMPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class pimpagetest extends browsersetup{

	PIMPage pp;
	
	@Given("^I clicked on PIM tab$")
	public void i_clicked_on_PIM_tab() throws Throwable {
		pp= new PIMPage(driver);
		Thread.sleep(1000);
		pp.PIMlink();
		Thread.sleep(1000);
	}

	@Then("^I enter PIM Id \"([^\"]*)\"$")
	public void i_enter_PIM_Id(String strpimid) throws Throwable {
		pp.PIM_Id(strpimid);
		Thread.sleep(1000);
		driver.close();
	}
}
