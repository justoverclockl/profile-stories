import Component, { ComponentAttrs } from 'flarum/common/Component';
import Mithril from 'mithril';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import app from 'flarum/forum/app';
import { ApiStoryResponse } from '../types';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import CompleteStoryModal from "../components/modals/CompleteStoryModal";

export default class GlobalStories extends Component {
  public loading: boolean = false;
  public globalStories: ApiStoryResponse | null = null;

  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
    this.getStories();
  }

  getStories(url = `${app.forum.attribute('apiUrl')}/global-stories`) {
    this.loading = true;

    app
      .request({
        method: 'GET',
        url,
      })
      .then((res) => {
        this.globalStories = res as ApiStoryResponse;
        m.redraw();
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
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
              <h1 style={{ margin: 0 }} className="glostitle">
                {app.translator.trans('justoverclock-profile-stories.forum.globalStoriesTitle')}
              </h1>
              {this.loading && <LoadingIndicator />}
              {!this.loading && this.globalStories && this.globalStories.data.length <= 0 && (
                <p className="global-stories-description">{app.translator.trans('justoverclock-profile-stories.forum.globalStoriesEmpty')}</p>
              )}
              {!this.loading && this.globalStories && this.globalStories.data.length > 0 && (
                <div>
                  <p className="global-stories-description">{app.translator.trans('justoverclock-profile-stories.forum.globalStoriesDescription')}</p>
                  <div className="stories-all">
                    {!this.loading &&
                      this.globalStories &&
                      this.globalStories.data.map((story) => (
                          <div
                            onclick={() => app.modal.show(CompleteStoryModal, { story })}
                            className="story-item"
                            style={{
                              backgroundImage: `url(${story.attributes.imgUrl})`,
                              backgroundSize: 'cover',
                            }}
                          >
                            <div className="story-text-wrapper-global">
                              <div className='global-stories-details'>
                                <div className='Avatar gs-avatar'>
                                  <i class={`fas fa-user`}></i>
                                </div>
                                <div>{story.attributes.username}</div>
                              </div>
                              <h3>
                                {story.attributes.title}
                              </h3>
                            </div>
                          </div>
                      ))}
                  </div>
                </div>
              )}
              {!this.loading && this.globalStories && this.globalStories.data.length > 15 && (
                <div className="user-story-pagination">
                  <button
                    disabled={this.globalStories && this.globalStories?.data.length <= 19}
                    class="Button"
                    onclick={() => this.getStories(this.globalStories?.links.prev)}
                  >
                    {app.translator.trans('justoverclock-profile-stories.forum.prevPage')}
                  </button>
                  <button
                    disabled={this.globalStories && this.globalStories?.data.length <= 19}
                    class="Button"
                    onclick={() => this.getStories(this.globalStories?.links.next)}
                  >
                    {app.translator.trans('justoverclock-profile-stories.forum.nextPage')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
