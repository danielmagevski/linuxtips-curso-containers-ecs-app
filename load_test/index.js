import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '3000s',
};

const params = {
    headers: {
      'Content-Type': 'application/json',
      'Host': 'chip.linuxtips.demo'
    },
  };
export default function () {
  http.get('http://linuxtips-ecs-cluster-ingress-410880563.us-east-1.elb.amazonaws.com/system', params);
  
}