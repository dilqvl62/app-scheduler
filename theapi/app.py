from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://' + os.getenv("MYSQL_DATABASE_USER") + ':' + os.getenv("MYSQL_DATABASE_PASSWORD") + '@' + os.getenv("MYSQL_DATABASE_HOST") + '/' + os.getenv("MYSQL_DATABASE_DB")
db = SQLAlchemy(app)
db.Model.metadata.reflect(
    bind=db.engine, schema=os.getenv("MYSQL_DATABASE_DB"))

CORS(app)
cors = CORS(app, resources={
    "/*": {
        "origins": "*"
    }
})

from resources.instructor import Instructors
api.add_resource(Instructors, '/instructors')
