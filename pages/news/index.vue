<template>
  <div>
    <h2>News Index Page</h2>
    <p>NewsID:{{$route.params.newsId}}</p>

    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/news/123">News-1</a></li>
      <li><a href="/news/456">News-2</a></li>
      <li><nuxt-link :to="{name: 'news-id', params:{id: 789, title: 'penicillin789'}}">News-3</nuxt-link></li>
      <li><nuxt-link  :to="{name: 'news-id', params:{id: 479, title: 'penicillin79'}}">News-4</nuxt-link ></li>
      
    </ul>
  </div>
</template>
