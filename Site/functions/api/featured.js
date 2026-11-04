import { fetchCrous } from './logements.js';

// One national catalogue request; no per-city scraping on every homepage visit.
export async function onRequestGet() {
  try {
    const crous = await fetchCrous();
    return new Response(JSON.stringify({ crous, fetchedAt: new Date().toISOString() }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300', 'X-Content-Type-Options': 'nosniff' }
    });
  } catch {
    return new Response(JSON.stringify({ error: 'La sélection de logements est temporairement indisponible.' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
    });
  }
}
