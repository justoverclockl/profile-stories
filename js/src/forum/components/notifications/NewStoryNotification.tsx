import Notification from "flarum/forum/components/Notification";
import Mithril from "mithril";

export default class NewStoryNotification extends Notification {
  content(): Mithril.Children {
    return undefined;
  }

  excerpt(): Mithril.Children {
    return 'WHAT THE FUUUUUUUUUUUUCK';
  }

  href(): string {
    return "#";
  }

  icon(): string {
    return "";
  }

}
