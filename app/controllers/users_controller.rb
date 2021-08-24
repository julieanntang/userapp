class UsersController < ApplicationController
  def index
    puts "index called"
    users = User.all
    render component: "Users", props: { users: users }
  end

  def new
    render component: "NewUser"
  end

  def create
    user = User.new(user_params)
    if user.save
      #go back to index
      redirect_to users_path
    else
      #puts invalid input
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :age)
  end
end
