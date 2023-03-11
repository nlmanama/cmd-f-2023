const cohere = require('cohere-ai');
cohere.init('M3RsLP1R5ACYUQM0qhMKdBx8qVK2JOBXxZ9dzCk3');

words = "Effective cyber resilience must be an enterprise-wide risk-based strategy, a collaborative approach driven from executives to everyone in the organization, partners, supply chain participants and customers. It must proactively manage risks, threats, vulnerabilities and the effects on critical information and supporting assets. Effective cyber resilience also involves governance, risk management, an understanding of data ownership and incident management. Assessing these characteristics also demands experience and judgment. Further, an organization must also balance cyber risks against attainable opportunities and competitive advantages. It must consider whether cost-effective prevention is viable and whether, instead, it can achieve rapid detection and correction with a good short-term effect on cyber resilience. To do this, an enterprise must find the right balance between three types of controls: preventative, detective and corrective. These controls prevent, detect and correct incidents that threaten an organization's cyber resilience.";
var sum;

async function getSummary (words) {
    const response = await cohere.summarize({
        text: words,
        length: "short",
    })
    sum = response.body.summary;
    console.log(sum);
}


getSummary(words);
