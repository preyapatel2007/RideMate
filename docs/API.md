# Ride Mate REST API reference

Base URL: `http://localhost:3000/api`. Authenticated endpoints require `Authorization: Bearer <token>`. JSON requests use `Content-Type: application/json`; document endpoints use `multipart/form-data`.

## Health and authentication
- `GET /health`
- `GET /demo-accounts` — local demo credentials
- `POST /auth/signup` — `{name,email,phone,password,role}`
- `POST /auth/login` — `{email|phone,password}`
- `POST /auth/logout`
- `POST /auth/forgot-password` — demo reset code only unless delivery provider is configured
- `POST /auth/request-otp`, `POST /auth/verify-otp`
- `GET /me`, `PATCH /me`

## Nodal points and rides
- `GET /nodal-points`, `GET /nodal-points/nearest?lat=&lng=`
- `GET /rides/available?originNodeId=&destNodeId=&rideType=`
- `POST /driver/online` — `{isOnline}`
- `POST /driver/vehicle` — `{number,model,seats,type}`
- `POST /driver/documents` — multipart `documents` and comma-separated `types`
- `POST /driver/rides` — `{originNodeId,destNodeId,departureTime,seatsTotal,farePerSeat,rideType}`
- `GET /driver/rides`
- `POST /bookings` — `{ridePostId,pickupNodeId,dropNodeId,rideType}`
- `GET /bookings/mine`, `GET /bookings/:id`
- `POST /bookings/:id/decision` — `{decision:"accept"|"reject"}`
- `POST /bookings/:id/status` — `{status:"DRIVER_EN_ROUTE"|"STARTED"|"COMPLETED"}`
- `POST /bookings/:id/cancel` — `{reason}`
- `POST /bookings/:id/payment` — `{method:"CASH"|"UPI"|"CARD"}`
- `POST /bookings/:id/location`, `GET /bookings/:id/location`
- `POST /bookings/:id/share-link`
- `GET /share/:token` — limited public trip-sharing payload while ride is active

## Subscriptions, feedback and communication
- `GET /subscriptions/plans`, `GET /subscriptions/mine`
- `POST /subscriptions/purchase` — `{planId,method}`
- `POST /ratings` — `{bookingId,stars,comment}`
- `GET /ratings/user/:id`
- `GET /messages/:bookingId`, `POST /messages/:bookingId` — `{text}`
- `GET /notifications`, `PATCH /notifications/:id/read`
- `POST /support` — `{category,description}`
- `GET /safety/tips`
- `POST /sos` — `{bookingId?,lat?,lng?,note?}`
- `POST /users/:id/report` — `{reason,block?}`

## Admin (admin role required)
- `GET /admin/overview`, `GET /admin/users`, `PATCH /admin/users/:id`
- `GET /admin/verifications`, `POST /admin/verifications/:userId` — `{status:"approved"|"rejected"|"pending"}`
- `GET /admin/rides`
- `GET /admin/nodal-points`, `POST /admin/nodal-points`, `PATCH /admin/nodal-points/:id`
- `PATCH /admin/fare-config` — `{min,max}`
- `GET /admin/support`, `PATCH /admin/support/:id`
- `GET /admin/sos`, `PATCH /admin/sos/:id`
- `GET /admin/reports`, `GET /admin/payments`, `GET /admin/settings`

## Error format
Errors are JSON objects such as `{ "error": "Human-readable explanation" }`. HTTP status codes include 400 for invalid input, 401 for missing/invalid authentication, 403 for role/access restrictions, 404 for missing resources and 409 for invalid lifecycle transitions or conflicts.
