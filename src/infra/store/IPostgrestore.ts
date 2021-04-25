interface ITrackEventStore {
  save: () => Promise<any>;
}

export { ITrackEventStore };
