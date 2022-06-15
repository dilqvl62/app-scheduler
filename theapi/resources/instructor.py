from flask import jsonify, make_response
from flask_restful import Resource, Api
from flask_restful import reqparse
from models import InstructorModel
import app


class Instructors(Resource):
    def get(self):
        try:
            rows = InstructorModel.query.all()
            result = []
            for instructor in rows:
                result.append({'instructor_id': instructor.instructor_id,
                               'instructor_name_first': instructor.instructor_name_first,
                               'instructor_name_last': instructor.instructor_name_last,
                               'min_course_count': instructor.min_course_count,
                               'max_course_count': instructor.max_course_count}
                              )
            return make_response(jsonify(result), 200)
        except Exception as e:
            return {'Message': 'Error: ' + str(e)}, 500

    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('instructor_name_first', type=str),
            parser.add_argument('instructor_name_last', type=str),
            parser.add_argument('min_course_count', type=int),
            parser.add_argument('max_course_count', type=int)
            args = parser.parse_args()

            if (not (args['instructor_name_first'] and args['instructor_name_last'] and args['min_course_count'] and args['max_course_count'])):
                return make_response(jsonify({'Message': 'Error: Bad Request'}), 400)
            new_instructor = InstructorModel(instructor_name_first=args['instructor_name_first'], instructor_name_last=args[
                'instructor_name_last'], min_course_count=args['min_course_count'], max_course_count=args['max_course_count'])
            app.db.session.add(new_instructor)
            app.db.session.commit()
            return make_response(jsonify({'Message': 'Success: Instructor created'}), 200)
        except Exception as e:
            return {'Message': 'Error: ' + str(e)}, 500

    def delete(slef):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('instructor_id', type=int),
            parser.add_argument('instructor_name_first', type=str),
            parser.add_argument('instructor_name_last', type=str),
            args = parser.parse_args()

            if(args['instructor_id']):
                instructor = InstructorModel.query.filter_by(
                    instructor_id=args['instructor_id']).first()
            elif (args['instructor_name_first'] and args['instructor_name_last']):
                instructor = InstructorModel.query.filter_by(
                    instructor_name_first=args['instructor_name_first'], instructor_name_last=args['instructor_name_last']).first()
            else:
                return make_response(jsonify({'Message': 'Error: Bad Request'}), 400)

            if instructor is None:
                return make_response(jsonify({'Message': 'Error: Instructor not found'}), 404)

            app.db.session.delete(instructor)
            app.db.session.commit()
            return make_response(jsonify({'Message': 'Success: Instructor deleted'}), 200)
        except Exception as e:
            return {'Message': 'Error: ' + str(e)}, 500
