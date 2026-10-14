const fs = require('node:fs');
const path = require('node:path');
const file = path.join(__dirname, '..', 'data', 'db.json');
const initial = () => ({
  users: [
    {id:'u-rider',role:'rider',name:'Demo Rider',email:'rider@ridemate.demo',phone:'+919876543210',password:'RideMate123!',photoUrl:'',verifiedStatus:'approved',phoneVerified:true,ratingAvg:4.8,emergencyContacts:[{name:'Family Contact',phone:'+919999999999'}],subscriptionId:'sub-rider',blocked:false,createdAt:new Date().toISOString()},
    {id:'u-driver',role:'driver',name:'Demo Driver',email:'driver@ridemate.demo',phone:'+919876543211',password:'RideMate123!',photoUrl:'',verifiedStatus:'approved',phoneVerified:true,ratingAvg:4.9,emergencyContacts:[],subscriptionId:'sub-driver',blocked:false,createdAt:new Date().toISOString()},
    {id:'u-admin',role:'admin',name:'Ride Mate Admin',email:'admin@ridemate.demo',phone:'+919876543212',password:'Admin123!',photoUrl:'',verifiedStatus:'approved',phoneVerified:true,ratingAvg:5,emergencyContacts:[],blocked:false,createdAt:new Date().toISOString()}
  ],
  driverProfiles:[{userId:'u-driver',licenceNo:'DEMO-GJ-2026-001',vehicleId:'veh-1',documents:[{type:'Driving Licence',fileName:'demo-driving-licence.pdf',status:'approved'},{type:'Vehicle RC',fileName:'demo-vehicle-rc.pdf',status:'approved'},{type:'Insurance',fileName:'demo-insurance.pdf',status:'approved'},{type:'ID Proof',fileName:'demo-id-proof.pdf',status:'approved'}],backgroundCheckStatus:'Approved',isOnline:true}],
  vehicles:[{id:'veh-1',driverId:'u-driver',number:'GJ 16 AB 1234',model:'Maruti Suzuki Swift',type:'Car',seats:3}],
  nodalPoints:[
    {id:'node-1',name:'SVMIT Campus Gate',lat:21.7057,lng:72.9959,city:'Bharuch',isActive:true},
    {id:'node-2',name:'Bharuch Railway Station',lat:21.7051,lng:72.9959,city:'Bharuch',isActive:true},
    {id:'node-3',name:'Bharuch Bus Terminal',lat:21.7044,lng:73.0002,city:'Bharuch',isActive:true},
    {id:'node-4',name:'Zadeshwar Crossroads',lat:21.7191,lng:73.0068,city:'Bharuch',isActive:true},
    {id:'node-5',name:'Golden Bridge Circle',lat:21.7103,lng:73.0105,city:'Bharuch',isActive:true}
  ],
  ridePosts:[{id:'post-1',driverId:'u-driver',originNodeId:'node-1',destNodeId:'node-2',departureTime:new Date(Date.now()+35*60000).toISOString(),seatsTotal:3,seatsAvailable:2,farePerSeat:45,status:'OPEN',rideType:'POOL',createdAt:new Date().toISOString()}],
  bookings:[],payments:[],subscriptions:[{id:'sub-rider',userId:'u-rider',planId:'rider-monthly',startAt:new Date(Date.now()-86400000).toISOString(),endAt:new Date(Date.now()+30*86400000).toISOString(),status:'ACTIVE',paymentMethod:'DEMO'},{id:'sub-driver',userId:'u-driver',planId:'driver-monthly',startAt:new Date(Date.now()-86400000).toISOString(),endAt:new Date(Date.now()+30*86400000).toISOString(),status:'ACTIVE',paymentMethod:'DEMO'}],
  plans:[{id:'rider-weekly',role:'rider',name:'Rider Weekly',price:99,durationDays:7},{id:'rider-monthly',role:'rider',name:'Rider Monthly',price:299,durationDays:30},{id:'driver-monthly',role:'driver',name:'Driver Monthly',price:499,durationDays:30}],
  ratings:[],messages:[],sosEvents:[],supportTickets:[],otpCodes:[],notifications:[],auditLogs:[],blockedUsers:[],liveLocations:[],fareConfig:{min:10,max:1000},settings:{demoMode:true}
});
let db;
function save(){fs.writeFileSync(file, JSON.stringify(db,null,2));}
function init(){if(!fs.existsSync(path.dirname(file)))fs.mkdirSync(path.dirname(file),{recursive:true}); if(fs.existsSync(file)){try{db=JSON.parse(fs.readFileSync(file,'utf8'));}catch{db=initial();save();}}else{db=initial();save();} return db;}
function get(){if(!db)init();return db;}
function id(prefix='id'){return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;}
module.exports={init,get,save,id};
