class Api::CommentsController < ApplicationController
  def create
    p comment_params
    return render 'shared/error', status: :not_found unless Card.find_by_id(comment_params[:card_id])
    
    new_comment = comment_params[:comment].merge({ card_id: comment_params[:card_id]})

    @comment = Comment.new(new_comment)

		if !@comment.save
			return render 'shared/error', status: :unprocessable_entity
		end

		render :create, :status => 201
  end

  private

  def comment_params
		params.permit(:card_id, :comment => :text)
  end
end