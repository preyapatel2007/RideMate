const TRANSITIONS = {
  REQUESTED: ['ACCEPTED', 'REJECTED', 'CANCELLED_BY_RIDER', 'CANCELLED_BY_DRIVER'],
  ACCEPTED: ['DRIVER_EN_ROUTE', 'CANCELLED_BY_RIDER', 'CANCELLED_BY_DRIVER'],
  DRIVER_EN_ROUTE: ['STARTED', 'CANCELLED_BY_RIDER', 'CANCELLED_BY_DRIVER', 'NO_SHOW'],
  STARTED: ['COMPLETED'],
  COMPLETED: [], REJECTED: [], CANCELLED_BY_RIDER: [], CANCELLED_BY_DRIVER: [], NO_SHOW: []
};
function canTransitionRide(from, to) { return (TRANSITIONS[from] || []).includes(to); }
function canAccessRides({activeSubscription, verified, backgroundApproved=true}) { return Boolean(activeSubscription && verified && backgroundApproved); }
module.exports = { TRANSITIONS, canTransitionRide, canAccessRides };
