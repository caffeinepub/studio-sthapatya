import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FirmProfile {
    name: string;
    description: string;
    address: string;
    contactEmail: string;
    services: Array<string>;
    contactPhone: string;
}
export interface TeamMember {
    bio: string;
    name: string;
    position: string;
}
export interface TeamMemberInput {
    bio: string;
    name: string;
    position: string;
}
export interface FinancialData {
    revenue: number;
    expenses: number;
    year: bigint;
    profit: number;
}
export interface FirmInput {
    name: string;
    description: string;
    address: string;
    contactEmail: string;
    services: Array<string>;
    contactPhone: string;
}
export type FirmId = string;
export interface backendInterface {
    addFinancialData(firmId: FirmId, data: FinancialData): Promise<void>;
    addFirm(firmId: FirmId, profile: FirmInput): Promise<void>;
    getAllFirms(): Promise<Array<FirmProfile>>;
    getFinancialData(firmId: FirmId): Promise<Array<FinancialData> | null>;
    getFirmProfile(firmId: FirmId): Promise<FirmProfile | null>;
    getTeamMembers(firmId: FirmId): Promise<Array<TeamMember> | null>;
    updateTeamMembers(firmId: FirmId, newMembers: Array<TeamMemberInput>): Promise<void>;
}
