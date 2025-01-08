import app from 'flarum/admin/app';

app.initializers.add('justoverclock/profile-stories', () => {
  app.extensionData
    .for('justoverclock-profile-stories')
    .registerPermission(
      {
        icon: 'fas fa-book-open',
        label: app.translator.trans('justoverclock-profile-stories.admin.permission.createStory'),
        permission: 'createStory',
        allowGuest: false,
      },
      'start'
    )
    .registerPermission(
      {
        icon: 'fas fa-book-open',
        label: app.translator.trans('justoverclock-profile-stories.admin.permission.viewStory'),
        permission: 'viewStory',
        allowGuest: true,
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-book-open',
        label: app.translator.trans('justoverclock-profile-stories.admin.permission.editStory'),
        permission: 'editStory',
        allowGuest: false,
      },
      'moderate'
    )
    .registerPermission(
      {
        icon: 'fas fa-book-open',
        label: app.translator.trans('justoverclock-profile-stories.admin.permission.deleteStory'),
        permission: 'deleteStory',
        allowGuest: false,
      },
      'moderate'
    );
});
