import Component, {ComponentAttrs} from "flarum/common/Component";
import Mithril from "mithril";
import IndexPage from "flarum/forum/components/IndexPage";
import listItems from "flarum/common/helpers/listItems";
import app from 'flarum/forum/app'

export default class GlobalStories extends Component {
  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
  }

  view(vnode: Mithril.Vnode<ComponentAttrs, this>): Mithril.Children {
    return (
      <div className="IndexPage">
        {IndexPage.prototype.hero()}
        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <div className="IndexPage-results sideNavOffset">
              <h1 className="glostitle">
                {app.translator.trans('justoverclock-profile-stories.forum.globalStoriesTitle')}
              </h1>
              <div className="containDef">
                test
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
