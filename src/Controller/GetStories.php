<?php

namespace Justoverclock\ProfileStories\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Flarum\Query\QueryCriteria;
use Flarum\User\Filter\UserFilterer;
use Flarum\User\Search\UserSearcher;
use http\Exception\BadQueryStringException;
use Justoverclock\ProfileStories\Model\Story;
use Justoverclock\ProfileStories\Serializer\StorySerializer;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class GetStories extends AbstractListController
{
    public $serializer = StorySerializer::class;

    public $sortFields = [
        'createdAt'
    ];

    protected $filterer;
    protected $searcher;
    protected $url;
    public $limit = 9;
    public $maxLimit = 20;

    public function __construct(UserFilterer $filterer, UserSearcher $searcher, UrlGenerator $url)
    {
        $this->filterer = $filterer;
        $this->searcher = $searcher;
        $this->url = $url;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $filters = $this->extractFilter($request);
        $sort = $this->extractSort($request);
        $sortIsDefault = $this->sortIsDefault($request);
        $queryParams = $request->getQueryParams();
        $userId = $queryParams['userId'] ?? null;

        if (!$userId) {
            throw new BadQueryStringException();
        }

        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);
        $include = $this->extractInclude($request);

        $totalStories = Story::all()->count();

        $query = Story::with('user')
            ->where('user_id', $userId)
            ->skip($offset)
            ->take($limit)
            ->get();

        $criteria = new QueryCriteria($actor, $filters, $sort, $sortIsDefault);
        if (array_key_exists('q', $filters)) {
            $results = $this->searcher->search($criteria, $limit, $offset);
        } else {
            $results = $this->filterer->filter($criteria, $limit, $offset);
        }

        $document->addPaginationLinks(
            $this->url->to('api')->route('stories.list'),
            $request->getQueryParams(),
            $offset,
            $limit,
            $results->areMoreResults() ? null : 0
        );

        $results = $results->getResults();
        $this->loadRelations($results, $include, $request);

        $document->setMeta(
            [
                'total' => $totalStories,
                'totalPages' => ceil($totalStories / $limit)
            ]
        );

        $this->loadRelations($query, $include, $request);

        return $query;
    }
}
