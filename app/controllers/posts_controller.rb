class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end

  def create
    post = Post.create(content: params[:content], checked: false)
    # 発展4-4 入力された情報のcontentと、未読の状態で表示したいのでcheckedをfalseでデータベースに保存
    render json:{ post: post }
    # 発展4-4 レスポンスはjsonにする記述
    # post: postの意味はpostテーブルの変数postという意味？
  end

  def checked
    post = Post.find(params[:id])
    if post.checked 
    # 発展4-2 checkedプロパティはチェックボックスが選択されていればtrueを、そうでなければfalseを返す
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
    # 発展4-2 item = Post.find(params[:id])で取得し直し、render json:{ post: item }でJSON形式（データ）としてchecked.jsに返却

  end
end

