export interface YoutubeModel {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface Item {
  kind: ItemKind;
  etag: string;
  id: ID;
  snippet: Snippet;
}

export interface ID {
  kind: IDKind;
  videoId: string;
}

export enum IDKind {
  YoutubeVideo = "youtube#video",
}

export enum ItemKind {
  YoutubeSearchResult = "youtube#searchResult",
}

export interface Snippet {
  publishedAt: Date;
  channelId: ChannelID;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: ChannelTitle;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
}

export enum ChannelID {
  UC4Pc9V7QjsJZKkUS8I0Iqw = "UC4Pc9V7-QjsJZKkUS8I0iqw",
}

export enum ChannelTitle {
  RSCOESPIRCell = "RSCOE SP&IR Cell",
}

export enum LiveBroadcastContent {
  None = "none",
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
