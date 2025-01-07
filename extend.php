<?php

/*
 * This file is part of justoverclock/profile-stories.
 *
 * Copyright (c) 2024 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\ProfileStories;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\User\User;
use Justoverclock\ProfileStories\Controller\CreateStoryController;
use Justoverclock\ProfileStories\Controller\GetStories;
use Justoverclock\ProfileStories\Controller\GlobalStories;
use Justoverclock\ProfileStories\Event\StoryCreated;
use Justoverclock\ProfileStories\Listener\SendNotificationOnNewStory;
use Justoverclock\ProfileStories\Model\Story;
use Justoverclock\ProfileStories\Notification\NewStoryNotificationBlueprint;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->route('/all-users-stories', 'justoverclock/profile-stories'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Model(User::class))
        ->relationship('stories', function (User $user) {
            return $user->hasMany(Story::class);
        }),

    (new Extend\Model(Story::class))
        ->belongsTo('user', User::class, 'user_id'),

    (new Extend\Notification())
        ->type(NewStoryNotificationBlueprint::class, UserSerializer::class, ['newStory']),

    (new Extend\Routes('api'))
        ->get('/stories', 'stories.list', GetStories::class)
        ->get('/global-stories', 'globalstories.index', GlobalStories::class)
        ->post('/create-story', 'create.story', CreateStoryController::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(AddStoryAttributes::class),

    (new Extend\Event())
        ->listen(StoryCreated::class, SendNotificationOnNewStory::class, 'handle'),
];
