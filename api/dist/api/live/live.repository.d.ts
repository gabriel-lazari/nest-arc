import { LiveEntity } from "./live.entity";
export declare class LiveRepository {
    private lives;
    create(live: LiveEntity): Promise<void>;
}
