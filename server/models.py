from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    gender = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True)
    img = db.Column(db.String(50))
    phone = db.Column(db.String(50))
    address = db.Column(db.String(50))
    admin = db.Column(db.Boolean, default=False)
    job_title = db.Column(db.String(50))
    status = db.Column(db.String(50))
    birthday = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    education_carts = db.relationship('UserEducationCart', backref='user', lazy=True)
    skill_carts = db.relationship('UserSkillCart', backref='user', lazy=True)
    timesheet_carts = db.relationship('Timesheetcart', backref='user', lazy=True)
    educations = association_proxy('education_carts', 'education')
    skills = association_proxy('skill_carts', 'skill')
    timesheets = association_proxy('timesheet_carts', 'timesheet')
    serialize_rules = ('-educations.user', '-skills.user', '-timesheets.user', '-educations.user_education_carts', '-skills.user_skill_carts', '-timesheets.timesheetcarts', )
    serialize_only = ('id', 'first_name', 'last_name', 'email', 'phone', 'address', 'gender', 'admin', 'job_title', 'status', 'birthday', 'educations', 'skills', 'timesheets','img')
    
    

class UserEducationCart(db.Model, SerializerMixin):
    __tablename__ = 'user_education_carts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    education_id = db.Column(db.Integer, db.ForeignKey('educations.id'))
    education = db.relationship('Education', backref='user_education_carts')

class UserSkillCart(db.Model, SerializerMixin):
    __tablename__ = 'user_skill_carts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    skill_id = db.Column(db.Integer, db.ForeignKey('skills.id'))
    skill = db.relationship('Skill', backref='user_skill_carts')

class Education(db.Model, SerializerMixin):
    __tablename__ = 'educations'

    id = db.Column(db.Integer, primary_key=True)
    degree = db.Column(db.String(50))
    institution = db.Column(db.String(50))
    year_completed = db.Column(db.Integer)

class Skill(db.Model, SerializerMixin):
    __tablename__ = 'skills'

    id = db.Column(db.Integer, primary_key=True)
    skill_name = db.Column(db.String(50))
    proficiency = db.Column(db.String(50))




class Timesheetcart(db.Model, SerializerMixin):
    __tablename__ = 'timesheetcarts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    timesheet_id = db.Column(db.Integer, db.ForeignKey('timesheets.id'))
    timesheet = db.relationship('Timesheet', backref='timesheetcarts')

    serialize_rules = ('-timesheetcarts.user', )


class Timesheet(db.Model, SerializerMixin):
    __tablename__ = 'timesheets'

    id = db.Column(db.Integer, primary_key=True)
    start_date = db.Column(db.String(50))
    end_date = db.Column(db.String(50))
    hours = db.Column(db.Integer)

    serialize_rules = ('-timesheetcarts.timesheet', )
    serialize_only = ('id', 'start_date', 'end_date', 'hours', )
