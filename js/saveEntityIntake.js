import { supabase } from "./supabaseClient.js";

let members = [];

function addMember() {
  members.push({ name: "", ownership: "" });
  // render inputs (simple version)
}

document.getElementById("entityForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const orderId = new URLSearchParams(window.location.search).get("order_id");
  const form = new FormData(e.target);

  await supabase.from("entity_intake").insert([{
    order_id: orderId,
    entity_name: form.get("entity_name"),
    entity_type: form.get("entity_type"),
    formation_state: form.get("formation_state"),
    members
  }]);

  window.location.href = `/generate.html?order_id=${orderId}`;
});
