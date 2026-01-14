# Moro - Social Stock Market for Confidence

A production-ready Next.js application for Moro, a social stock market where people trade confidence instead of money. This application includes a premium marketing landing page with waitlist capture, a polished app dashboard shell, and an admin waitlist console.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: lucide-react
- **Animations**: framer-motion
- **Database**: PostgreSQL with Prisma ORM
- **Validation**: Zod
- **Theme**: next-themes (dark mode by default)
- **Authentication**: NextAuth.js (Email magic link + GitHub OAuth)

## Project Structure

```
moro-support/
├── app/
│   ├── (marketing)/          # Marketing pages (landing, privacy, terms)
│   │   ├── page.tsx          # Landing page
│   │   ├── waitlist/
│   │   │   └── success/      # Waitlist success page
│   │   ├── privacy/           # Privacy policy
│   │   └── terms/             # Terms of service
│   ├── (app)/                # App dashboard (auth-gated)
│   │   ├── layout.tsx        # App layout with sidebar
│   │   ├── page.tsx         # Dashboard home
│   │   ├── inbox/           # Inbox page
│   │   ├── search/          # Search page
│   │   ├── briefing/        # Briefing page
│   │   └── settings/        # Settings page
│   ├── admin/               # Admin console
│   │   ├── page.tsx        # Admin login
│   │   └── waitlist/       # Waitlist management
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/  # NextAuth API route
│   ├── actions/            # Server actions
│   │   ├── waitlist.ts     # Waitlist operations
│   │   └── admin.ts        # Admin operations
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── marketing/          # Marketing page components
│   ├── app/                # App dashboard components
│   ├── admin/              # Admin console components
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── prisma.ts           # Prisma client
│   └── utils.ts            # Utility functions
└── prisma/
    └── schema.prisma       # Database schema
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/moro?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"

# Admin
ADMIN_PASSWORD="your-secure-admin-password-here"

# App
APP_URL="http://localhost:3000"

# Optional: Email provider (for NextAuth email magic links)
EMAIL_SERVER="smtp://username:password@smtp.example.com:587"
EMAIL_FROM="noreply@moro.app"

# Optional: GitHub OAuth (for NextAuth GitHub provider)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 3. Set Up Database

1. Create a PostgreSQL database:
```bash
createdb moro
```

2. Run Prisma migrations:
```bash
npx prisma migrate dev --name init
```

3. Generate Prisma Client:
```bash
npx prisma generate
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Features

### Marketing Landing Page

- **Hero Section**: Compelling headline with product mock
- **Integrations Strip**: Visual display of connected tools
- **Features Grid**: 6 feature cards with icons
- **Feature Rows**: Alternating text/visual sections
- **Social Proof**: Testimonial cards
- **FAQ Accordion**: 8 common questions
- **Waitlist Form**: Email capture with referral tracking
- **Footer**: Links to privacy, terms, and socials

### Waitlist System

- **Form Fields**: Email (required), Name, Role, Company (all optional)
- **Referral Tracking**: Automatic referral code generation and tracking
- **Success Page**: Shows referral code, link, rank, and social share buttons
- **Duplicate Prevention**: Detects existing emails and shows referral link
- **UTM Tracking**: Captures UTM parameters for analytics

### Admin Console

- **Password Protection**: Simple but secure admin authentication
- **Waitlist Table**: 
  - Search by email, name, or company
  - Pagination (50 entries per page)
  - Sortable columns
  - Delete entries (soft delete)
- **Statistics Dashboard**: Total signups, referred signups, referral rate
- **CSV Export**: Export waitlist data to CSV
- **Session Management**: HTTP-only cookies for security

### App Dashboard

- **Sidebar Navigation**: Dashboard, Inbox, Search, Briefing, Settings
- **Global Search**: Search bar in header
- **Dashboard Home**: 
  - Connect account card
  - KPI cards (Urgent, Needs Reply, FYI)
  - Recent activity feed
- **Inbox**: Filter sidebar, message list, message detail
- **Search**: Search bar with recent searches
- **Briefing**: Daily summary cards
- **Settings**: Profile, theme toggle, account management

## Database Schema

### WaitlistEntry

- `id`: Unique identifier (CUID)
- `email`: Unique email address
- `fullName`: Optional full name
- `role`: Optional role (Founder, Operator, Student, Other)
- `company`: Optional company name
- `createdAt`: Timestamp
- `referralCode`: Unique referral code
- `referredById`: Foreign key to referrer
- `referralCount`: Number of successful referrals
- `source`: Optional source tracking
- `utmSource`, `utmMedium`, `utmCampaign`, `utmTerm`, `utmContent`: UTM parameters
- `deletedAt`: Soft delete timestamp

### User (NextAuth)

- Standard NextAuth user model with email, name, image
- Supports Email and GitHub OAuth providers

## Routes

### Marketing
- `/` - Landing page
- `/waitlist/success` - Waitlist success page
- `/privacy` - Privacy policy
- `/terms` - Terms of service

### App (Auth-gated)
- `/app` - Dashboard home
- `/app/inbox` - Inbox
- `/app/search` - Search
- `/app/briefing` - Briefing
- `/app/settings` - Settings

### Admin (Password-protected)
- `/admin` - Admin login
- `/admin/waitlist` - Waitlist management console

## Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Database
npm run db:generate    # Generate Prisma Client
npm run db:push        # Push schema to database
npm run db:migrate     # Run migrations
npm run db:studio      # Open Prisma Studio
```

## Accessing Admin Console

1. Navigate to `/admin`
2. Enter the password from `ADMIN_PASSWORD` environment variable
3. You'll be redirected to `/admin/waitlist` with full access

## Referral System

1. User joins waitlist → Gets unique referral code
2. User shares link: `https://yoursite.com?ref=ABC123`
3. New visitor clicks link → Referral code stored in localStorage
4. New visitor joins waitlist → Automatically attributed to referrer
5. Referrer's `referralCount` increments

## Theme

The app uses a dark theme by default with a custom color palette:
- Primary: Purple/Iris (#5B21B6)
- Background: Dark (#0F0518)
- Accent: Lilac (#D8B4FE)

Theme can be toggled in Settings (app dashboard).

## Next Steps

1. **Set up email provider** for NextAuth magic links
2. **Configure GitHub OAuth** if using GitHub authentication
3. **Add rate limiting** for waitlist submissions (currently basic)
4. **Set up analytics** (placeholder ready)
5. **Customize branding** and copy
6. **Add images** to marketing sections
7. **Enable app authentication** (currently commented out in app layout)

## License

Private - All rights reserved

## Support

For questions or issues, contact: team@moro.support
