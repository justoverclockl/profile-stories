import app from 'flarum/admin/app';

app.initializers.add('justoverclock/profile-stories', () => {
  app.extensionData
    .for('justoverclock-profile-stories')
    .registerPermission(
      {
        icon: 'fas fa-book',
        label: app.translator.trans('justoverclock-profile-stories.admin.permission.createStory'),
        permission: 'createStory',
        allowGuest: false,
      },
      'start'
    )
    .registerPermission(
      {
        icon: 'fas fa-book',
        label: app.translator.trans('justoverclock-profile-stories.admin.permission.viewStory'),
        permission: 'viewStory',
        allowGuest: true
      },
      'view'
    )
});
