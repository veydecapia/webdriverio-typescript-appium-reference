import { Browser } from "webdriverio";

class AndroidContacts {
	public static locators = {
		floatingActionBtn: "~Add",
		googleBtn: 'new UiSelector().text("Google")', //TODO:Optimize: Pass the text only
		nameTextbox: 'new UiSelector().text("Name")',
		saveBtn: "~OK",
		editContactBtn: 'new UiSelector().text("Edit contact")',
		deleteBtn: 'new UiSelector().text("Delete 1 contact")',
		deleteConfirmBtn: 'new UiSelector().text("Delete")'
	}

}

export default AndroidContacts;