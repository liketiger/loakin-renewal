export type RaidView = {
    id: number,
    created_at: string,
    name: string,
    level: string,
    date: string,
    time: string
}

export type PartyMembersView = {
    id: number;
    characterName: string;
    itemLevel: number;
    class: string;
    userName: string;
}