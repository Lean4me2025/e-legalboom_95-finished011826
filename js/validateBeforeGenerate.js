import { DOCUMENT_REQUIREMENTS } from "../config/documentRequirements.js";

export async function validate(order) {
  const reqs = DOCUMENT_REQUIREMENTS[order.document_key]?.requires || [];

  if (reqs.includes("financial") && !order.financial_complete) {
    throw new Error("Missing financial terms");
  }

  if (reqs.includes("entity") && !order.entity_complete) {
    throw new Error("Missing entity information");
  }

  return true;
}
