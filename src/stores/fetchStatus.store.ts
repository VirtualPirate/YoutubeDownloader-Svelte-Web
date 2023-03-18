import { writable } from "svelte/store";

export type fetchStatusType = "stale" | "loading" | "failed" | "success";

export const fetchStatus = writable<fetchStatusType>("stale");
