<?php

namespace Justoverclock\ProfileStories\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;
use Justoverclock\ProfileStories\Model\Story;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Exception\InvalidParameterException;

class DeleteStoryController extends AbstractDeleteController
{

    protected function delete(ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);
        $isAllowed = $actor->can('deleteStory');
        $storyId = Arr::get($request->getQueryParams(), 'id');

        if (!$storyId) {
            throw new InvalidParameterException();
        }

        if (! $isAllowed && $storyId) {
            throw new PermissionDeniedException();
        }


        return Story::query()->findOrFail($storyId)->delete();
    }
}
