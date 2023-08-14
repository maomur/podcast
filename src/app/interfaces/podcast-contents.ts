export interface PodcastContents {
    results: Results[],
}

export interface Results {
    artistName: string,
    trackName: string,
    'im:releaseDate': {},
    collectionName: string
}

export interface PodcastDetails {
    trackName: string,
    releaseDate: string,
    trackTimeMillis: number
}