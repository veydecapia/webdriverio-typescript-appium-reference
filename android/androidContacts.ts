import { remote, RemoteOptions, Browser } from "webdriverio";
import ProjectCapabilities from "./projectCapabilities";
import AndroidContacts from "./viewObjects/androidContacts";
import { tapElement, setValueOfElement } from "./utils";


describe('Android Contacts App Test', function () {
	let driver: Browser<"async">;
	this.timeout(40000);

	before(async function () {
		const remoteOptions: RemoteOptions = ProjectCapabilities.androidBaseCapabilities();
		driver = await remote(remoteOptions);
	});

	it('Add new contact', async function () {

		// Tap the floating action button
		await tapElement(driver, AndroidContacts.locators.floatingActionBtn);

		//Cancel button
		await tapElement(driver, AndroidContacts.locators.cancelBtn);

		// Provide a First and Last name to the input fields
		// then tap the save button
		await setValueOfElement(driver, `android=${AndroidContacts.locators.firstNameTextbox}`, "Satoshi");
		await setValueOfElement(driver, `android=${AndroidContacts.locators.lastNameTextbox}`, "Nakamoto");
		await tapElement(driver, AndroidContacts.locators.saveBtn);

		// Tap the options menu button
		await tapElement(driver, AndroidContacts.locators.moreOptionsBtn);

		// Swipe to bottom part of the page
		// await driver.hideKeyboard();

		// Tap the delete button
		await tapElement(driver, `android=${AndroidContacts.locators.deleteBtn}`);

		// Tap the delete confirmation button
		await tapElement(driver, `android=${AndroidContacts.locators.deleteConfirmBtn}`);

	});

	after(async function () {
		await driver.deleteSession();
	});

});