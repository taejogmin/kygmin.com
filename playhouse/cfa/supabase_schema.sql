-- CFA Study Hub — Supabase schema
-- Run once in the Supabase SQL Editor (Dashboard → SQL Editor → New query → paste → Run).
-- Safe to re-run: every statement is idempotent.
--
-- Tables follow the site convention of a per-app prefix (ic_*, un_*, ip_* …) → cfa_*.
-- Both tables are strictly per-user: a signed-in user can only read/write their own rows.
-- Guests never touch these tables — the app keeps their data in localStorage only.

-- ── 1. Every answered question ────────────────────────────────────────────────
create table if not exists public.cfa_attempts (
  id          bigint generated always as identity primary key,
  user_id     uuid        not null references auth.users(id) on delete cascade,
  client_id   text        not null,              -- uuid minted in the browser; makes retries idempotent
  qid         text        not null,              -- e.g. "econ-m1-012"
  module      text        not null,              -- e.g. "econ-m1"
  section     text,                              -- note heading number, e.g. "9.3"
  concept     text,                              -- short concept label used for weak-spot grouping
  qtype       text,                              -- mc | calc | flash
  trap        text,                              -- error-pattern tag, e.g. "direction", "sign", "units"
  mode        text,                              -- quiz mode: module | random | weak | review | flash | section
  choice      text,                              -- the key chosen (A/B/C) or "got"/"missed" for flashcards
  correct     boolean     not null,
  time_ms     integer,
  created_at  timestamptz not null default now(),
  unique (user_id, client_id)
);

create index if not exists cfa_attempts_user_time_idx
  on public.cfa_attempts (user_id, created_at desc);

alter table public.cfa_attempts enable row level security;

drop policy if exists "cfa_attempts: own rows select" on public.cfa_attempts;
create policy "cfa_attempts: own rows select" on public.cfa_attempts
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "cfa_attempts: own rows insert" on public.cfa_attempts;
create policy "cfa_attempts: own rows insert" on public.cfa_attempts
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "cfa_attempts: own rows delete" on public.cfa_attempts;
create policy "cfa_attempts: own rows delete" on public.cfa_attempts
  for delete to authenticated using (auth.uid() = user_id);

-- ── 2. Small per-user state blobs (read sections, settings, custom questions) ──
create table if not exists public.cfa_progress (
  user_id     uuid        not null references auth.users(id) on delete cascade,
  key         text        not null,              -- "read" | "settings" | "custom_questions" | …
  value       jsonb       not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  primary key (user_id, key)
);

alter table public.cfa_progress enable row level security;

drop policy if exists "cfa_progress: own rows all" on public.cfa_progress;
create policy "cfa_progress: own rows all" on public.cfa_progress
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ── 3. Grants (RLS still applies) ────────────────────────────────────────────
grant select, insert, delete on public.cfa_attempts to authenticated;
grant usage on sequence public.cfa_attempts_id_seq to authenticated;
grant select, insert, update, delete on public.cfa_progress to authenticated;
