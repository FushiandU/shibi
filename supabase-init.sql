create extension if not exists "uuid-ossp";

create table leads (
  id uuid primary key default uuid_generate_v4(),
  full_name text,
  email text,
  phone text,
  interest text,
  language text,
  source text,
  status text,
  priority text,
  notes text,
  assigned_to text,
  created_at timestamp with time zone default now(),
  last_contact timestamp with time zone,
  next_follow_up timestamp with time zone,
  value numeric,
  tags text[]
);

create table blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text,
  slug text unique,
  excerpt text,
  content text,
  featured_image text,
  author text,
  status text,
  publish_date date,
  categories text[],
  tags text[],
  meta_title text,
  meta_description text,
  read_time integer,
  views integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

insert into blog_posts (id, title, slug, excerpt, content, featured_image, author, status, publish_date, categories, tags, meta_title, meta_description, read_time)
values
  (uuid_generate_v4(), 'Dubai Property Market Outlook 2025', 'dubai-property-market-2025', 'Comprehensive analysis of Dubai''s real estate market trends, price predictions, and the best investment opportunities for 2025.', '<p>Dubai''s real estate market continues to demonstrate remarkable resilience and growth potential as we enter 2025...</p>', '/placeholder.jpg', 'Shibi Kabeer', 'published', '2025-01-01', ARRAY['Market Analysis'], ARRAY['Dubai', 'Investment'], 'Dubai Property Market Outlook 2025', 'Market trends and investment tips for 2025', 8),
  (uuid_generate_v4(), 'Golden Visa Updates: New Requirements and Benefits in 2025', 'golden-visa-updates-2025', 'Latest changes to the UAE Golden Visa program and how they affect property investors.', '<p>The UAE Golden Visa program has seen significant updates for 2025...</p>', '/placeholder.jpg', 'Shibi Kabeer', 'published', '2025-01-12', ARRAY['Golden Visa'], ARRAY['Visa', 'UAE'], 'Golden Visa Updates 2025', 'New requirements and benefits for investors', 5);

create table properties (
  id uuid primary key default uuid_generate_v4(),
  name text,
  location text,
  developer text,
  price text,
  price_per_sqft text,
  type text,
  size text,
  yield text,
  status text,
  handover text,
  image text,
  features text[],
  golden_visa boolean,
  created_at timestamp with time zone default now()
);

insert into properties (id, name, location, developer, price, price_per_sqft, type, size, yield, status, handover, image, features, golden_visa)
values
  (uuid_generate_v4(), 'Luxury Apartment in Downtown Dubai', 'Downtown Dubai', 'Emaar', 'AED 2,500,000', '2,083', 'Apartment', '1,200 sq ft', '8%', 'Ready', 'Q4 2024', '/placeholder.jpg', ARRAY['Burj Khalifa View', 'Smart Home', 'Pool'], true),
  (uuid_generate_v4(), 'Villa in Arabian Ranches', 'Arabian Ranches', 'Damac', 'AED 4,200,000', '1,200', 'Villa', '3,500 sq ft', '9%', 'Off-Plan', 'Q2 2025', '/placeholder.jpg', ARRAY['Private Garden', 'Maid Room', 'Garage'], true),
  (uuid_generate_v4(), 'Commercial Office in DIFC', 'Dubai International Financial Centre', 'Omniyat', 'AED 1,800,000', '2,250', 'Commercial', '800 sq ft', '10%', 'Ready', 'Q1 2024', '/placeholder.jpg', ARRAY['Prime Location', 'Furnished'], false);

create table media (
  id uuid primary key default uuid_generate_v4(),
  filename text,
  original_name text,
  url text,
  type text,
  size integer,
  mime_type text,
  alt text,
  caption text,
  tags text[],
  uploaded_at timestamp with time zone default now(),
  used_in text[]
);

create table settings (
  id serial primary key,
  key text unique,
  value text
);

create table comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references blog_posts(id),
  author text,
  content text,
  created_at timestamp with time zone default now()
);

create table translations (
  id uuid primary key default uuid_generate_v4(),
  key text,
  english text,
  arabic text,
  hindi text,
  urdu text,
  context text,
  category text,
  last_updated timestamp with time zone default now()
); 

-- ROI Leads table (if different from general leads)
create table if not exists roi_leads (
  id uuid primary key default uuid_generate_v4(),
  full_name text,
  email text,
  phone text,
  investment_amount numeric,
  expected_roi numeric,
  notes text,
  created_at timestamp with time zone default now()
); 

-- Contact Messages table
create table if not exists contact_messages (
  id uuid primary key default uuid_generate_v4(),
  first_name text,
  last_name text,
  email text,
  phone text,
  country text,
  service text,
  budget text,
  timeline text,
  message text,
  newsletter boolean,
  whatsapp boolean,
  created_at timestamp with time zone default now()
); 

-- Newsletter Subscribers table
create table if not exists newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  email text unique,
  interests text[],
  subscribed_at timestamp with time zone default now()
); 

-- Content Sections table
create table if not exists content_sections (
  id uuid primary key default uuid_generate_v4(),
  page text not null,
  section text not null,
  content jsonb not null,
  order_index integer default 0,
  updated_at timestamp with time zone default now()
); 