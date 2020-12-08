class UserMailer < ApplicationMailer
    default from: 'from@example.com'

    def welcome_user(user)
        @user = user
        @url = 'http://localhost:3000/session/new'
        mail(to: user.email, subject: 'Welcome to 99 Cats!')
    end 

end
