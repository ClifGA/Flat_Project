from flask import Flask, session, abort, redirect, request, jsonify , url_for
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import db, User


app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)

class UserAccount(Resource):
    def get(self, email):
        # try:
        users = User.query.filter_by(email = email).first()
        print(users.to_dict())
        return users.to_dict(), 200
        # except:
        #     return {'message': 'User not found'}, 404
    def patch(self, email):
        user = User.query.filter_by(email = email).first()
        for key, value in request.json.items():
            setattr(user, key, value)
        db.session.commit()
        
        return user.to_dict()
api.add_resource(UserAccount, '/users/<string:email>')

class UserList(Resource):
    def get(self):
        users = User.query.all()
        return [user.to_dict() for user in users]
    def post(self):
        user = User(**request.json)
        db.session.add(user)
        db.session.commit()
        return user.to_dict(), 201
api.add_resource(UserList, '/users')




if __name__ == "__main__":
    app.run(debug=True, port=5000)

