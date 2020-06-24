import json
from flask import Flask, request, jsonify, make_response
from shapely.geometry import shape, Point

app = Flask(__name__)

@app.route('/', methods=['GET'])
def find_wmu():
    latitude = 0
    longitude = 0

    if 'lat' in request.args:
      latitude = request.args.get('lat', float)
    else:
      return make_response(jsonify({'results': "", 'error': "lat is required"}), 422)

    if 'lng' in request.args:
      longitude = request.args.get('lng', float)
    else:
      return make_response(jsonify({'results': "", 'error': "lng is required"}), 422)

    with open('code/ny_wmu.geojson') as f:
      js = json.load(f)

    point = Point(float(longitude), float(latitude))

    for feature in js['features']:
        polygon = shape(feature['geometry'])
        if polygon.contains(point):
        	return make_response(jsonify({'results': feature['properties']['Name'], 'error': False}), 200)

    return make_response(jsonify({'results': '', 'error': False}), 200)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
