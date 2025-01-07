<?php

namespace Justoverclock\ProfileStories\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;
use Justoverclock\ProfileStories\Model\Story;
use Justoverclock\ProfileStories\Serializer\StorySerializer;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateStoryController extends AbstractCreateController
{
    public $serializer = StorySerializer::class;

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $isAllowed = $actor->can('createStory');
        $data = $request->getParsedBody();

        if (!$isAllowed) {
            return new PermissionDeniedException();
        }

        $story = new Story();
        $story->user_id = $actor->id;
        $story->title = Arr::get($data, 'data.attributes.title');
        $story->img_url = Arr::get($data, 'data.attributes.img_url');
        $story->cta = Arr::get($data, 'data.attributes.cta');
        $story->content_icon = Arr::get($data, 'data.attributes.content_icon');
        $story->content_text = Arr::get($data, 'data.attributes.content_text');
        $story->content_cta = Arr::get($data, 'data.attributes.content_cta');
        $story->content_link = Arr::get($data, 'data.attributes.content_link');
        $story->username = Arr::get($data, 'data.attributes.username');

        $story->save();

        return $story;
    }
}
