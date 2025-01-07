import UserPage, { IUserPageAttrs } from 'flarum/forum/components/UserPage';
import Mithril from 'mithril';
import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import listItems from 'flarum/common/helpers/listItems';
import { extend } from 'flarum/common/extend';
import ListUserStories from '../components/ListUserStories';

export interface StoriesPageAttrs extends IUserPageAttrs {
  username: string;
}

export default class UserStories extends UserPage<StoriesPageAttrs> {
  public heroBg = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-profile-stories/stories-header.png';

  oninit(vnode: Mithril.Vnode<IUserPageAttrs, this>) {
    super.oninit(vnode);
    this.loadUser(this.attrs.username ?? null);
  }

  view(): JSX.Element {
    return (
      <div className="UserPage">
        <div className="Hero UserHero stories-hero">
          <img className="hero-bg" src={this.heroBg} alt="user stories" />
          <h1 className="hero-title">
            {this.attrs.username}
            {app.translator.trans('justoverclock-profile-stories.forum.heroTitle')}
          </h1>
        </div>
        {this.user ? (
          <div className="container">
            <div className="sideNavContainer">
              <nav className="sideNav UserPage-nav">
                <ul>{listItems(this.sidebarItems().toArray())}</ul>
              </nav>
              <div className="sideNavOffset UserPage-content">
                <ListUserStories userId={this.user.id()} user={this.user} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
