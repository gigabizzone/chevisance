# Email Setup — Contact & Quote Forms

The website's Contact and Quote forms email submissions to
**nishant@chevisance.com** using **Resend**. To make this work AND ensure mail
lands in the **Inbox** (not spam), we verify the **chevisance.com** domain in
Resend so outgoing mail is SPF/DKIM-authenticated.

> You do NOT need the Google Workspace email password for any of this.
> Verification is done via DNS records at the domain registrar, not via email.
> Receiving mail at nishant@chevisance.com needs no setup — it just arrives.

---

## Step 1 — Create a free Resend account
- Go to https://resend.com → sign up (any email; free tier = 100 emails/day).

## Step 2 — Add & verify the chevisance.com domain
1. Resend dashboard → **Domains → Add Domain** → enter `chevisance.com`.
2. Resend shows a set of **DNS records unique to your account**, typically:
   - **DKIM** — a record at `resend._domainkey` (TXT/CNAME)
   - **SPF / return-path** — an **MX** + **TXT** on the `send` subdomain
     (`send.chevisance.com`)
   - (Optional) a **DMARC** TXT record
3. Add these records wherever chevisance.com DNS is managed — the **same place
   the Google Workspace MX records live** (your domain registrar / DNS host).
   - ⚠️ **Do not change or delete the existing Google MX or Google SPF records.**
     Resend's records are separate (`resend._domainkey`, the `send` subdomain)
     and coexist safely with Google Workspace.
4. Back in Resend, click **Verify**. DNS can take a few minutes to ~1 hour.
   The domain status should turn **Verified**.

## Step 3 — Create an API key
- Resend → **API Keys → Create API Key** → copy the `re_...` value.

## Step 4 — Put the values into the environment
Local development — edit `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx     # paste the real key
RESEND_FROM_EMAIL=noreply@chevisance.com       # any address @chevisance.com (mailbox need NOT exist)
CONTACT_EMAIL=nishant@chevisance.com           # where leads are delivered
```
Production (Hostinger Node.js app) — set the SAME three variables in the app's
**Environment Variables** panel, then restart the app.

## Step 5 — (Recommended) DMARC for best inbox placement
If chevisance.com has no DMARC record yet, add a TXT record:
```
Host/Name:  _dmarc
Value:      v=DMARC1; p=none; rua=mailto:nishant@chevisance.com
```
(If Google Workspace already added a DMARC record, leave it as-is.)

## Step 6 — Test
After the key is set and the domain shows **Verified**, submit the Contact form
once and confirm the email arrives in Nishant's inbox. If it lands in spam the
first time, mark it "Not spam" / add the sender to contacts — but with a verified
domain + DKIM this should not happen.

---

## If you have NO access to chevisance.com DNS
Fallback: switch the forms to **Web3Forms** (free, no DNS, no password) — you
generate an access key tied to nishant@chevisance.com and we wire it in. Slightly
higher chance of spam-filtering than a verified domain, but no DNS needed. Ask the
developer to switch if required.
