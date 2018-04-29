export class MenuItem {
  /**
   * The link when clicking on this menu item.
   */
  url: string;

  /**
   * The text that will be visible to the user.
   */
  text: string;

  /**
   * This helps the prerender render paths that shouldn't be visible in the menu
   * but are needed in the application. It's also good for feature toggleing menu 
   * items that are not done yet.
   */
  hide?: boolean;
}