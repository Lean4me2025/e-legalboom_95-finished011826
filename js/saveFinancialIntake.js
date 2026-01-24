import { supabase } from "./supabaseClient.js";

document.getElementById("financialForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const orderId = new URLSearchParams(window.location.search).get("order_id");
  const data = Object.fromEntries(new FormData(e.target));

  await supabase
    .from("financial_intake")
    .insert([{ order_id: orderId, ...data }]);

  window.location.href = `/generate.html?order_id=${orderId}`;
});
