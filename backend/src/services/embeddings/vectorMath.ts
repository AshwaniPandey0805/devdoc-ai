/**
 * Vector Similarity Mathematics
 * Pure TypeScript geometric distance and similarity algorithms.
 */

/**
 * Calculates the Dot Product of two equal-length vectors:
 * sum(A[i] * B[i])
 */
export function dotProduct(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error(`Dimension mismatch: vector A (${a.length}) vs vector B (${b.length})`);
  }
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

/**
 * Calculates the Euclidean Norm (magnitude/length) of a vector:
 * sqrt(sum(A[i]^2))
 */
export function vectorMagnitude(a: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * a[i];
  }
  return Math.sqrt(sum);
}

/**
 * Calculates the Cosine Similarity between two vectors:
 * cos(theta) = (A . B) / (||A|| * ||B||)
 * 
 * Range: -1.0 to 1.0 (1.0 = identical direction, 0.0 = orthogonal)
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  const dot = dotProduct(a, b);
  const magA = vectorMagnitude(a);
  const magB = vectorMagnitude(b);

  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
}

/**
 * Calculates Euclidean Distance (L2) between two vectors:
 * sqrt(sum((A[i] - B[i])^2))
 */
export function euclideanDistance(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error(`Dimension mismatch: ${a.length} vs ${b.length}`);
  }
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b[i];
    sum += diff * diff;
  }
  return Math.sqrt(sum);
}
