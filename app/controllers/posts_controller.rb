class PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: "DESC")
  end

  def create
    Post.create(content: params[:content])
    redirect_to action: :index
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

