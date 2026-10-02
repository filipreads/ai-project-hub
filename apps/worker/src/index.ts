import type { IngestionJob } from "@ai-project-hub/domain";

export async function processIngestion(job: IngestionJob): Promise<void> {
  console.info(JSON.stringify({ event: "ingestion.started", jobId: job.id }));
  // Pipeline adapters will be implemented behind versioned contracts.
  console.info(JSON.stringify({ event: "ingestion.completed", jobId: job.id }));
}

console.info(JSON.stringify({ service: "worker", status: "ready" }));
