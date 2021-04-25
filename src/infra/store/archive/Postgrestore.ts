import { ITrackEventStore } from "../IPostgrestore";
import { Postgresingle } from "./Postgresingle";

class Postgrestore implements ITrackEventStore {
  private readonly db = Postgresingle.getInstance.getStore();
  constructor() {}

  async save(): Promise<any> {}
}

export { Postgrestore };
