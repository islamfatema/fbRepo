package facebook;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestFaceBook {

	public static void main(String[] args) {
		System.setProperty("webdriver.gecko.driver", "/Users/fatemaislam/Downloads/geckodriver");
	  	  WebDriver driver=new FirefoxDriver();
	  	  driver.get("https://www.facebook.com");
	//driver.findElement(By.xpath(".//*[@id='month']")).click();
driver.findElement(By.xpath(".//*[@id='month']")).click();
List<WebElement>month=driver.findElements(By.xpath("/html/body/div[1]/div[3]/div[1]/div/div/div/div/div[2]/div[2]/div/div/div/div[1]/form/div[1]/div[6]/div[2]/span/span/select[1]/option[1]"));

}
}

	


