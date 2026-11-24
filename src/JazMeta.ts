/**
 * Jaz-namespaced `_meta` keys the adapter emits on ACP v2 connections, where the
 * AIR extension namespace does not apply. Jaz reads the same shapes it reads on
 * v1 from `_meta.jetbrains.air`, so both adapters and Jaz share one vocabulary.
 */
export const JAZ_META_KEY = "jaz";
export const JAZ_PHASE_KEY = "phase";
export const JAZ_SESSION_FAILURE_KEY = "sessionFailure";

export function jazOnlyMeta(v2Client: boolean, key: string, value: unknown): Record<string, unknown> | undefined {
    return v2Client ? {[JAZ_META_KEY]: {[key]: value}} : undefined;
}
