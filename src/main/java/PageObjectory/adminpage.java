package PageObjectory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import BaseClass.browsersetup;

public class adminpage extends browsersetup{
	
	public adminpage(WebDriver driver){
		browsersetup.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="menu_admin_viewAdminModule")
	private WebElement Adminlink;
	
	public void Adminlink(){
		Adminlink.click();
	}
	
	@FindBy(id="searchSystemUser_userName")
	private WebElement AdminUsername;
	
	public void AdminUsername(String strAdminUsername){
		AdminUsername.sendKeys(strAdminUsername);
	}

}
