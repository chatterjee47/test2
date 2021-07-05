package TestCaseExecution;

import BaseClass.browsersetup;
import PageObjectory.adminpage;
import PageObjectory.leavePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class backgroundtest extends browsersetup{
	leavePage lpp;
	adminpage adp;
	
	@Given("^I clicked Admin link$")
	public void i_clicked_Admin_link() throws Throwable {
		adp= new adminpage(driver);
		Thread.sleep(1000);
		adp.Adminlink();
	}

	@Then("^I entered admin username\"([^\"]*)\"$")
	public void i_entered_admin_username(String strAdminUsername) throws Throwable {
		adp.AdminUsername(strAdminUsername);
		driver.close();
	}

	@Given("^I clicked on Leave tab$")
	public void i_clicked_on_Leave_tab() throws Throwable {
		lpp= new leavePage(driver);
		Thread.sleep(1000);
		lpp.Leavelink();
	}

	@Then("^I enter leave employee name \"([^\"]*)\"$")
	public void i_enter_leave_employee_name(String strLaeveEmpName) throws Throwable {
		lpp.LaeveEmpName(strLaeveEmpName);
		driver.close();
	}


    
   
	
}
