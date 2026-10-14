# Ride Mate – Connecting Journeys: Product Requirements Document (PRD)

**Version:** 1.0 (MVP)
**Source:** Design Thinking project report, SVMIT Bharuch (GTU), Group ID 812765
**Intended use:** Input spec for an AI model / developer to build the app

---

## 1. Product Overview

**Ride Mate** is a subscription-based ride-sharing platform that connects people travelling on similar routes. Riders and drivers meet at **fixed nodal points** (predefined pick-up/drop-off hubs) instead of door-to-door service. **Commuters set their own fares** (fair, flexible pricing) rather than accepting surge or algorithmic pricing. Revenue comes from **subscriptions**, not per-ride commission.

**One-line pitch:** Affordable, safe, eco-friendly shared daily commuting via nodal points, user-set fares, and verified users.

**Target market:** Indian cities and towns (initial pilot: Bharuch, Gujarat). Currency is INR (₹); UPI is a primary payment method.

## 2. Problem Statement

Observed in field research (bus terminals, campus, local markets; 56 survey respondents):

- Auto-rickshaw booking disputes, fare haggling, and ride refusals (especially short trips and late night).
- Empty car seats and overcrowded or unavailable transport at peak/night hours.
- Safety concerns for women, night-shift workers, students taking lifts from strangers, and children.
- Congestion, pollution, and high daily commuting costs.
- Poor communication (e.g., a child missing a van; a hospital worker waiting over an hour at night).

## 3. Goals & Non-Goals

### Goals
1. Reduce commuting cost via pooled rides and user-set fares.
2. Reduce congestion and CO₂ by increasing vehicle occupancy.
3. Provide safe, verified, trackable rides (drivers and passengers).
4. Give drivers a steady income source and transparent earnings.
5. Create a sustainable subscription revenue model.

### Non-Goals (MVP)
- Door-to-door on-demand taxi dispatch with surge pricing.
- EV fleet, corporate plans, loyalty/referral programs, offline booking (all Phase 2, see §12).
- Multi-city or international expansion.

## 4. Target Users & Personas

| Persona | Needs |
|---|---|
| **Daily commuter / office worker** | Punctual, affordable, repeatable route |
| **College student** | Cheap, safe, reliable transport; avoid lifts from strangers |
| **Woman travelling alone** | Verified drivers, live tracking, SOS, trusted contacts |
| **Night-shift worker** | Late-night availability, safety |
| **Parent (child pick-up/drop)** | Trust, timing, real-time communication |
| **Driver / vehicle owner** | Fill empty seats, earn income, simple accept/reject flow |
| **Tourist / senior citizen** | Simple, accessible, easy-to-use UI |
| **Admin / Trust & Safety team** | Monitor users, verify drivers, resolve disputes |
| **Delivery agent** (secondary) | Timely transport |

## 5. Core Concept Details

- **Nodal points:** A curated list of fixed locations (e.g., Centre Station, bus terminals, campus gates, crossroads). Rides start and end at nodal points. The app suggests the nearest/best nodal point for the rider's origin and destination.
- **User-set fares:** The driver proposes a fare per seat within an admin-configurable min/max range (guardrails against abuse) and the rider accepts, or the rider offers a fare and the driver accepts/rejects. Final fare shown clearly before confirmation. *(MVP assumption: driver-listed fare per seat with rider acceptance; rider counter-offer is optional.)*
- **Ride types:** **Pool** (share cost, fewer emissions) and **Solo** (privacy).
- **Subscriptions:** Both riders and drivers pay a subscription to access the platform (see §9). No commission on fares.

## 6. User Roles

1. **Rider (Passenger)**
2. **Driver**
3. **Admin** (web dashboard)
4. **Trust & Safety agent** (admin sub-role)

## 7. Functional Requirements

Priority: **P0** = MVP must-have, **P1** = should-have, **P2** = later.

### 7.1 Authentication & Profile
| ID | Requirement | Pri |
|---|---|---|
| AUTH-1 | Sign up / sign in with email or phone number + password | P0 |
| AUTH-2 | Phone OTP verification | P0 |
| AUTH-3 | "Forgot password" flow | P0 |
| AUTH-4 | Role selection at sign-up (Rider / Driver) | P0 |
| AUTH-5 | Profile management (name, photo, phone, emergency contacts) | P0 |
| AUTH-6 | Language support: English (P0), Gujarati/Hindi (P1) | P1 |

