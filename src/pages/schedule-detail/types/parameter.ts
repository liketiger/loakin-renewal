import { Dayjs } from "dayjs";

export type RaidParams = {
    id: number;
    name: string;
    level: string;
    time: Dayjs | string;
    date: string;
}

export type PartyMembersParams = {
    id: number;
    characterName: string;
    itemLevel: number;
    class: string;
    userName: string;
}