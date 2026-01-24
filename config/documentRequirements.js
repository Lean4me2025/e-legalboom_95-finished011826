export const DOCUMENT_REQUIREMENTS = {
  "NDA": {
    requires: []
  },

  "IP_ASSIGNMENT": {
    requires: []
  },

  "PROMISSORY_NOTE": {
    requires: ["financial"]
  },

  "LOAN_AGREEMENT": {
    requires: ["financial"]
  },

  "OPERATING_AGREEMENT": {
    requires: ["entity"]
  },

  "PARTNERSHIP_AGREEMENT": {
    requires: ["entity"]
  }
};
