-- Bezpieczne Dzieci w Sieci — schemat bazy
-- Uruchom w Supabase: SQL Editor → New query → wklej całość → Run.

-- ---------- redakcja ----------
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admins enable row level security;

drop policy if exists "admin widzi swój wpis" on public.admins;
create policy "admin widzi swój wpis" on public.admins
  for select to authenticated using (user_id = auth.uid());

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- ---------- wpisy ----------
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  category text not null,
  ages text[] not null default '{}',
  body text not null default '',
  cover_url text,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_status_published_idx on public.posts (status, published_at desc);

alter table public.posts enable row level security;

drop policy if exists "czytelnicy widzą opublikowane" on public.posts;
create policy "czytelnicy widzą opublikowane" on public.posts
  for select using (status = 'published' or public.is_admin());

drop policy if exists "redakcja dodaje" on public.posts;
create policy "redakcja dodaje" on public.posts
  for insert to authenticated with check (public.is_admin());

drop policy if exists "redakcja edytuje" on public.posts;
create policy "redakcja edytuje" on public.posts
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "redakcja usuwa" on public.posts;
create policy "redakcja usuwa" on public.posts
  for delete to authenticated using (public.is_admin());

-- ---------- okładki (Storage) ----------
insert into storage.buckets (id, name, public)
values ('covers', 'covers', true)
on conflict (id) do nothing;

drop policy if exists "okładki publiczne" on storage.objects;
create policy "okładki publiczne" on storage.objects
  for select using (bucket_id = 'covers');

drop policy if exists "redakcja wgrywa okładki" on storage.objects;
create policy "redakcja wgrywa okładki" on storage.objects
  for insert to authenticated with check (bucket_id = 'covers' and public.is_admin());

drop policy if exists "redakcja usuwa okładki" on storage.objects;
create policy "redakcja usuwa okładki" on storage.objects
  for delete to authenticated using (bucket_id = 'covers' and public.is_admin());
