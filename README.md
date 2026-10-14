# Ride Mate — Connecting Journeys

A runnable MVP for the Ride Mate PRD: subscription-based shared commuting using fixed nodal points, transparent per-seat fares, verified accounts, rider/driver workflows, and an admin/Trust & Safety console. Initial demo data is seeded for Bharuch, Gujarat.

## Requirements
- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
cp .env.example .env
npm start
```

Open `http://localhost:3000`.

### Demo accounts

| Role | Email | Password |
|---|---|---|
| Rider | `rider@ridemate.demo` | `RideMate123!` |
| Driver | `driver@ridemate.demo` | `RideMate123!` |
| Admin | `admin@ridemate.demo` | `Admin123!` |

Demo passwords are hashed with Node's `scrypt` before being persisted. The local database is `data/db.json`; stop the server before manually editing it. Back it up before resetting data.

## MVP workflows

### Rider
1. Sign in as the demo rider.
2. Browse available routes or book a ride.
3. View My Rides, booking details, cancel, message during an active ride, record cash/UPI/card demo payment, and rate completed rides.
4. Manage trusted contacts, upload identity proof, verify phone using demo OTP, review safety tips, open support tickets, and trigger an SOS event.

### Driver
1. Sign in as the demo driver.
2. Post a route with departure, seats, ride type and fare per seat; fare guardrails are configurable by admin.
3. Accept/reject requests; move an accepted ride through Driver En Route → Start Trip → End Trip.
4. Review earnings, ratings, subscription, profile and vehicle details.

### Admin / Trust & Safety
1. Sign in as admin.
2. Manage accounts, approve/reject verification, monitor ride posts and bookings, create/disable nodal points, configure fare limits, review payment records, update support tickets and resolve SOS events.
3. Review operational reports, audit events and illustrative CO₂ savings.

## What's real vs demo

This repository is an end-to-end **local MVP**, not a production transport platform. It includes a working REST API, persistent local data, role checks, hashed passwords, input validation, document upload storage, subscription gating, ride state transitions, chat messages, notification records, SOS records, and share-link/live-location API endpoints.

The following need provider credentials, deployment and real-device testing before production use:
- SMS/phone OTP delivery and password reset delivery
- Razorpay/card/UPI payment processing, webhook signature verification and refunds
- Google Maps/Mapbox/OSM routing, map rendering, continuous device GPS and turn-by-turn navigation
- Firebase push notifications and true WebSocket event delivery (the MVP persists notification records and exposes polling APIs)
- Real emergency call/SMS dispatch and staffed 24/7 Trust & Safety response
- Third-party identity/background checks, encrypted object storage, production database, backups, monitoring and legal review

Do not use the demo for real rides, real payment collection or emergency response. The SOS UI explicitly tells users to call India's emergency number 112 when immediate help is needed.

## Architecture

- `public/` — responsive browser app for rider, driver and admin roles
- `src/server.js` — Express REST API and static hosting
- `src/store.js` — local JSON persistence and Bharuch seed data
- `src/domain.js` — ride lifecycle and subscription access rules
- `data/db.json` — created automatically on first start
- `uploads/` — uploaded identity/driver documents (local demo storage; do not expose publicly)
- `tests/` — automated domain tests
- `docs/API.md` — API endpoint reference
- `docs/schema.sql` — suggested PostgreSQL/PostGIS production schema baseline

For production, replace JSON persistence with PostgreSQL/PostGIS, add migrations, use Redis for active ride state, store uploads in a private object store, add rate limiting and CSRF protections as appropriate, and move tokens to a proper JWT/session strategy with rotation and revocation.

## Tests

```bash
npm test
```

Tests cover valid/invalid ride lifecycle transitions and subscription/verification gating.

## Configuration

Copy `.env.example` to `.env`. The app works in demo mode without secrets. Never commit `.env`, API keys, uploaded identity documents, or real user data.
