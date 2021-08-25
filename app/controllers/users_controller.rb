class UsersController < ApplicationController
  def index
    puts "index called"
    users = User.all
    render component: "Users", props: { users: users }
  end

  def show
    user = User.find(params[:id])
    render component: "User", props: { user: user }
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

  def edit
    user = User.find(params[:id])
    render component: "EditUser", props: { user: user }
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      redirect_to users_path
    else
      #handle invalid input here
    end
  end

  def destroy
    user = User.find(params[:id]).delete
    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:name, :age)
  end
end