### 7.2 Verification & Safety
| ID | Requirement | Pri |
|---|---|---|
| SAF-1 | Driver onboarding: upload driving licence, vehicle RC, insurance, ID proof, photo | P0 |
| SAF-2 | Passenger ID verification (document upload) | P0 |
| SAF-3 | Admin approves/rejects documents; background-check status (Pending / Approved / Rejected) | P0 |
| SAF-4 | "Verified" badge on approved drivers/passengers | P0 |
| SAF-5 | **SOS / panic button** on ride screens: sends live location + ride details to emergency contacts and Trust & Safety team, with option to call emergency services | P0 |
| SAF-6 | Live location sharing of an active ride with trusted contacts (shareable link) | P0 |
| SAF-7 | Trip monitoring (all rides tracked; route-deviation alert) | P1 |
| SAF-8 | Safety Tips screen and "Contact Trust & Safety Team" | P0 |
| SAF-9 | Women-preference option (e.g., prefer women co-riders/drivers) | P1 |
| SAF-10 | Block / report user | P0 |

### 7.3 Rider Features
| ID | Requirement | Pri |
|---|---|---|
| RID-1 | Home screen: greeting ("Welcome, <Name>"), live map with current location and nearby available rides, quick buttons (Book Ride, View Rides, Emergency Help, Settings) | P0 |
| RID-2 | Navigation drawer: Profile, My Rides, Subscriptions, Settings | P0 |
| RID-3 | Enter pick-up and drop-off; app suggests nodal points | P0 |
| RID-4 | Choose ride type: Pool or Solo | P0 |
| RID-5 | See estimated fare (₹), route on mini-map, ETA | P0 |
| RID-6 | "Request Ride"; match with driver on a similar route | P0 |
| RID-7 | Ride status & tracking: driver name, photo, rating, vehicle number and model, live GPS route, ETA | P0 |
| RID-8 | Contact driver (call + in-app chat); Cancel Ride button | P0 |
| RID-9 | Ride history (My Rides) with fare receipts | P0 |
| RID-10 | Cost split with friends | P2 |
| RID-11 | Schedule recurring rides (daily commute) | P1 |

### 7.4 Driver Features
| ID | Requirement | Pri |
|---|---|---|
| DRV-1 | Driver panel tabs: **Available Rides, My Rides, Earnings, Rating & Feedback** | P0 |
| DRV-2 | Post a ride/route (origin nodal point, destination nodal point, time, seats, fare per seat) | P0 |
| DRV-3 | Accept / Reject ride requests | P0 |
| DRV-4 | Action buttons: **Accept Ride → Start Trip → End Trip** (state machine) | P0 |
| DRV-5 | Built-in navigation / optimal route via maps | P0 |
| DRV-6 | Earnings dashboard (daily/weekly/total, per ride) | P0 |
| DRV-7 | View ratings and passenger feedback | P0 |
| DRV-8 | Availability toggle (online/offline) | P0 |

### 7.5 Ride Lifecycle
`REQUESTED → MATCHED → ACCEPTED → DRIVER_EN_ROUTE → STARTED → COMPLETED` (also `CANCELLED_BY_RIDER`, `CANCELLED_BY_DRIVER`, `NO_SHOW`, `REJECTED`).

| ID | Requirement | Pri |
|---|---|---|
| RIDE-1 | Matching: riders matched with drivers whose route overlaps the rider's nodal points within a time window | P0 |
| RIDE-2 | Real-time status updates via push notifications (accepted, driver arriving, started, completed, delayed) | P0 |
| RIDE-3 | Pool rides: multiple riders per vehicle up to the posted seat count; fare per seat | P0 |
| RIDE-4 | Cancellation rules with reasons; repeated cancellations affect rating/limits | P1 |
| RIDE-5 | Automated fare calculation/summary (accepted fare × seats; no hidden charges) | P0 |

### 7.6 Payments
| ID | Requirement | Pri |
|---|---|---|
| PAY-1 | Pay via **cash, card, or UPI/QR** | P0 |
| PAY-2 | Payment gateway integration (e.g., Razorpay) for subscriptions and digital fares | P0 |
| PAY-3 | Fare receipts and ride history | P0 |
| PAY-4 | Payment dispute handling through admin | P1 |

### 7.7 Subscriptions
| ID | Requirement | Pri |
|---|---|---|
| SUB-1 | Subscription plans for riders (e.g., weekly/monthly) and for drivers (monthly) | P0 |
| SUB-2 | Plan purchase, renewal, expiry, and status screen under "Subscriptions" | P0 |
| SUB-3 | Gated access: booking/posting rides requires an active subscription (optional free trial) | P0 |
| SUB-4 | Corporate plans, loyalty and referral programs | P2 |

