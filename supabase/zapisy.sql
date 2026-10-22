-- Bezpieczne Dzieci w Sieci: lista zapisów „Materiały dla szkół” (formularz na stronie /dla-szkol).
-- Uruchom w Supabase: SQL Editor → New query → wklej całość → Run. Można uruchomić ponownie.
--
-- Jak to działa:
--   1. Ktoś zostawia e-mail w formularzu → wiersz ze statusem 'pending' + e-mail z linkiem do potwierdzenia.
--   2. Kliknięcie linku → status 'confirmed' + e-mail powitalny.
--   3. Wypisanie (link w każdej wiadomości) → wiersz jest usuwany.
--   Niepotwierdzone zapisy starsze niż 30 dni usuwają się same przy kolejnych zapisach.
--
-- Zapisy robi serwer strony kluczem service_role (zmienna SUPABASE_SERVICE_ROLE_KEY, tylko na serwerze).
-- Czytelnicy nie mają żadnego dostępu do tej tabeli. Redakcja widzi listę w panelu: /admin/zapisy.

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null check (email = lower(email) and length(email) <= 254),
  list text not null default 'materialy-dla-szkol',
  role text,
  status text not null default 'pending' check (status in ('pending', 'confirmed')),
  -- tajny klucz do linków „potwierdź” i „wypisz się”
  token uuid not null default gen_random_uuid() unique,
  -- dokładna treść zgody, którą osoba zaznaczyła, i kiedy (rozliczalność, art. 7 ust. 1 RODO)
  consent_text text not null,
  consent_at timestamptz not null default now(),
  confirmed_at timestamptz,
  last_sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (list, email)
);

create index if not exists subscribers_status_idx on public.subscribers (list, status);

alter table public.subscribers enable row level security;

drop policy if exists "redakcja widzi zapisy" on public.subscribers;
create policy "redakcja widzi zapisy" on public.subscribers
  for select to authenticated using (public.is_admin());

drop policy if exists "redakcja usuwa zapisy" on public.subscribers;
create policy "redakcja usuwa zapisy" on public.subscribers
  for delete to authenticated using (public.is_admin());

-- Historia wysłanych wiadomości do listy (bez adresów, tylko temat, treść i liczba odbiorców).
create table if not exists public.mailings (
  id uuid primary key default gen_random_uuid(),
  list text not null default 'materialy-dla-szkol',
  subject text not null,
  body text not null,
  recipients integer not null default 0,
  sent_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.mailings enable row level security;

drop policy if exists "redakcja widzi wysyłki" on public.mailings;
create policy "redakcja widzi wysyłki" on public.mailings
  for select to authenticated using (public.is_admin());

drop policy if exists "redakcja zapisuje wysyłki" on public.mailings;
create policy "redakcja zapisuje wysyłki" on public.mailings
  for insert to authenticated with check (public.is_admin());
