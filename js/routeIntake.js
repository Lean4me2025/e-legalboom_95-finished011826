import { DOCUMENT_REQUIREMENTS } from "../config/documentRequirements.js";

export function routeToNextStep(order) {
  const docKey = order.document_key;
  const requirements = DOCUMENT_REQUIREMENTS[docKey]?.requires || [];

  if (requirements.includes("financial")) {
    window.location.href = `/intake-financial.html?order_id=${order.order_id}`;
    return;
  }

  if (requirements.includes("entity")) {
    window.location.href = `/intake-entity.html?order_id=${order.order_id}`;
    return;
  }

  // Default: Base Intake already complete
  window.location.href = `/generate.html?order_id=${order.order_id}`;
}
