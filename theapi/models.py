from app import db
import os
class InstructorModel(db.Model):
    __table__ = db.Model.metadata.tables[os.getenv("MYSQL_DATABASE_DB") + '.instructor']
