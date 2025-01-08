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

        $attributes['canViewGlobalStories'] = $actor->can('viewStory', $user);
        $attributes['canDeleteStory'] = $actor->can('deleteStory', $user);
        $attributes['canEditStory'] = $actor->can('editStory', $user);

        if ($actor->isGuest()) {
            $attributes['storyCount'] = 0;
        } else {
            $attributes['storyCount'] = $actor->stories()->count();
        }

        return $attributes;
    }
}
