const test = require('node:test');
const assert = require('node:assert/strict');
const {canTransitionRide, canAccessRides} = require('../src/domain');
test('ride lifecycle permits the expected driver sequence',()=>{
  assert.equal(canTransitionRide('ACCEPTED','DRIVER_EN_ROUTE'),true);
  assert.equal(canTransitionRide('DRIVER_EN_ROUTE','STARTED'),true);
  assert.equal(canTransitionRide('STARTED','COMPLETED'),true);
});
test('ride lifecycle rejects invalid transitions',()=>{
  assert.equal(canTransitionRide('REQUESTED','COMPLETED'),false);
  assert.equal(canTransitionRide('COMPLETED','STARTED'),false);
  assert.equal(canTransitionRide('REJECTED','ACCEPTED'),false);
});
test('booking/posting requires subscription and verification',()=>{
  assert.equal(canAccessRides({activeSubscription:true,verified:true,backgroundApproved:true}),true);
  assert.equal(canAccessRides({activeSubscription:false,verified:true,backgroundApproved:true}),false);
  assert.equal(canAccessRides({activeSubscription:true,verified:false,backgroundApproved:true}),false);
  assert.equal(canAccessRides({activeSubscription:true,verified:true,backgroundApproved:false}),false);
});
