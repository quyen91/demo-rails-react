module Api
  module V1
    class TodosController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        render json: Todo.all
      end

      def show
        respond_with assign_todo
      end

      def create
        @todo = Todo.new resource_params
        if @todo.save
          render json: @todo
        end
      end

      def update
        @todo = assign_todo
        if @todo.update resource_params
          render json: @todo
        else
          render json: 'Error!'
        end
      end

      def destroy
        Todo.destroy params[:id]
        render json: 'Success', status: :ok
      end

      private
      def resource_params
        params.require(:todo).permit(:title, :completed)
      end

      def assign_todo
        Todo.find params[:id]
      end
    end
  end
end