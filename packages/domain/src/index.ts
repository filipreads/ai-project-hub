export type KnowledgeClass =
  | "fact"
  | "summary"
  | "inference"
  | "user_decision"
  | "ai_suggestion";

export interface Provenance {
  sourceId: string;
  sourceItemId: string;
  sourceVersion?: string;
  sourceUrl?: string;
  transformation: "import" | "extract" | "summarize" | "infer";
  transformedAt: string;
  model?: string;
  promptVersion?: string;
  confidence?: number;
}

export interface Artifact {
  id: string;
  workspaceId: string;
  projectId?: string;
  sourceId: string;
  sourceExternalId: string;
  sourceVersion?: string;
  contentHash: string;
  mediaType: string;
  storageKey: string;
  createdAt: string;
  ingestedAt: string;
  provenance: Provenance;
}

export interface Claim {
  id: string;
  projectId: string;
  text: string;
  classification: KnowledgeClass;
  provenance: Provenance[];
}

export interface IngestionJob {
  id: string;
  workspaceId: string;
  sourceId: string;
  status: "queued" | "running" | "completed" | "failed" | "dead_letter";
  attempt: number;
  idempotencyKey: string;
}
