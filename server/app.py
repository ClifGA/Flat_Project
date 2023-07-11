from flask import Flask, session, abort, redirect, request, jsonify , url_for
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from models import db, User, Timesheet, Timesheetcart
import os


app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL') 
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)

class UserAccount(Resource):
    def get(self, email):
        try:
            users = User.query.filter_by(email = email).first()
            print(users.to_dict())
            return users.to_dict(), 200
        except:
            return {'message': 'User not found'}, 404
    def patch(self, email):
        user = User.query.filter_by(email = email).first()
        for key, value in request.json.items():
            setattr(user, key, value)
        db.session.commit()
        
        return user.to_dict()
api.add_resource(UserAccount, '/users/<string:email>')

class UserList(Resource):
    def get(self):
        try:
            users = User.query.all()
            return [user.to_dict() for user in users]
        except:
            return {'message': 'User not found'}, 404
    def post(self):
        try:
            user = User(**request.json)
            db.session.add(user)
            db.session.commit()
            return user.to_dict(), 201
        except:
            return {'message': 'User not found'}, 404
api.add_resource(UserList, '/users')

class PostTimesheetCartbyUser(Resource):
    def get(self, user_id):
        timesheet = Timesheetcart.query.filter_by(user_id = user_id).all()
        return [timesheet.to_dict() for timesheet in timesheet]
    def post(self, user_id):
        try:
            addedtimesheet = Timesheet(**request.json)
            db.session.add(addedtimesheet)
            db.session.commit()
            addedtimesheetcart = Timesheetcart(user_id = user_id, timesheet_id = addedtimesheet.id)
            db.session.add(addedtimesheetcart)
            db.session.commit()
            return addedtimesheetcart.to_dict(), 201
        except:
            return {'message': 'Timesheet not found'}, 404
api.add_resource(PostTimesheetCartbyUser, '/users/<int:user_id>/timesheets')
    