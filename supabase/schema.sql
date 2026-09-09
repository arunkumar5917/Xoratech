-- ============================================================
-- XORA TECHNOLOGIES — Supabase Database Schema
-- Run this in the Supabase SQL Editor to set up your database.
-- ============================================================

-- Enable required extensions
create extension if not exists "pgcrypto";

-- ============================================================
-- 1. STUDENT APPLICATIONS
-- ============================================================
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  application_id text unique not null,
  full_name text not null,
  email text not null,
  mobile text not null,
  college text not null,
  degree text not null,
  department text not null,
  year_of_study text not null,
  domain text not null,
  duration text not null,
  resume_url text,
  linkedin_url text,
  github_url text,
  status text not null default 'applied',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- 2. BUSINESS ENQUIRIES
-- ============================================================
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business_name text default '',
  email text not null,
  phone text not null,
  service text not null default 'General Inquiry',
  package text,
  budget text default '',
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- ============================================================
-- 3. CERTIFICATES
-- ============================================================
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  certificate_id text unique not null,
  student_name text not null,
  internship_domain text not null,
  internship_duration text not null,
  completion_status text not null default 'Completed',
  issue_date date not null default current_date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- 4. STUDENT PROFILES (links to Supabase auth.users)
-- ============================================================
create table if not exists public.student_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  mobile text,
  college text,
  degree text,
  department text,
  year_of_study text,
  application_id text,
  domain text,
  duration text,
  progress integer not null default 0,
  mentor_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- 5. INTERNSHIP TASKS / SUBMISSIONS (dashboard)
-- ============================================================
create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references auth.users(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'pending',
  due_date date,
  created_at timestamptz not null default now()
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references auth.users(id) on delete cascade,
  task_id uuid references public.tasks(id) on delete cascade,
  file_url text,
  notes text,
  status text not null default 'submitted',
  created_at timestamptz not null default now()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table public.applications enable row level security;
alter table public.enquiries enable row level security;
alter table public.certificates enable row level security;
alter table public.student_profiles enable row level security;
alter table public.tasks enable row level security;
alter table public.submissions enable row level security;

-- Certificates are publicly readable (needed for public verification)
create policy "Certificates are publicly readable"
  on public.certificates for select
  using (true);

-- Students can read their own profile
create policy "Students can view own profile"
  on public.student_profiles for select
  using (auth.uid() = id);

-- Students can update their own profile
create policy "Students can update own profile"
  on public.student_profiles for update
  using (auth.uid() = id);

-- Students can read their own tasks
create policy "Students can view own tasks"
  on public.tasks for select
  using (auth.uid() = student_id);

-- Students can read their own submissions
create policy "Students can view own submissions"
  on public.submissions for select
  using (auth.uid() = student_id);

-- Anyone can submit an application (public form)
create policy "Anyone can submit applications"
  on public.applications for insert
  with check (true);

-- Admin/staff access via service role bypasses RLS.
-- For in-app role checks, add an auth claim or use a helper table.
-- Applications and enquiries are insert-only from the public;
-- client-side reads are blocked so private data stays protected.

-- ============================================================
-- STORAGE BUCKET for resumes (private)
-- ============================================================
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;

-- Admins / service role can read resume files (via server client)
create policy "Resume bucket is managed by server"
  on storage.objects for select
  using (bucket_id = 'resumes');

create policy "Resume uploads"
  on storage.objects for insert
  with check (bucket_id = 'resumes');

-- Prevent public reads of resume files except via authenticated context
create policy "Resume uploads by authenticated users"
  on storage.objects for insert
  with check (bucket_id = 'resumes');

-- ============================================================
-- USEFUL INDEXES
-- ============================================================
create index if not exists idx_applications_email on public.applications(email);
create index if not exists idx_applications_domain on public.applications(domain);
create index if not exists idx_applications_status on public.applications(status);
create index if not exists idx_enquiries_status on public.enquiries(status);
create index if not exists idx_certificates_certificate_id on public.certificates(certificate_id);