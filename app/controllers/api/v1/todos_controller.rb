module Api
  module V1
    class TodosController < Api::V1::ApplicationController

      def index
        render json: Todo.all.order(updated_at: :desc).limit(10)
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

      def search
        keyword = params[:keyword]
        todos = Todo.where("name LIKE ?", "%#{keyword}%").limit(10)
        render json: todos
      end

      private
      def resource_params
        params.require(:todo).permit(:name)
      end

      def assign_todo
        Todo.find params[:id]
      end
    end
  end
end