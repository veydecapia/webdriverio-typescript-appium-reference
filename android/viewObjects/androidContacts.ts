import { Browser } from "webdriverio";

class AndroidContacts {
	public static locators = {
		floatingActionBtn: "~Create new contact",
		cancelBtn: "id:com.android.contacts:id/left_button", //TODO:Optimize: Pass the text only
		firstNameTextbox: 'new UiSelector().text("First name")',
		lastNameTextbox: 'new UiSelector().text("Last name")',
		saveBtn: "id:com.android.contacts:id/editor_menu_save_button",
		moreOptionsBtn: '~More options',
		deleteBtn: 'new UiSelector().text("Delete")',
		deleteConfirmBtn: 'new UiSelector().text("DELETE")'
	}

}

export default AndroidContacts;