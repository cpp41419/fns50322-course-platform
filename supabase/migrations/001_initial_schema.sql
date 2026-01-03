-- FNS50322 Course Platform Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Lead status enum
CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'converted', 'closed');

-- Leads table (for quiz completions, enquiries, etc.)
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  source TEXT NOT NULL, -- 'quiz', 'enquiry', 'newsletter', etc.
  provider_interest TEXT, -- slug of provider they're interested in
  state TEXT, -- NSW, VIC, etc.
  budget TEXT, -- budget range
  timeline TEXT, -- when they want to start
  status lead_status DEFAULT 'new',
  notes TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- Quiz submissions table
CREATE TABLE IF NOT EXISTS quiz_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT,
  answers JSONB NOT NULL DEFAULT '{}',
  recommended_providers TEXT[] DEFAULT '{}',
  score INTEGER,
  completed BOOLEAN DEFAULT FALSE,
  session_id TEXT
);

-- Provider enquiries table
CREATE TABLE IF NOT EXISTS provider_enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  provider_slug TEXT NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  message TEXT,
  source_page TEXT NOT NULL
);

-- Page views for analytics
CREATE TABLE IF NOT EXISTS page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  page_path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  session_id TEXT
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);

CREATE INDEX IF NOT EXISTS idx_quiz_email ON quiz_submissions(email);
CREATE INDEX IF NOT EXISTS idx_quiz_created_at ON quiz_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_completed ON quiz_submissions(completed);

CREATE INDEX IF NOT EXISTS idx_enquiries_provider ON provider_enquiries(provider_slug);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON provider_enquiries(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);

-- Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Policies for anonymous inserts (from website)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON quiz_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON provider_enquiries
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON page_views
  FOR INSERT TO anon WITH CHECK (true);

-- Policies for authenticated reads (admin)
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated reads" ON quiz_submissions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated reads" ON provider_enquiries
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated reads" ON page_views
  FOR SELECT TO authenticated USING (true);

-- Allow authenticated updates on leads
CREATE POLICY "Allow authenticated updates" ON leads
  FOR UPDATE TO authenticated USING (true);
