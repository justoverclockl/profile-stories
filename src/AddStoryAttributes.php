<?php

namespace Justoverclock\ProfileStories;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class AddStoryAttributes
{
    public function __invoke(UserSerializer $serializer, User $user, array $attributes): array
    {
        $actor = $serializer->getActor();

        $attributes['canCreateStory'] = $actor->can('createStory', $user);
        $attributes['storyCount'] = $actor->stories()->count();
        $attributes['canViewGlobalStories'] = $actor->can('viewStory', $user);

        return $attributes;
    }
}
