package TestCaseExecution;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.testng.Assert;

import BaseClass.browsersetup;
import PageObjectory.loginpage;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends browsersetup {
	loginpage lg;
	static String configfilepath = System.getProperty("user.dir") + "//config//file.properties";
	static Properties prop;
	static FileInputStream fileInput;

	public static void Configuration() {
		try {
			fileInput = new FileInputStream(configfilepath);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		prop = new Properties();
		try {
			prop.load(fileInput);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Before
	public void setUp() throws InterruptedException {
		System.out.println("Open browser");
		Configuration();
		driver = browsersetup.setup(prop.getProperty("browsername"), prop.getProperty("url"));
		lg = new loginpage(driver);
		lg.username(prop.getProperty("username"));
		lg.password(prop.getProperty("password"));
		lg.btnLogin();
		Thread.sleep(1000);
		String expectedtitle = "OrangeHRM";
	    String actualTitle = driver.getTitle();
	    System.out.println("actual Title : " + actualTitle);
	    Assert.assertEquals(actualTitle, expectedtitle);
	    Thread.sleep(1000);
	}

	@After
	public void tearDown() throws InterruptedException {
		System.out.println("Close browser");
		driver.close();
	}
}
