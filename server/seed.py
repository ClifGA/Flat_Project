from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, User, Education, Skill, UserEducationCart, UserSkillCart


with app.app_context():
    db.drop_all()
    db.create_all()

    test_user = User(first_name="Clifton", last_name="test", email="clifga@gmail.com", phone=1234567890, address="test", admin=True, job_title="test", status="test", DOB='1/1/2020')
    db.session.add(test_user)
    db.session.commit()

    test_edu = Education(degree="Computer Engineering", institution="CUNY City Tech", year_completed=2017)
    test_edu2 = Education(degree="Computer Science", institution="Flatiron School", year_completed=2023)
    test_edu3 = Education(degree="Electrical Engineering", institution="CUNY City College", year_completed=2015)
    db.session.add(test_edu2)
    db.session.add(test_edu)
    db.session.add(test_edu3)
    db.session.commit()

    test_skill = Skill(skill_name="React", proficiency="Expert")
    test_skill2 = Skill(skill_name="Python", proficiency="Expert")
    test_skill3 = Skill(skill_name="SQL Alchemy", proficiency="Expert")
    test_skill4 = Skill(skill_name="Flask", proficiency="Expert")
    test_skill5 = Skill(skill_name="JavaScript", proficiency="Expert")
    db.session.add(test_skill)
    db.session.add(test_skill2)
    db.session.add(test_skill3)
    db.session.add(test_skill4)
    db.session.add(test_skill5)
    db.session.commit()

    user_edu_cart = UserEducationCart(user=test_user, education=test_edu)
    user_edu_cart2 = UserEducationCart(user=test_user, education=test_edu2)
    user_edu_cart3 = UserEducationCart(user=test_user, education=test_edu3)

    db.session.add(user_edu_cart)
    db.session.add(user_edu_cart2)
    db.session.add(user_edu_cart3)
    db.session.commit()

    user_skill_cart = UserSkillCart(user=test_user, skill=test_skill)
    user_skill_cart2 = UserSkillCart(user=test_user, skill=test_skill2)
    user_skill_cart3 = UserSkillCart(user=test_user, skill=test_skill3)
    user_skill_cart4 = UserSkillCart(user=test_user, skill=test_skill4)
    user_skill_cart5 = UserSkillCart(user=test_user, skill=test_skill5)
    db.session.add(user_skill_cart)
    db.session.add(user_skill_cart2)
    db.session.add(user_skill_cart3)
    db.session.add(user_skill_cart4)
    db.session.add(user_skill_cart5)
    db.session.commit()
