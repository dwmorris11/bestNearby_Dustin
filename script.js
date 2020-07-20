import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 500 }, // below normal load
    // { duration: '2s', target: 1500 },
    // { duration: '2s', target: 2000 }, // normal load
    // { duration: '2s', target: 3000 },
    // { duration: '2s', target: 4000 }, // around the breaking point
    // { duration: '5s', target: 5000 },
    // { duration: '5s', target: 6000 }, // beyond the breaking point
    // { duration: '5s', target: 3000 },
    // { duration: '5s', target: 1000 }, // scale down. Recovery stage.
  ]
};

export default function () {
  const BASE_URL = 'http://localhost:3003/';
  const END_POINT = '/bestNearby/api/nearbyattractions';

  const start = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
  let id = '0' + String(start);
  let url = BASE_URL + id + END_POINT;
  let responses = http.get(url);
  check(responses, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(.25);
};
