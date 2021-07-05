package PageObjectory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import BaseClass.browsersetup;

public class PIMPage extends browsersetup{
	
	public PIMPage(WebDriver driver){
		browsersetup.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="menu_pim_viewPimModule")
	private WebElement PIMlink;
	
	public void PIMlink(){
		PIMlink.click();
	}
	
	@FindBy(id="empsearch_id")
	private WebElement PIM_Id;
	
	public void PIM_Id(String strpimid){
		PIM_Id.sendKeys(strpimid);
	}
	
	@FindBy(id="empsearch_employee_name_empName")
	private WebElement PIM_EmpName;
	
	public void PIM_EmpName(String strPIM_EmpName){
		PIM_EmpName.sendKeys(strPIM_EmpName);
	}
	
	
}
