class Api::CardsController < ApplicationController
	def create
		new_card = card_params[:card].merge({ list_id: card_params[:list_id]}) 
		@card = Card.new(new_card)

		if !@card.save
			return render 'shared/error', status: :unprocessable_entity
		end

		render :create, :status => 201 
	end

	def show
    @card = Card.find_by_id(params[:id])

		return render :json => { :error => 'not found' }, :status => 404 if @card.nil?
  end
  
  def update
    @card = Card.find_by_id(params[:id])

    return render :json => { :error => 'not found' }, :status => 404 if @card.nil?

    @card.assign_attributes(update_card_params)

    ActiveRecord::Base.transaction do 
      create_actions
      if @card.save 
        render :update
      else
        render 'shared/error', status: :unprocessable_entity
      end
    end

    rescue ActionController::ParameterMissing
      @error = "Don't send empty card!"
      render 'shared/error', status: :unprocessable_entity
  end

	private

	def card_params
		params.permit(:list_id, :card => :title)
  end
  
  def update_card_params
    params.require(:card).permit(:title,
      :list_id,
      :position,
      :description,
      :completed,
      :archived,
      :due_date,
      :labels => [])
  end

  def create_actions
    if @card.due_date_changed?
      if @card.due_date_was
        if @card.due_date
          @card.actions.create!(description: "Changed due date to #{@card.due_date}")
        else
          @card.actions.create!(description: "Removed due date")
        end
      else
        @card.actions.create!(description: "Added due date to #{@card.due_date}")
      end
    end

    if @card.completed_changed?
      if @card.completed
        @card.actions.create!(description: "Marked completed")
      else
        @card.actions.create!(description: "Marked incomplete")
      end
    end

    if @card.title_changed?
      @card.actions.create!(description: "Title changed to #{@card.title}")
    end

    if @card.list_id_changed?
      @card.actions.create!(description: "Moved to list #{@card.list.title}")
    end

    if @card.archived_changed?
      if @card.archived
        @card.actions.create!(description: "Archived")
      else
        @card.actions.create!(description: "Unarchived")
      end
    end
  end
end