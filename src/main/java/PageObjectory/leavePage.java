package PageObjectory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import BaseClass.browsersetup;

public class leavePage extends browsersetup{
	
	public leavePage(WebDriver driver){
		browsersetup.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="menu_leave_viewLeaveModule")
	private WebElement Leavelink;
	
	public void Leavelink(){
		Leavelink.click();
	}
	
	@FindBy(id="leaveList_txtEmployee_empName")
	private WebElement LaeveEmpName;
	
	public void LaeveEmpName(String strLaeveEmpName){
		LaeveEmpName.sendKeys(strLaeveEmpName);
	}
	
	
	
}

