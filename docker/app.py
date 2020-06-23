import json
from flask import Flask, request
from shapely.geometry import shape, Point

app = Flask(__name__)

@app.route('/', methods=['GET'])
def find_wmu():
    latitude = 0
    longitude = 0

    if 'lat' in request.args:
      latitude = request.args.get('lat', float)
    else:
      return json.dumps({'results': '', 'error': 'Latitude is required.'})

    if 'lng' in request.args:
      longitude = request.args.get('lng', float)
    else:
      return json.dumps({'results': '', 'error': 'Longitude is required.'})

    with open('code/ny_wmu.geojson') as f:
      js = json.load(f)

    point = Point(float(latitude), float(longitude))

    for feature in js['features']:
        polygon = shape(feature['geometry'])
        if polygon.contains(point):
            return json.dumps({'results': feature['properties']['Name'], 'error': ''})

    return json.dumps({'results': '', 'error': 'A WMU was not found.'})

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