### 7.8 Ratings & Feedback
| ID | Requirement | Pri |
|---|---|---|
| RAT-1 | After each ride: 5-star rating + text feedback + Submit | P0 |
| RAT-2 | Two-way ratings (rider ↔ driver); average rating on profiles | P0 |
| RAT-3 | Low-rating flagging for admin review | P1 |

### 7.9 Communication & Notifications
| ID | Requirement | Pri |
|---|---|---|
| COM-1 | In-app chat (text) and call between driver and rider for active rides | P0 |
| COM-2 | Push notifications (ride updates, driver arrival, delays, subscription reminders) | P0 |
| COM-3 | ETA calculations shown to both parties | P0 |

### 7.10 Admin Dashboard (Web)
| ID | Requirement | Pri |
|---|---|---|
| ADM-1 | User management: add / edit / block users | P0 |
| ADM-2 | Driver management: review documents, approve/reject, background-check status | P0 |
| ADM-3 | Ride monitoring panel (live and historical rides) | P0 |
| ADM-4 | Nodal point management (create/edit/disable) and fare min/max configuration | P0 |
| ADM-5 | Reports & analytics (rides, active users, revenue, CO₂ saved estimate, ratings) | P1 |
| ADM-6 | Support & help requests, payment dispute handling | P0 |
| ADM-7 | SOS alert console for Trust & Safety team | P0 |

## 8. Screens (Prototype Reference)

Design style: clean white background, blue primary buttons, minimalist car icon, red for destructive/emergency actions (Cancel Ride, Emergency Contact). Follow Google Material Design guidelines. Mobile-first.

1. **Welcome / Login / Signup:** Logo "Ride Mate – Connecting Journeys"; fields Email/Phone, Password; "Forgot Password?" link; "Sign In" button; "Sign Up with basic info".
2. **User Home:** "Welcome, [UserName]"; live map with nearby cars; quick buttons (Book Ride, View Rides, Emergency Help, Settings); drawer.
3. **Ride Booking:** Pick-up, Drop; mini-map with route and ETA; "Suggested: <nodal point>"; estimated fare; Pool/Solo toggle; "Request Ride".
4. **Ride Status & Tracking:** Driver photo, name, vehicle number and model; live map with ETA; Contact and Message buttons; red "Cancel Ride".
5. **Driver Panel:** Tabs (Available Rides, My Rides, Earnings); buttons Accept Ride / Start Trip / End Trip.
6. **Admin Dashboard:** User Management, Driver Management, Ride Monitoring Panel, Reports & Analytics, Support & Help Requests.
7. **Safety & Verification:** Verified badge, background-check status, red "Emergency Contact" button, Safety Tips link, Trust & Safety contact.
8. **Rating & Feedback:** 5-star selector, feedback textbox, Submit (shown after each ride).
9. **Future Enhancements (teaser panel):** Corporate plans, Subscription tiers, Loyalty programs, Offline booking.

## 9. Business Model

- **Primary revenue:** Subscriptions (riders and drivers). Steady, predictable, no per-ride commission.
- **Future revenue:** Corporate tie-ups, premium tiers, EV rides.
- *Pricing is not specified in the source; the plan tiers and amounts are open decisions (see §14).*

## 10. Non-Functional Requirements

- **Security & privacy:** Encrypted data in transit and at rest; hashed passwords; strict data privacy policy; documents stored securely with restricted access; comply with Indian regulations (e.g., DPDP Act, Motor Vehicles Act, aggregator guidelines).
- **Performance:** Map and tracking updates every 3–5 seconds; screen loads under 2 seconds on 4G.
- **Reliability:** 99.5% uptime target; graceful degradation on poor network.
- **Scalability:** Architecture supports expansion to additional cities.
- **Accessibility:** Large tap targets, readable fonts, simple flows for senior citizens.
- **Platforms:** Android and iOS (cross-platform) + responsive web admin dashboard.
- **Audit:** Log all rides, SOS events, admin actions.

## 11. Suggested Tech Stack (adjustable)

| Layer | Suggestion |
|---|---|
| Mobile app | Flutter or React Native |
| Admin web | React (Next.js) |
| Backend | Node.js (NestJS/Express) or Python (FastAPI) REST + WebSockets |
| Database | PostgreSQL (+ PostGIS for geo queries); Redis for live state |
| Maps / routing | Google Maps Platform (or Mapbox / OpenStreetMap) |
| Auth | JWT + phone OTP (e.g., Firebase Auth) |
| Push notifications | Firebase Cloud Messaging |
| Payments | Razorpay (UPI, cards, subscriptions) |
| File storage | S3-compatible bucket for documents |
| Hosting | Any cloud provider (AWS / GCP / Azure) |

## 12. Data Model (Core Entities)

