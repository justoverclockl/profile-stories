import ExtensionPage, {ExtensionPageAttrs} from "flarum/admin/components/ExtensionPage";
import app from 'flarum/admin/app';
import Mithril from "mithril";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";

export default class StoriesSettingsPage extends ExtensionPage {
  oninit(vnode: Mithril.Vnode<ExtensionPageAttrs, this>) {
    super.oninit(vnode);
  }

  oncreate(vnode: Mithril.VnodeDOM<ExtensionPageAttrs, this>) {
    super.oncreate(vnode);
  }

  content(vnode: Mithril.VnodeDOM<ExtensionPageAttrs, this>): JSX.Element {
    return (
      <div className='container profileStoryContainer'>
        <input
          className='FormControl'
          type="file"
          name='storyBanner'
        />
      </div>
    );
  }
}
