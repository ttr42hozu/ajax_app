Rails.application.routes.draw do
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
  get 'posts/:id', to: 'posts#checked'
  # 発展3-8 posts#checkedは何を示している？
  # コントローラーではなくchecked.jsにリクエストを振り分けている？
end
