class UsersController < ApplicationController
  def index
    users = User.all
    render component: "Users", props: { users: users }
  end

  def new
    render component: "NewUser"
  end
end
