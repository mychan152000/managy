class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)

    if @list.save
      render :create
    else
      @error = @list.errors.full_messages.join(', ')
      render 'shared/error', status: :unprocessable_entity
    end

    rescue ActionController::ParameterMissing
      @error = "Invalid list data provided"
      render 'shared/error', status: :unprocessable_entity
  end

  def update
    @list = List.find_by_id(params[:id])

    return render :json => { :error => 'not found' }, :status => 404 if @list.nil?

    if !@list.update(title: params[:title])
      return render 'shared/error', status: :unprocessable_entity
    end
  end

  def list_params
    { board_id: params[:board_id], title: params[:list][:title] }

    # params.permit(:board_id)
    # params.require(:list).permit(:title)
  end
end