- **User**: id, role, name, phone, email, password_hash, photo_url, verified_status, emergency_contacts[], rating_avg, created_at
- **DriverProfile**: user_id, licence_no, vehicle_id, document_urls[], background_check_status, is_online
- **Vehicle**: id, driver_id, number, model, type, seats
- **NodalPoint**: id, name, lat, lng, city, is_active
- **RidePost** (driver route): id, driver_id, origin_node_id, dest_node_id, departure_time, seats_total, seats_available, fare_per_seat, status
- **RideRequest / Booking**: id, rider_id, ride_post_id, pickup_node_id, drop_node_id, ride_type (POOL/SOLO), agreed_fare, status, timestamps
- **Payment**: id, booking_id / subscription_id, method (CASH/CARD/UPI), amount, status
- **Subscription**: id, user_id, plan_id, start_at, end_at, status
- **Plan**: id, role, name, price, duration
- **Rating**: id, booking_id, from_user, to_user, stars, comment
- **Message**: id, booking_id, sender_id, text, sent_at
- **SOSEvent**: id, user_id, booking_id, location, status, created_at, resolved_by
- **SupportTicket**: id, user_id, category, description, status

## 13. Key User Flows

**Rider flow:** Sign up → verify phone/ID → buy subscription → enter pick-up/drop → see suggested nodal points + fare + ETA → choose Pool/Solo → Request Ride → driver accepts → track live → trip ends → pay (cash/UPI/card) → rate driver.

**Driver flow:** Sign up → upload documents → admin approval → buy subscription → go online / post route with seats and fare → receive requests → Accept → Start Trip → End Trip → view earnings → rate riders.

**Emergency flow:** Tap SOS → confirm (or auto after 5 s) → alert sent to emergency contacts + Trust & Safety with live location → option to call emergency services.

**Admin flow:** Review pending drivers → approve/reject → monitor live rides → handle SOS/support tickets → view analytics.

## 14. Release Plan

- **MVP (Phase 1):** All P0 items above.
- **Phase 2:** P1 items (scheduling, route-deviation alerts, women-preference, regional languages, analytics depth).
- **Phase 3 (P2):** EV ride options, corporate tie-ups, loyalty and referral programs, offline booking, cost splitting with friends.

## 15. Success Metrics

- Number of verified drivers and riders; weekly active users
- Average seat occupancy per ride (target ↑)
- Rides completed per week; ride-match rate; time-to-match
- Average rating (target ≥ 4.3 / 5)
- Subscription conversion and renewal rate
- SOS response time; safety incidents per 1,000 rides
- Estimated CO₂ saved

## 16. Assumptions & Open Questions

The source report has gaps and a few inconsistencies. These choices were made for the MVP; confirm or change them:

1. **Pricing model:** The abstract says subscription-based with commuter-set fares, while the mind map lists payment by cash/card and the prototype shows a platform-estimated fare ("$12.00"). *Assumption:* subscription is the revenue model; the fare shown is an estimate/suggestion, final fare is user-set within admin guardrails; display in ₹.
2. **Subscription plan prices/tiers** are not defined; use placeholders (e.g., Rider ₹99/week, ₹299/month; Driver ₹499/month).
3. **Fare negotiation mechanics** (driver-set vs rider-offered) are not specified; MVP uses driver-posted fare per seat with rider acceptance.
4. **Nodal points:** Initial list for Bharuch to be seeded by admin (e.g., SVMIT campus gate, bus terminal, railway station).
5. **Background checks:** Assume manual document review by admin in MVP; third-party verification API later.
6. **Currency/locale:** India (INR, UPI, +91 phone numbers).
7. **Platform:** Mobile app for riders/drivers; the prototype labels the admin dashboard as "Web Interface" but mocks it on a phone, so build it as a responsive web app.

## 17. Instructions for the AI Model Building the App

1. Build the MVP (all P0 requirements) first; structure code so P1/P2 features can be added without rewrites.
2. Implement three clients: **Rider app, Driver app (can be one mobile app with role switch)**, and **Admin web dashboard**, sharing one backend API.
3. Use mock data/seed data for nodal points, a demo driver, and a demo rider so the app runs end-to-end without real integrations. Use sandbox keys for maps, payments, and OTP.
4. Follow the screen descriptions and visual style in §8.
5. Provide: project structure, database schema/migrations, REST API documentation (endpoints for auth, profile, nodal points, ride posts, bookings, payments, subscriptions, ratings, SOS, admin), WebSocket events for live tracking, and a README with setup steps.
6. Include input validation, role-based access control, and basic automated tests for the ride lifecycle state machine and subscription gating.
7. Never hard-code secrets; use environment variables.
