import { Dayjs } from "dayjs";

export type RaidParams = {
    id: number;
    name: string;
    level: string;
    time: Dayjs | string;
    date: string;
}